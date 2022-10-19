let elemlist = document.querySelector("#elemlist");
let result = document.querySelector(".result");
let ajouter = document.querySelector("#ajouter");


//! Ajout //
ajouter.addEventListener("click", function (e) {
  e.preventDefault();
    let liste = document.createElement('p')
    liste.textContent =`${elemlist.value}`
    liste.id="liste"+document.querySelectorAll('.result p').length
    liste.style='color:white;'
    result.appendChild(liste)

    // Bouton supprimer //

    let supprimer = document.createElement('Button')
    supprimer.innerHTML="X"
    supprimer.id="supprimer"+document.querySelectorAll('.result p').length
    supprimer.classList.add("SUP")
    liste.appendChild(supprimer)

    // Bouton modifier//
    
    let modifier = document.createElement('Button')
    modifier.innerHTML="Modifier"
    modifier.id="modifier"+document.querySelectorAll('.result p').length
    modifier.classList.add("MOD")
    liste.appendChild(modifier)
})




//!MODIFICATION //
// modifier.addEventListener("click",function(){
//   modifier.parentElement.
// })

//! Supression //
supprimer.addEventListener("click", function() {
  supprimer.parentElement.remove()
})






//! ACTUALISER LA PAGE //
// let actualiser = document.querySelector(".f5");
// actualiser.addEventListener("click", location.reload(), false);
