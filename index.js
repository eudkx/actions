let block_open = document.querySelector(".first-block");
let block_position = document.querySelector(".first-block-wrapper");
let second_block_open = document.querySelector(".second-block");
let second_block_position = document.querySelector(".second-block-wrapper");

block_open.onclick = function () {
  block_open.classList.toggle("active");
  block_position.classList.toggle("active");
}
second_block_open.onclick = function() {
  second_block_open.classList.toggle("active");
  second_block_position.classList.toggle("active");
}