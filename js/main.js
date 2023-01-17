let arr = [];
$(document).ready(function (e) {
  $(document).on("click", "#submitForm", function (e) {
    e.preventDefault();

    ShowTable();
    getFormData();
    ShowTableData(arr);
  });
  $(document).on("click", "#AddNew", function (e) {
    e.preventDefault();
    HideTable();
  });
});
function ShowTableData(rows) {
  var tableHeaderRowCount = 1;
  var table = document.getElementById("table");
  var rowCount = table.rows.length;
  for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
  }

  rows.forEach((element) => {
    var newRow = table.insertRow();
    var Cell1 = newRow.insertCell(0);
    var Cell2 = newRow.insertCell(1);

    var Text1 = document.createTextNode(element.fname);
    var Text2 = document.createTextNode(element.lname);

    Cell1.appendChild(Text1);
    Cell2.appendChild(Text2);
  });
}
function getFormData() {
  var data = { fname: "", lname: "" };
  data.fname = document.getElementById("fname").value;
  data.lname = document.getElementById("lname").value;
  arr.push(data);

  return;
}
function HideTable() {
  document.getElementById("table-data").style.display = "none";
  document.getElementById("formData").style.display = "block";
}
function ShowTable() {
  document.getElementById("table-data").style.display = "block";
  document.getElementById("formData").style.display = "none";
}
