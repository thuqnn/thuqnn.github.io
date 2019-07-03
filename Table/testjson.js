let request = new XMLHttpRequest();

request.open('GET', 'https://raw.githubusercontent.com/thuqnn/thuqnn.github.io/master/Table/object.json', true);
request.onload = function() {
    var data = JSON.parse(this.response);
    let content = "";
    let count = 1;
    for (var i = 0; i < data.length; i++) {
        content += `<tr>
                         <td> ${(count++)}</td>
                         <td> <img src = ${data[i].image} alt = "${data[i].name}"></td>
                         <td> ${data[i].name} </td>
                         <td> ${data[i].price} </td>
                         <td> ${data[i].model} </td>
                         <td> ${data[i].total} </td>
                     </tr>`;
    }
    document.getElementById("myTbody").innerHTML = content;
}
request.send();