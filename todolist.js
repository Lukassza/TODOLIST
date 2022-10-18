let elemlist = document.querySelector("#elemlist");
let result = document.querySelector(".result");

let ajouter = document.querySelector("#ajouter");

ajouter.addEventListener("click", function (e) {
  e.preventDefault();
    let liste = document.createElement('p')
    liste.textContent =`${elemlist.value}`
    liste.id="list"+document.querySelectorAll('.result list').length
    liste.style='color:red;'
    result.appendChild(liste)
//   result.textcontent = `${elemlist.value}`;
});
// result.innerHTML = `${elemlist.value}`;









// addLorem.addEventListener('click', function(){
//     //je défini mon nouvel élément
//     let newP = document.createElement('p') // création en mémoire
//     newP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam vitae nulla facilis possimus molestiae necessitatibus optio ab nesciunt voluptatibus, ratione quasi laborum. Corrupti, beatae odit! Possimus a odio voluptatem."
//     newP.id = "newP"+document.querySelectorAll('#result p').length
//     newP.style='color:red;'
//     // une fois prêt, je l'ajoute a mon doument HTML
//     result.appendChild(newP)











//! ACTUALISER LA PAGE //
// let actualiser = document.querySelector(".f5");
// actualiser.addEventListener("click", location.reload(), false);
