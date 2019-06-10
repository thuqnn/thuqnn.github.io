//Tạo 1 trang HTML với nội dung là 3 đoạn văn. Hãy viết các function có tác dụng như sau:

//1. function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.

function changeColor() {
    document.getElementById("p1").style.color = "blue";
    document.getElementById("p2").style.color = "yellow";
    document.getElementById("p3").style.color = "red";
}

function changeColorClass() {
    let color = document.getElementsByClassName("nd");
    color[0].style.color = "blue";
    color[1].style.color = "yellow";
    color[2].style.color = "red";
}

//2.function changeBgColor(color): Thay đổi màu nền của trang thành màu color.
function changeBgColor(color) {
    document.body.style.backgroundColor = color;
}
//3.function copyContent(paragraph1, paragraph2): Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2 (tham số truyền vào có thể là id của 2 đoạn văn).
function copyContent(p1, p2) {
    p1.innerHTML = p2.innerHTML;
}
//4.function changeFontSize(x): Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).
function changeFontSize(x) {
    if (Number.isInteger(x) && x >= 0) {
        let xSize = document.getElementsByClassName("nd");
        for (let i = 0; i < xSize.length; i++) {
            xSize[i].style.fontSize = x + "px";
        }
    } else {
        return false;
    }
}

function changeFontSize2(x) {
    if (Number.isInteger(x) && x >= 0) {
        let xSize = document.querySelectorAll("p");
        for (let i = 0; i < xSize.length; i++) {
            xSize[i].style.fontSize = x + "px";
        }
    } else {
        return false;
    }
}
//5.function increaseFontSize(paragraph): Tăng kích thước font chữ của đoạn văn mong muốn (paragraph, tham số truyền vào có thể là id đoạn văn) lên 1 pixel so với kích thước hiện tại, kích thước tăng lên không được vượt quá 30 pixels (Sử dụng sau khi gọi hàm changeFontSize() hoặc dùng window.getComputedStyle).
function increaseFontSize(p1) {
    document.getElementById("p1").innerHTML;
    p1.style.fontSize = "larger";
}
//6.function decreaseFontSize(paragraph): Giảm kích thước font chữ của đoạn văn mong muốn (paragraph, tham số truyền vào có thể là id đoạn văn) xuống 1 pixels so với kích thước hiện tại, kích thước giảm xuống không vượt quá 10 pixels.
function decreaseFontSize(p1) {
    document.getElementById("p1").innerHTML;
    p1.style.fontSize = "smaller";

}