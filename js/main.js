let data = {
  fname : [],
  lname : []
};
$(document).ready(function (e) {
  $(document).on("click", "#submitForm", function (e) {
    e.preventDefault();

    ShowTable();
    getFormData();
  });
  $(document).on("click", "#AddNew", function (e) {
    e.preventDefault();
    HideTable();
  });
});
function getFormData() {
  const form = document.getElementById("formData");
  const formData = new FormData(form);

 
}
function HideTable() {
  document.getElementById("table-data").style.display = "none";
  document.getElementById("formData").style.display = "block";
}
function ShowTable() {
  document.getElementById("table-data").style.display = "block";
  document.getElementById("formData").style.display = "none";
}
