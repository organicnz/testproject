var data = require('./data.json'); //with path

var local_data = data;
var row_data = '';
for (var i = 0; i < local_data.length; i++) {
  row_data =
    row_data +
    '<tr>' +
    '<td>' +
    local_data[i].name +
    '</td>' +
    '<td>' +
    local_data[i].position +
    '</td>' +
    '<td>' +
    local_data[i].office +
    '</td>' +
    '<td>' +
    local_data[i].age +
    '</td>' +
    '<td>' +
    local_data[i].start_date +
    '</td>' +
    '<td>' +
    local_data[i].salary +
    '</td>' +
    '</tr>';
}
var table_body_element = document.createElement('tbody');
table_body_element.innerHTML = row_data;
document.getElementById('table').appendChild(table_body_element);

// const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

// const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
//   v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
// )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

// // do the work...
// document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
//   const table = th.closest('table');
//   Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
//     .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
//     .forEach(tr => table.appendChild(tr));
// })));

// var current_page = 1;
// var records_per_page = 10;

// var objJson = getElementById(table_body_element);

// function prevPage() {
//   if (current_page > 1) {
//     current_page--;
//     changePage(current_page);
//   }
// }

// function nextPage() {
//   if (current_page < numPages()) {
//     current_page++;
//     changePage(current_page);
//   }
// }

// function changePage(page) {
//   var btn_next = document.getElementById("btn_next");
//   var btn_prev = document.getElementById("btn_prev");
//   var listing_table = document.getElementById("listingTable");
//   var page_span = document.getElementById("page");

//   // Validate page
//   if (page < 1) page = 1;
//   if (page > numPages()) page = numPages();

//   listing_table.innerHTML = "";

//   for (var i = (page - 1) * records_per_page; i < (page * records_per_page) && i < objJson.length; i++) {
//     listing_table.innerHTML += objJson[i].adName + "<br>";
//   }
//   page_span.innerHTML = page + "/" + numPages();

//   if (page == 1) {
//     btn_prev.style.visibility = "hidden";
//   } else {
//     btn_prev.style.visibility = "visible";
//   }

//   if (page == numPages()) {
//     btn_next.style.visibility = "hidden";
//   } else {
//     btn_next.style.visibility = "visible";
//   }
// }

// function numPages() {
//   return Math.ceil(objJson.length / records_per_page);
// }

// window.onload = function () {
//   changePage(1);
// }