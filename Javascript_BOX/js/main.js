//Square
function printSquare(n) {
    var str = '';
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            // In ra n dấu *
            str += ' * ';
        }
        // In ra dấu xuống dòng
        str += '<br/>';
    }
    return str;
}
document.write(printSquare(3));
//Bài 1. Viết funciton printTriangle(height), với height là số integer > 2, in ra màn hình 1 hình tam giác vuông cân có chiều cao height. 

function printTriangle(height) {
    var str = '';
    for (var i = 1; i <= height; i++) {
        for (var j = 1; j <= i; j++) {
            str += ' * ';
        }
        str += '<br/>';
    }

    return str;
}
document.write(printTriangle(5) + '<br>');

//Bài 2. Viết function printEmptyRectangle(width, height), với width và height là 2 số integer > 3, in ra một hình chữ nhật rỗng có kích thước width x height. Ví dụ: 

function printEmptyRectangle(width, height) {
    var str = '<pre>';
    for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
            if (i == 0 || i == width - 1 || j == 0 || j == height - 1) {
                str += ' * ';
            } else {
                str += '   ';
            }
        }
        str += '<br>';
    }

    return str;
}
document.write(printEmptyRectangle(5, 6) + '<br>');

//Bài 3. Viết function printSpecialTriangle(height), với height là số integer > 1, in ra hình tam giác cân ngược với chiều cao bằng height. Ví dụ: 

function printSpecialTriangle(height) {
    var str = '<pre>';
    for (var i = 1; i <= height; i++) {
        for (var j = 1; j <= (2 * height - 1); j++) {
            if (i == 1) {

                str += ' * ';
            } else if ((j < i) || (j > (2 * height - 1) + 1 - i)) {
                str += '   ';
            } else {
                str += ' * ';
            }
        }
        str += '<br>';
    }

    return str;
}
document.write(printSpecialTriangle(5));