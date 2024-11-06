function add_divs() {
  const main_sector = document.getElementById("main_sector");
  main_sector.innerHTML = "";
  let n_value = document.getElementById("n_value").value;
  if (n_value >= 6 || n_value < 0) return;

  for (let i = 1; i <= n_value; i++) {
    const new_div = document.createElement("div");
    new_div.classList.add("repeatable_div");
    new_div.classList.add("b_line");

    const number_div = document.createElement("div");
    number_div.innerText = i;
    number_div.classList.add("div_number");
    number_div.classList.add("b_line");

    new_div.appendChild(number_div);
    main_sector.appendChild(new_div);
  }
}
