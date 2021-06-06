// const Ci = document.querySelectorAll('.category-Item');
const rem = document.querySelectorAll('.remove');

function change(v) {
  for (let i = 0; i < rem.length; i++) {
    rem[i].classList.remove('.remove');
    rem[i].style.display = 'none';
  }
  rem[v].style.display = 'block';
  rem[v].classList.add('.remove');
  // edit.classList.add("remove");
  // edit.style.display = "none";
}
