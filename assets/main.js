const API = 'https://api.thedogapi.com/v1/images/search';
const btnRecharge = document.querySelector('#btnRandom');

fetch(API)
.then(res => res.json())
.then(data => {
    const img = document.querySelector('#img');
    /* img.setAttribute.add('src'); */
    img.src = data[0].url;
});

btnRecharge.addEventListener('click', btnchange);

function btnchange () {
    location.reload();
}
