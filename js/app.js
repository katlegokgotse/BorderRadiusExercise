const input = document.getElementById('edtBorder');
const border = document.getElementById('borderRad');

const txt = document.getElementById('u');

function handleSubmit(){
  border.style.borderRadius = `${input.value}px`
}