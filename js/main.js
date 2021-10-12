// select elements
let lbox = document.getElementById('lbox');
let rbox = document.getElementById('rbox');
let btn_left = document.getElementById('btn_left');
let btn_right = document.getElementById('btn_right');
let add_btn = document.getElementById('add_btn');
let input = document.getElementById('input');

// add to the left box 
add_btn.addEventListener('click', function () {
    let p = document.createElement('p');
    let input = document.getElementById('input');
    p.classList.add('paragraph');
    p.innerText = input.value;
    lbox.appendChild(p)
    input.value = '';
    p.onclick = function () {
        this.classList.toggle('add')
    }
})

// loop through elements
function loopEle() {
    let list = document.querySelectorAll('.paragraph');
    for (let item of list) {
        if (item.classList.contains('add')) {
            lbox.appendChild(item)
            item.classList.remove('add')
        }
    }
}
// move element to right box
btn_right.addEventListener('click', loopEle);
// move element to left box
btn_left.addEventListener('click', loopEle);




