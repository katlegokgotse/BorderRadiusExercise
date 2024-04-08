//Declarations and Initialisation
const input = document.getElementById('edtBorder');
const border = document.getElementById('borderRad');
const copy = document.getElementById('btnCopy')
const txt = document.getElementById('u');

//Handles the user input
function handleSubmit(){
  border.style.borderRadius = `${input.value}px`
  txt.textContent = `border-radius: ${input.value}px`
}

//Enables the user to copy the information
function copyText(){
    navigator.clipboard.writeText(txt.innerHTML)
    alert("Text Copied")
}