let tpLink = [{
        image: "https://images-na.ssl-images-amazon.com/images/I/41l4REP3iCL._SL500_AC_SS350_.jpg",
        name: "TP-Link AC1200 Smart WiFi Router",
        price: "44",
        model: "AC1200",
        total: 76
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/31kr4aepPUL._SL500_AC_SS350_.jpg",
        name: "NETGEAR Nighthawk X6S AC4000 Tri-band WiFi ",
        price: "219",
        model: "AC4000",
        total: 716
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/41IEOGEqKyL._SL500_AC_SS350_.jpg",
        name: "Wifi Router AC 5GHz Wireless Router Dual Band ",
        price: "29",
        model: "AC 5GHz",
        total: 442
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/31K78FVYxIL._SL500_AC_SS350_.jpg",
        name: "Cudy AC1200 Dual Band Smart WiFi Router",
        price: "44",
        model: "Cudy AC1200",
        total: 116
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/31w0k1Y-IqL._SL500_AC_SS350_.jpg",
        name: "NETGEAR R6700 Nighthawk AC1750 Dual Band",
        price: "135",
        model: "R6700",
        total: 942
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/41UhtKBCsWL._SL500_AC_SS350_.jpg",
        name: "NETGEAR Nighthawk Pro Gaming XR500 ",
        price: "259",
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
let sortDirection = false;

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

function totalTp() {
    let sum = 0;
    for (let i = 0; i < tpLink.length; i++) {
        sum += Number(tpLink[i].price) * tpLink[i].total;
    }
    document.getElementById("sumTotal").innerHTML = sum;
}
totalTp()
    // document.getElementById("sumTotal").innerText = totalTp();

function sortColumn(columnName) {

    const dataType = typeof tpLink[0][columnName];
    sortDirection = !sortDirection;

    switch (dataType) {
        case 'number':
            sortNumberColumn(sortDirection, columnName);
            break;
        case 'string':
            sortAllColumn(sortDirection, columnName);
            break;
    }

    addTpLink(tpLink);
}

function sortAllColumn(sort, columnName) {
    tpLink = tpLink.sort((p1, p2) => {
        return sort ? p1[columnName].localeCompare(p2[columnName]) : p2[columnName].localeCompare(p1[columnName])
    });
}

function sortNumberColumn(sort, columnName) {
    tpLink = tpLink.sort((p1, p2) => {
        return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]
    });
}