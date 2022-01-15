/*
Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích lớn nhất và trả về kết quả của phép nhân 2 số đó.
Ví dụ: INPUT là [2, 3, -5, -2, 4] thì OUTPUT là 10 (cặp -5 và -2 có tích là 10)

 */

//O(n)
function adjacentElementsProduct(inputArray) {
    let max = Number.MIN_SAFE_INTEGER; // account for all integers are negative case
    for (let i = 0; i < inputArray.length - 1; i++) {
        let product = inputArray[i] * inputArray[i + 1];
        if (product > max) max = product;
    }
    console.log(max);
}

adjacentElementsProduct([2, 3, -5, -2, 4]);
adjacentElementsProduct([-3, -5, -2, -5]);
adjacentElementsProduct([-1, -5, -2, 0]);

/*
Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sau. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
Viết chương trình có đầu vào là một mảng chứa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

Ví dụ: INPUT [60, 40, 55, 75, 64] thì OUTPUT là [179, 115]
 */

//O(n)
function alternatingSums(a) {
    let sumTeam1 = 0;
    let sumTeam2 = 0;

    for (let i = 0; i < a.length; i++) {
        sumTeam1 += a[i];
        i++;
    }

    for (let j = 1; j < a.length; j++) {
        sumTeam2 += a[j];
        j++;
    }

    console.log([sumTeam1, sumTeam2]);
}

alternatingSums([60, 40, 55, 75, 64]);
alternatingSums([0, 1, 2, 3, 4, 5, 1]);
