const form = document.getElementById('entriesMade');
const input = form.querySelectorAll('input');
const ul = document.getElementById('entries');


function attachName() {
    const text = input[0].value;
    const date = input[1].value;
    const message = input[2].value;
    console.log(text);
    const li = document.createElement('li');
    li.textContent = `${text}   ${date}  ${message}`;
    ul.appendChild(li);

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    attachName();


});