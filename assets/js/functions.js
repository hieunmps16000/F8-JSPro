// Tổng hợp bài tập duyệt mảng #2

/**
 * 1. Viết hàm compressString để rút gọn một chuỗi bằng cách thay thế các nhóm ký tự liên tiếp giống nhau bằng một ký tự đó kèm theo số lần xuất hiện liên tiếp của ký tự đó.
*/

export function compressString(str) {
    let compress = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compress += str[i] + count;
            count = 1;
        }
    }

    return compress;
}




/**
 * 2. Viết hàm calculateGrade để tính điểm trung bình từ một mảng điểm số và trả về xếp loại dựa trên điểm trung bình đó. Xếp loại được định nghĩa như sau:
    A: Điểm trung bình từ 90 trở lên
    B: Điểm trung bình từ 80 đến dưới 90
    C: Điểm trung bình từ 70 đến dưới 80
    D: Điểm trung bình từ 60 đến dưới 70
    F: Điểm trung bình dưới 60
 */

export function calculateGrade(scores) {
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    const average = sum / scores.length;

    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
    return 'F';
}




/**
 * Viết hàm alternateSum để tính “tổng xen kẽ” từ một mảng số. Trong “tổng xen kẽ”, bạn sẽ cộng số ở vị trí chẵn và trừ số ở vị trí lẻ trong mảng.
 */

export function alternateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += i % 2 == 0 ? arr[i] : - arr[i];
    }
    return sum;
}




/**
 * Viết hàm findLongestWord nhận vào một mảng các chuỗi và trả về chuỗi dài nhất trong mảng đó. Nếu có nhiều chuỗi có độ dài giống nhau và là dài nhất, trả về chuỗi xuất hiện đầu tiên.
 */

export function findLongestWord(str) {
    let maxString = str[0];
    for (let i = 0; i < str.length - 1; i++) {
        if (maxString.length < str[i + 1].length) {
            maxString = str[i + 1];
        }
    }
    return maxString;
}