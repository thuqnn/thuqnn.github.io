let tpLink = [];
$.ajax({
    url: 'https://raw.githubusercontent.com/thuqnn/thuqnn.github.io/master/Table/object.json',
    type: 'get',
    dataType: 'json',
}).done(function(data) {
    tpLink = data;
    addTpLink();
});


function addTpLink() {
    let content = "";
    let count = 1;
    for (let i = 0; i < tpLink.length; i++) {
        content += `<tr>
                    <td> ${(count++)}</td>
                    <td> <img src = ${tpLink[i].image} alt = "${tpLink[i].name}"></td>
                    <td> ${tpLink[i].name} </td>
                    <td> ${tpLink[i].price} </td>                 
                    <td> ${tpLink[i].model} </td>
                    <td> ${tpLink[i].total} </td>
                </tr>`;
    }

    document.getElementById("myTbody").innerHTML = content;
}
addTpLink()


function sortColumn(thElement) {
    thElement = $(thElement);
    const column = thElement.attr('data-column');
    $('i.fa').attr('class', 'fa fa-sort');
    if (thElement.attr('data-order') === 'asc') {
        thElement.attr('data-order', 'desc');
        thElement.children().removeClass('fa fa-sort-asc').addClass('fa fa-sort-desc');
        sortAll(column, 1);

    } else {
        thElement.attr('data-order', 'asc');
        thElement.children().removeClass('fa fa-sort-desc').addClass('fa fa-sort-asc');
        sortAll(column, -1);

    }

    addTpLink();
}


function sortAll(column, order) {

    tpLink.sort(function(a, b) {
        let x = a[column];
        let y = b[column];
        if (typeof x == 'string') x = x.toLocaleLowerCase()
        if (typeof y == 'string') y = y.toLocaleLowerCase()
        if (x > y) {
            return -order;
        } else if (x < y) {
            return +order;
        } 
        return 0;
    })

}


function totalTp() {
    let sum = 0;
    for (let i = 0; i < tpLink.length; i++) {
        sum += Number(tpLink[i].price) * tpLink[i].total;
    }
    document.getElementById("sumTotal").innerHTML = sum;
}
totalTp()
    // document.getElementById("sumTotal").innerText = totalTp();