db.orders.aggregate([
  { $match: { status: 'completed' } },
  {
    $addFields: {
      revenue: { $multiply: ['$amount', '$noOfItems'] },
    },
  },
  {
    $group: {
      _id: '$customerId',
      totalRevenue: {
        $sum: '$revenue',
      },
      totalOrders: { $sum: 1 },
      averageOrderValue: { $avg: '$revenue' },
    },
  },
  {
    $lookup: {
      from: 'customers',
      localField: '_id',
      foreignField: 'customerCode',
      as: 'customer',
    },
  },
  { $unwind: '$customer' },
  {
    $project: {
      _id: 0,
      customerId: '$_id',
      customerName: '$customer.name',
      totalOrders: 1,
      totalRevenue: 1,
      averageOrderValue: 1,
    },
  },
  {
    $sort: {
      totalRevenue: -1,
    },
  },
  { $limit: 5 },
])
