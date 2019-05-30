// Bài 1. In ra màn hình ngày, tháng năm hiện tại và xác định đó là mùa nào trong năm. Ví dụ lấy ngày tháng năm hiện tại bằng đối tượng Date của javascript:
var now = new Date();   // Lấy thời gian hiện tại
var date = now.getDate();   // Lấy ngày từ thời gian hiện tại
var month = now.getMonth() + 1;   // Lấy tháng từ thời gian hiện tại. Do tháng trong javascript tính từ 0 - 11 nên phải +1
var year = now.getFullYear();   // Lấy năm (đầy đủ 4 số) từ thời gian hiện tại
var days = ["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"];
var nowVN = days[now.getDay()] + " Ngày " + date + " Tháng " + month + " Năm " + year;
//C1:
switch(month){
  case 1: case 2: case 3:{
  document.write(nowVN + " - Đây Là Mùa Xuân");
    break;
  }
  case 4: case 5: case 6: {
    document.write(nowVN + " - Đây Là Mùa Hạ" + "<br>");
    break;
  }
  case 7: case 8: case 9: {
     document.write(nowVN + " - Đây Là Mùa Thu");
    break;
  }
  case 10: case 11: case 12:{
      document.write(nowVN + " - Đây Là Mùa Đông");
    break;
  }
}
//C2:
function printSeason(mua){
  let month = nowVN + "Mùa Đông";
  if(month <= 3 ){
    month = nowVN + "Mùa Xuân";
  }
  else if(month <= 6){
    month = nowVN + "Mùa Hạ";
  }
  
  else if(month <= 9){
    month = nowVN + "Mùa Thu";
  }
  return month;
}
document.write(printSeason());
//- Bài 2. Một sinh viên có điểm kiểm tra môn lập trình web là x dưới dạng số (0 <= x <= 10). Hãy chuyển điểm số sang dạng chữ với điều kiện sau:

/*Từ 8.5 đến 10: Điểm A
Từ 7 đến dưới 8.5: Điểm B
Từ 5.5 đến dưới 7: Điểm C
Từ 4 đến dưới 5.5: Điểm D
Từ 0 đến dưới 4: Điểm F
*/
function checkNum(x){
	let point = "Điểm F"; //Mặc định là F
  if(x >= 8.5){
    point = "Điểm A"; //Nếu x >= 8.5
  }
  else if(x >= 7){ //Mếu x không >= 8.5 và x>=7
    point = "Điểm B";
  }
   else if(x >= 5.5){ //Nếu x không >=7 và x >= 5.5
    point = "Điểm C";
  }
    else if(x >= 4){ //Nếu x không >= 5.5 và x >= 4
    point = "Điểm D";
  }
  return point; //nếu x không thỏa mãn các điều kiện trên thì sẽ là Điểm F
}
document.write("<br> " + checkNum(5.7));

//rút gọn


//Bài 3. Viết hàm translate() có tác dụng dịch từ "Hello" sang 5 thứ tiếng khác nhau (tự chọn) với tham số truyền vào là mã quốc gia, sử dụng switch và mặc định dịch sang tiếng Việt.

function translate(maQG){
  let trans = "Hello";
  switch(maQG){
     default:
		  document.write(trans = "<br> Xin chào");
			break;
    case "CHINA":{
       document.write(trans = "<br> Nihao");
      break;
    }
      case "SPAIN":{
       document.write(trans = "<br> Hola");
      break;
    }
      case "HINDI":{
     document.write(trans = "<br> नमस्ते");
      break;
    }
      case "THAILAND":{
       document.write(trans = "<br> สวัสดี");
      break;
    }
      case "JAPAN":{
       document.write(trans = "<br> こんにちは");
      break;
    }
  }
  return maQG;
}
document.write(translate(""));

// Bài 4. Cho 1 mảng chỉ gồm các giá trị true và false. Hãy kiểm tra xem giá trị true xuất hiện lần đầu trong mảng ở vị trí nào.
function indexTrue(arr){
for (let i = 0; i<= arr.length; i++){
  if(arr[i] == true){
  return "<br> Vị Trí Lần Đầu Xuất Hiện Của True Là: " + i;
    }
  }
}
document.write(indexTrue([false,false,false,true,false,true]));