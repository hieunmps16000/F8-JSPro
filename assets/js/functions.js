// Tổng hợp bài tập duyệt mảng #2

/**
 * Viết hàm compressString để rút gọn một chuỗi bằng cách thay thế các nhóm ký tự liên tiếp giống nhau bằng một ký tự đó kèm theo số lần xuất hiện liên tiếp của ký tự đó.
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

// console.log(compressString("aaabbc")); // a3b2c1