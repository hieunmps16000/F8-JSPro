// ========== Tạo hàm findMostFrequentNumber ==========

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



// ========== Tạo hàm removeDuplicates ==========

/**
 * Viết hàm removeDuplicates 
 * nhận vào một mảng và trả về một mảng mới mà không có bất kỳ phần tử trùng lặp nào từ mảng ban đầu.
 */

function removeDuplicates(arr) {
    let unique = [];
    for (let element of arr) {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    }
    return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]