/*
Cho một mảng các chuỗi, viết chương trình trả về mảng mới chứa các chuỗi có độ dài lớn nhất.

Ví dụ: INPUT là [“BINH”, “HUNG”, “PHUOC”, “CAO”, “KHANH”] thì 
OUTPUT return là [“PHUOC”, “KHANH”]

 */

//CÁCH 1:
//O(n^2) nếu output là mảng không chứa kí tự lặp lại
//O(n) nếu mảng output chứa phần tử lặp lại.
function allLongestStrings1(inputArray) {
    let outputArr = [];
    let max = 0;

    for (i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > max) {
            max = inputArray[i].length;
        }
    }

    for (j = 0; j < inputArray.length; j++) {
        if (inputArray[j].length == max && !outputArr.includes(inputArray[j])) {
            //avoid duplicate strings
            outputArr.push(inputArray[j]);
        }
    }

    console.log(outputArr);
}
allLongestStrings1(["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]);
allLongestStrings1(["BINH", "HUNG", "PHUOC", "CAO", "KHANH", "KHANH"]);

//CÁCH 2:
//O(n) khi xử lí mảng thành 1 set.
function allLongestStrings2(inputArray) {
    let outputSet = new Set();
    let max = 0;

    for (i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > max) {
            max = inputArray[i].length;
        }
    }

    for (j = 0; j < inputArray.length; j++) {
        if (inputArray[j].length == max) {
            outputSet.add(inputArray[j]);
        }
    }

    console.log(Array.from(outputSet));
}

allLongestStrings2(["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]);
allLongestStrings2(["BINH", "HUNG", "PHUOC", "CAO", "KHANH", "KHANH"]);

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
