function findAllSubarraysWithGivenSum(arr, k) {
    let count = 0;
    let prefixSum = 0;

    const prefixSumMap = new Map();
    prefixSumMap.set(0, 1);

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];

        const reqPreviousPrefixSum = prefixSum - k;

        count += prefixSumMap.get(reqPreviousPrefixSum) ?? 0;

        prefixSumMap.set(
            prefixSum,
            (prefixSumMap.get(prefixSum) ?? 0) + 1
        );
    }

    return count;
}
