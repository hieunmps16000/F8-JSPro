// Tạo hàm findMostFrequentNumber

/**
 * Viết hàm findMostFrequentNumber 
 * nhận vào một mảng số và trả về số xuất hiện nhiều nhất trong mảng đó. 
 * Nếu có nhiều số xuất hiện với cùng số lần, trả về số đầu tiên tìm thấy.
 */

function findMostFrequentNumber(arr) {
    let storage = {};
    let topView = 0;
    let topElement = arr[0];

    for (let element of arr) {
        if (storage[element]) {
            storage[element]++;
        } else {
            storage[element] = 1;
        }
        
        if (storage[element] > topView) {
            topView = storage[element];
            topElement = element;
        }
    }

    return topElement;

}

// console.log(findMostFrequentNumber(['Mango', 'Apple', 'Strawberry', 'Apple']));