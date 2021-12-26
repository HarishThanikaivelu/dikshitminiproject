const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}
function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
    parent.classList.remove('focus');
}
}
inputs.forEach(inputs => {
    inputs.addEventListener('focus', focusFunc);
    inputs.addEventListener('blur', blurFunc);
});