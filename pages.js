const link1 = document.querySelector(".js-link1 a") /*her griber jeg fat i linkene*/
const link2 = document.querySelector(".js-link2 a") /*her griber jeg fat i linkene*/
const link3 = document.querySelector(".js-link3 a") /*her griber jeg fat i linkene*/

const mainContainer = document.querySelector("main"); /*Her griber jeg fat i main - tom beholder til tekstens indhold*/

link1.addEventListener("click", visSide1);
link2.addEventListener("click", visSide2);
link3.addEventListener("click", visSide3);

function visSide1(event) { /* husk at det er ligemeget hvad der står i parentesen*/
    event.preventDefault(); // Stop linket i at genindlæse siden - taget fra valideringskoden
    fetch("page1.html")     // Henter filen /loader - hent filen
        .then(res => res.text()) // Her modtages html filen og åbnes og indholdes laves om til Lav filen om til tekst 
        .then(data => mainContainer.innerHTML = data); // Put teksten ind i main
}

function visSide2(f) {
    f.preventDefault();
    fetch("page2.html")
        .then(res => res.text())
        .then(data => mainContainer.innerHTML = data);
}

function visSide3(f) {
    f.preventDefault();
    fetch("page3.html")
        .then(res => res.text())
        .then(data => mainContainer.innerHTML = data);
}

// 3. Sæt lytterne på
link1.addEventListener("click", visSide1);
link2.addEventListener("click", visSide2);
link3.addEventListener("click", visSide3);