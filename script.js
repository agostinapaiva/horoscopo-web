const form = document.getElementById ('horoscopo-form');

form.addEventListener('submit', () => {
    event.preventDefault();
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            return response.json(); 
        })
        .then(data => {
            mostrarPerro(data.message);  
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});

function mostrarPerro(url) {  
    const seccionImagen = document.getElementById("image-section");
    seccionImagen.innerHTML = `<img src="${url}">`;
}