// Bài 1: Viết 1 function tính bình phương của 1 số.
function tinhBinhPhuong(x) {
    return x * x;
}
document.write("<h4>Bình phương của số </h4>" + tinhBinhPhuong(10));

// Bài 2: Viết function tính thế kỷ của 1 năm. Biết thế kỷ thứ nhất tính từ năm 1 đến 100.

function tinhTheKy(a) {
    var tinhTk = Math.ceil(a / 100);
    return tinhTk;
}
document.write("<br> <p> Thế Kỷ là </p>" + tinhTheKy(2019) + "<br>");

//Bài 3: Cho 1 chuỗi dài hơn 30 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu "..." ở cuối chuỗi.

function layChuoi(chuoi) {
    return chuoi.slice(0, 10);
}
document.write("<br> Chuỗi cần lấy là : " + layChuoi("Techmaster đào tạo kĩ năng") + "..." + "<br>");

//Bài 4: Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên.

function vietHoa(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
document.write("<br> " + vietHoa("THU PHAM") + "<br>");

//Bài 5: Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số.

function numberMin(arrNumber) {
    var arrNumber = arrNumber.sort(function(a, b) { return a - b });
    return arrNumber[0];
}
document.write("<br> " + numberMin([5, 7, 6, 9, 12]) + "<br>");

//Bài 6: Cho 1 mảng gồm tên của 5 học viên. Hãy viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và in ra màn hình danh sách học viên.

function getUser(student) {
    return student.sort().join("<br>");
}
document.write("<br> " + getUser(["Sơn", "Tây", "Hà", "Giang", "An"]));