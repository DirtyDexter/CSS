const checkboxes = document.querySelectorAll("input");
const all = document.getElementById("all");
const notAll = [...checkboxes].filter(item => item.getAttribute("id") !== "all");

checkboxes.forEach((item) => {
  item.addEventListener("change", ({ target }) => {
    if (target.getAttribute("id") === "all") {
      checkboxes.forEach((item) => (item.checked = target.checked));
    } else if (notAll.filter(item => item.checked).length === 0) {
      all.checked = false;
      all.indeterminate = false;
    } else if (notAll.filter(item => item.checked).length !== notAll.length) {
      all.indeterminate = true;
    } else if (notAll.filter(item => item.checked).length === notAll.length) {
      all.checked = true;
      all.indeterminate = false;
    }
  });
});
