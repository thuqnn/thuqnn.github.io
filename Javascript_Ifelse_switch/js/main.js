//- Bài 1. Sử dụng câu lệnh if để viết 1 hàm với 2 tham số bất kỳ, kiểm tra xem 2 tham số có phải là number không và tìm ra số lớn nhất trong 2 số đó.

function soLn(a, b) {
    let kq;
    if (typeof a == "number" && typeof b == "number") {
        if (a < b) {
            document.write(kq = "so lon nhat la " + b + "<br>");
        } else {
            document.write(kq = "so lon nhat la " + a + "<br>");
        }
    } else {
        return document.write(kq = "ban nhap khong phai la so" + "<br>");
    }
}
soLn(1, 2);

//Bài 2. Viết 1 hàm dùng để tính giai thừa của 1 số. Kiểm tra tham số đầu vào phải là 1 số nguyên >= 0, sau đó tính giai thừa và in ra kết quả.
function tinhGiaiThua(num) {
    let sn;
    if (num >= 0) {
        let giaiThua = 1;
        for (let i = 1; i <= num; i++)
            giaiThua *= i;
        document.write("<br> giai thua cua so " + num + " la " + giaiThua + "<br>");
        return giaiThua;
    } else {
        return document.write(sn = "ban hay nhap so lon hon hoac = 0");
    }
}
tinhGiaiThua(6);

//Bài 3. Cho 1 mảng các số bất kỳ. Tạo ra 1 mảng mới chỉ chứa các số chẵn lấy ra từ mảng trên và sắp xếp theo thứ tự giảm dần.

// function arrNumber(arr){
//  arr.sort(function(a, b){return b - a});
//    for ( let i = 0; i <= arr.length ; i++){
//     if(arr[i] % 2 == 0){
//       document.write(arr[i] + " ");
//     }
//   }
//   return arr;
// }
// arrNumber([10,2,5,3,9,8]);

function arrNumber(arr) {
    arr.sort(function(a, b) { return b - a });
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]); //push tung phan tu vao trong mang moi
        if (newArr[i] % 2 == 0) {
            document.write(newArr[i] + " ");
        }
    }
    return newArr;
}
arrNumber([10, 6, 3, 5, 4, 9, 8, 7, 2]);

//Bài 4. Một trang web cho phép người dùng tạo tài khoản. Hãy viết hàm kiểm tra tính hợp lệ của thông tin người dùng nhập vào. Nếu hợp lệ trả về "Pass", nếu không hợp lệ trả về "Fail".
//Giả sử tham số đầu vào là 1 object có dạng như sau (giá trị của thuộc tính là do người dùng nhập và đều là chuỗi): 
user = {
        username: "",
        password: "secret",
        confirm: "secret",
        check: function() {
            if (this.username == "") {
                document.write("khong phai rong");
                if(this.username <= 20){
                    document.write("ban nhap dung");
                }
            }
        }
    }
    //Hãy kiểm tra username phải khác rỗng và không được vượt quá 20 ký tự, password phải có độ dài từ 6 đến 32 ký tự, confirm phải giống password.