function linearSearch (arr, target) {
  return arr.indexOf(target);
};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let lowest = 0;
  let highest = arr.length;
  // While high and low indices do not overlap...
  while (lowest <= highest) {

    // Find the midpoint between high and low indices
    let midPoint = Math.floor((lowest + highest) / 2);
    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
      // Return the midpoint index
    if (target === arr[midPoint]) {
      return midPoint;
    }
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    else if (target > arr[midPoint]) {
      lowest = midPoint + 1;
    }
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
    else {
      highest = midPoint - 1;
    }
  // Return -1 if the loop exits with overlapping pointers
  }
  return -1;
}


module.exports = [linearSearch, binarySearch]
