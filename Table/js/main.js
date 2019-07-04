let tpLink = [{
        image: "https://images-na.ssl-images-amazon.com/images/I/41l4REP3iCL._SL500_AC_SS350_.jpg",
        name: "TP-Link AC1200 Smart WiFi Router",
        price: 44,
        model: "AC1200",
        total: 76
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/31kr4aepPUL._SL500_AC_SS350_.jpg",
        name: "NETGEAR Nighthawk X6S AC4000 Tri-band WiFi ",
        price: 219,
        model: "AC4000",
        total: 716
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/41IEOGEqKyL._SL500_AC_SS350_.jpg",
        name: "Wifi Router AC 5GHz Wireless Router Dual Band ",
        price: 29,
        model: "AC 5GHz",
        total: 442
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/31K78FVYxIL._SL500_AC_SS350_.jpg",
        name: "Cudy AC1200 Dual Band Smart WiFi Router",
        price: 44,
        model: "Cudy AC1200",
        total: 116
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/31w0k1Y-IqL._SL500_AC_SS350_.jpg",
        name: "NETGEAR R6700 Nighthawk AC1750 Dual Band",
        price: 135,
        model: "R6700",
        total: 942
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/41UhtKBCsWL._SL500_AC_SS350_.jpg",
        name: "NETGEAR Nighthawk Pro Gaming XR500 ",
        price: 259,
        model: "XR500",
        total: 332
    }
];
//Cách 1
// function myFunction() {
//     let table = document.getElementById("myTable");
//     count = 1;
//     for (let i = 0; i < tpLink.length; i++) {
//         let row = table.insertRow(-1);
//         let cell1 = row.insertCell(0);
//         let cell2 = row.insertCell(1);
//         let cell3 = row.insertCell(2);
//         let cell4 = row.insertCell(3);
//         let cell5 = row.insertCell(4);
//         let cell6 = row.insertCell(5);
//         cell1.innerHTML = count++;
//         cell2.innerHTML = "<img src = " + tpLink[i].image + ">";
//         cell3.innerHTML = tpLink[i].name;
//         cell4.innerHTML = tpLink[i].price;
//         cell5.innerHTML = tpLink[i].model;
//         cell6.innerHTML = tpLink[i].total;
//     }
// }
// myFunction();

//Cách 2
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
    const sort = thElement.attr('data-order');
    $('.fa.fa-sort-asc').removeClass("fa fa-sort-asc").addClass('fa fa-sort');
    $('.fa.fa-sort-desc').removeClass("fa fa-sort-desc").addClass('fa fa-sort');
    if (sort === 'asc') {
        thElement.attr('data-order', 'desc');
        thElement.children().removeClass('fa fa-sort-asc').addClass('fa fa-sort-desc');
        sortAll(column, sort);

    } else {
        thElement.attr('data-order', 'asc');
        thElement.children().removeClass('fa fa-sort-desc').addClass('fa fa-sort-asc');
        sortAll(column, sort);

    }

    addTpLink();
}


function sortAll(column, sort) {

    tpLink.sort(function(a, b) {
        let x = a[column];
        let y = b[column];
        if (typeof x == 'string') x = x.toLocaleLowerCase()
        if (typeof y == 'string') y = y.toLocaleLowerCase()
        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        } 
        return 0;
    })
    if (sort == 'desc') {
        return tpLink.reverse();
    }
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