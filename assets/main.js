const API = 'https://api.thedogapi.com/v1/images/search';
const btnRecharge = document.querySelector('#btnRandom');

/* fetch(API)
.then(res => res.json())
.then(data => {
    const img = document.querySelector('#img');
    img.src = data[0].url;
}); */

async function urlDog () {
    const res = await fetch (API);
    const data = await res.json();
    const img = document.querySelector('#img');
    img.src = data[0].url;
}

urlDog();

btnRecharge.addEventListener('click', btnchange);

function btnchange () {
    location.reload();
}


