function numberThree(arr){
    arr = [1,2,3,4,5,6,7]
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }
    console.log(arr[arr.length-3])
}
numberThree()
