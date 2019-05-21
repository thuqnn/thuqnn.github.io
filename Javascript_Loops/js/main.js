//Bài 1. Cho 1 chuỗi số, hãy viết hàm có tác dụng sao chép chuỗi số lên 10 lần, ngăn cách nhau bởi ký tự "-". Ví dụ cho chuỗi "123" thì kết quả sẽ là "123-123-123-123-123-123-123-123-123-123".

function strNumber(str) {
    for (var i = 0; i <= 9; i++) {
        document.write(str);
    }
    return str;
}
strNumber("13546");

//Bài 2. Cho 1 số nguyên n. Viết hàm tính n giai thừa (n!). Ví dụ: n = 5, kết quả trả về là 5! = 1 * 2 * 3 * 4 * 5 = 120.

function sGiaiThua(soNhapVao) {
    var giaiThua = 1;
    for (var i = 1; i <= soNhapVao; i++)
        giaiThua = giaiThua * i;
    document.write("<br>" + giaiThua);
    return giaiThua;
}
sGiaiThua(6);

// Bài 3. Cho 1 chuỗi, hãy viết hàm đảo ngược chuỗi đó. Ví dụ cho chuỗi "hello" thì kết quả trả về sẽ là "olleh". Gợi ý: 1 chuỗi tương tự 1 mảng với mỗi phần tử là 1 ký tự trong chuỗi.

/*function daoChuoi(str){
  var arrstr = str.split("");
  var reveserstr = arrstr.reverse();
  var newChuoi = reveserstr.join("");
  return newChuoi;
}
document.write("<br>" + daoChuoi("hello"));*/

function daoChuoi(str) {
    var arrStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        arrStr = arrStr + str[i];
    }
    return arrStr;
}
document.write("<br>" + daoChuoi("hello") + "<br>");

//Bài 4. Cho 1 mảng tên của n học viên. Viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và in ra màn hình danh sách học viên kèm theo số thứ tự (sử dụng document.write()).

function getUser(student) {
    var student = student.sort();
    for (var i = 0; i < student.length; i++) {
        document.write((i + 1) + " " + student[i] + "<br>");
    }
    return student;
}
getUser(["Sơn", "Tây", "Hà", "Giang", "An"]);

// function numberMin(numbers){
//     return Math.min.apply(null, numbers);
//   }
//   document.write("<br> " + numberMin([5,7,6,9,12]) + "<br>");

//Bài 5. Cho 1 mảng các số. Viết function tạo ra 1 mảng mới với các số là số dư tương ứng khi chia các số trong mảng cũ cho 2. Gợi ý: Để lấy số dư của 1 số cho 2 ta dùng toán tử %. Ví dụ: 5 % 2 = 1 (5 chia 2 dư 1).
function arrNum(num) {
    for (var i = 0; i < num.length; i++) {
        document.write(" " + num[i] % 2);
    }
    return num;
}
arrNum([1, 4, 5, 6, 3, 6, 9]);

//Bài 6. Chỉ dùng vòng lặp for hoặc while, viết function in ra màn hình các số từ 1 đến 100 sao cho những giá trị là chẵn sẽ có màu xanh, những giá trị là lẻ có màu đỏ.

function printColor(color) {
    for (var i = 0; i <= 100; i++) {
        if ((i + 1) % 2 == 0) {
            document.write("<div>" + i + "</div>");
        } else if ((i + 1) % 2 != 0)
            document.write("<p>" + i + "</p>");
    }
    return color;
}
printColor();