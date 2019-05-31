const form = document.getElementById('entriesMade');
const input = form.querySelectorAll('input');
const tr = document.getElementById('rows');



function attachName() {
        const row = document.createElement('tr');
        tr.appendChild(row);
    
            for (let i = 0; i<input.length; i += 1){
                const td = document.createElement('td');
                td.textContent = input[i].value;
                row.appendChild(td);
            }
        }

form.addEventListener('submit', (e) => {
    e.preventDefault();
    attachName();


});