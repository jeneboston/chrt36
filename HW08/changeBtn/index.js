console.log("index.js is connected!");
//we find first button by id
const btn = document.getElementById('magic-btn');
//copying it. We create new button
const cloneBtn = btn.cloneNode(true);
cloneBtn.id = 'magic-btn-2';

btn.addEventListener('click', () => {
    cloneBtn.textContent = 'I will change YOU';
    cloneBtn.style.backgroundColor = "#a78b71";
    cloneBtn.style.color = "white";
    cloneBtn.classList.add('second-btn')
    // cloneBtn.className = 'second-btn';
    document.body.append(cloneBtn);
})

let toggle = true;
cloneBtn.addEventListener('click', () => {
    if(toggle){
        cloneBtn.style.backgroundColor = "#9c4a1a";
        cloneBtn.style.color = "black";
    } else {
        cloneBtn.style.backgroundColor = "#f7c815"    ;
        cloneBtn.style.color = "white";
    }  
    toggle = !toggle;  
})

