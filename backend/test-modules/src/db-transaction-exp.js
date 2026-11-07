db.orders.aggregate([
  { $match: { status: 'completed' } },
  {
    $addField: {
      orderRevenue: {
        $multiply: ['$amount', '$noOfOrderId'],
      },
    },
  },
  {
    $group: {
      _id: '$customerId',

      totalOrders: { $sum: 1 },
      averageOrderValue: { $avg: '$amouunt' },
    },
  },
  {
    $lookup: {
      from: 'customers',
      localField: '_id',
      foreignField: '_id',
      as: 'customer',
    },
  },
  { $unwind: '$customer' },
  {
    $project: {
      customerId: '$_id',
      customerName: '$customer.name',
      totalRevenue: 1,
      totalOrders: 1,
      averageOrderValue: 1,
    },
  },
  { $sort: -1 },
  { $limit: 5 },
])
