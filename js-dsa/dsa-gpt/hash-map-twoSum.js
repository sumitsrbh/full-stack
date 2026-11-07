const nums = [2, 71, 11, 15, 7]
const target = 9

function findIndicsOFTwoSum(nums, target) {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i]
    if (map.has(compliment)) {
      const complementIndex = map.get(compliment)
      return [complementIndex, i]
    }
    map.set(nums[i], i)
  }
  return null
}

console.log(findIndicsOFTwoSum(nums, target))
