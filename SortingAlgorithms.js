
//insertion sort
//________________________________________________________________________________________________________
export function getInsertionSortAnimations(array){
    var animations = [];
    animations = insertionSort(array, animations);
    return animations
  }
  
  function insertionSort(array, animations){
    for (let i = 1; i < array.length; i++) {
      let j = i;
      while (j > 0 && array[j - 1] > array[j]) {
        animations.push([j - 1, j, i]);
        const temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
        j--;
      }
    }

    return animations;
  }

  //selection sort
  //________________________________________________________________________________________________________
export function getSelectionSortAnimations(array){
  var animations = [];
  animations = selectionSort(array, animations);
  return animations;
}
  
  function selectionSort(array, animations){
      for(let start = 0; start < array.length; start++){
          var minindex = start;
            for(let i = start; i < array.length; i++){
              if(array[i] < array[minindex]){
                minindex = i;
                animations.push([start, i, false]);
              }
            }
            var temp = array[minindex];
            array[minindex] = array[start];
            array[start] = temp;
            animations.push([start, minindex, true]);
          }
         return animations;
  }

  //merge sort
  //________________________________________________________________________________________________________
  export function getMergeSortAnimations(array){
    const animations = [];
    if (array.length <= 1) return array;
    const helper = array.slice();
    mergeSort(array, 0, array.length-1, helper, animations);
    return animations;
  }

  function mergeSort(array, start, stop, helper, animations){
    if(start === stop) return;

      var mid = Math.floor((start+stop)/2);
      mergeSort(helper, start, mid, array, animations);
      mergeSort(helper, mid+1, stop, array, animations);
      merge(array, start, mid, stop, helper, animations);
  }

  function merge(array, start, mid, stop, helper, animations){
    var l = start;
    var r = mid + 1;
    var i = start;
    while(l <= mid && r <= stop){
      animations.push([l, r]);
      animations.push([l, r]);
      if(helper[l] <= helper[r]){
        animations.push([i,helper[l]]);
        array[i++] = helper[l++];
      } else {
        animations.push([i,helper[r]]);
        array[i++] = helper[r++];
      }
    }
    while(l <= mid){
      animations.push([l, l]);
      animations.push([l, l]);
      animations.push([i, helper[l]]);
      array[i++] = helper[l++];
    }
    while(r <= stop){
      animations.push([r, r]);
      animations.push([r, r]);
      animations.push([i, helper[r]]);
      array[i++] = helper[r++];
    }
    return animations;
  }

  //quick sort
  //________________________________________________________________________________________________________

  export function getQuickSortAnimations(array){
    const animations = [];
    quickSort(array, 0, array.length - 1, animations);
    return animations;
  }

  function quickSort(array, low, high, animations) {
    if(low >= high){
      return;
    }
    const pi = partition(array, low, high, animations);
    quickSort(array, low, pi - 1, animations);
    quickSort(array, pi + 1, high, animations);
    return animations;
  }

  function partition(array, low, high, animations) {
    const pivot = array[high];
    let i = low;

    for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
        animations.push([i,j]);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
      }
    }
    animations.push([high, i]);
    const temp = array[i];
    array[i] = array[high];
    array[high] = temp;
    return i;
  }
  
//bubble sort
//_____________________________________

export function getBubbleSortAnimations(array){
  var animations = [];
  animations = bubbleSort(array, animations);
  return animations
}

function bubbleSort(array, animations){
  for(let i = 0; i < array.length-1; i++){
    for(let j = 0; j < array.length - i - 1; j++){
      if(array[j+1] < array[j]){
        animations.push([i, j, j+1]);
        var temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
  }
  return animations;
}