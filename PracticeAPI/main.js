
const URL = `https://api.thecatapi.com/v1/images/search`

function cats() {fetch(URL)
.then(res => res.json())
.then(data => {
    const img = document.querySelector(`img`)
    img.src = data[0].url; 
})}
cats()
document.getElementById(`btn`).onclick = function(){
    cats()
}
console.log(fetch(URL))


