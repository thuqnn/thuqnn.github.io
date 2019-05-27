// Bài 1. In ra màn hình ngày, tháng năm hiện tại và xác định đó là mùa nào trong năm. Ví dụ lấy ngày tháng năm hiện tại bằng đối tượng Date của javascript:
var now = new Date();   // Lấy thời gian hiện tại
var days = ["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ 7"];
var date = now.getDate();   // Lấy ngày từ thời gian hiện tại
var month = now.getMonth() + 1;   // Lấy tháng từ thời gian hiện tại. Do tháng trong javascript tính từ 0 - 11 nên phải +1
var year = now.getFullYear();   // Lấy năm (đầy đủ 4 số) từ thời gian hiện tại

//C1:
/*switch(month){
  case 1: case 2: case 3:{
  document.write(days[now.getDay()] + " Ngày " + date + " Tháng " + month + " Năm " + year + " - Đây Là Mùa Xuân");
    break;
  }
  case 4: case 5: case 6: {
    document.write(days[now.getDay()] + " Ngày " + date + " Tháng " + month + " Năm " + year + " - Đây Là Mùa Hạ");
    break;
  }
  case 7: case 8: case 9: {
     document.write(days[now.getDay()] + " Ngày " + date + " Tháng " + month + " Năm " + year + " - Đây Là Mùa Thu");
    break;
  }
  case 10: case 11: case 12:{
      document.write(days[now.getDay()] + " Ngày " + date + " Tháng " + month + " Năm " + year + " - Đây Là Mùa Đông");
    break;
  }
}
*/
//C2:
function printMua(x){
  if(month >= 1 && month <=3){
return days[now.getDay()] + " Ngày " + date + " Tháng " + month + " Năm " + year + "MÙA XUÂN";
}
else if(month >= 4 && month <=6){
return days[now.getDay()] + " Ngày " + date + " Tháng " + month + " Năm " + year + " MÙA HÈ";
}
else if(month >= 7 && month <=9){
 return days[now.getDay()] + " Ngày " + date + " Tháng " + month + " Năm " + year + " MÙA THU";
}
else{
  return days[now.getDay()] + " Ngày " + date + " Tháng " + month + " Năm " + year + " MÙA ĐÔNG";
}
}
document.write(printMua(1));
//- Bài 2. Một sinh viên có điểm kiểm tra môn lập trình web là x dưới dạng số (0 <= x <= 10). Hãy chuyển điểm số sang dạng chữ với điều kiện sau:

/*Từ 8.5 đến 10: Điểm A
Từ 7 đến dưới 8.5: Điểm B
Từ 5.5 đến dưới 7: Điểm C
Từ 4 đến dưới 5.5: Điểm D
Từ 0 đến dưới 4: Điểm F
*/
function checkNum(x){
	if(x >= 0 && x < 4){
    return "Điểm F";
  }
  else if(x >= 4 && x < 5.5){
    return "Điểm D";
  }
   else if(x >= 5.5 && x < 7){
    return "Điểm C";
  }
  else if(x >= 7 && x < 8.5){
    return "Điểm B";
  }
  else if(x >= 8.5 && x < 10){
    return "Điểm A";
  }
  return "Bạn nhập vào số ko hợp lệ để tính điểm";
}
document.write("<br> " + checkNum(5.7));
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
document.write(indexTrue([false,false,true,true,false,true]));