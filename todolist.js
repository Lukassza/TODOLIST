let elemlist = document.querySelector("#elemlist");
let result = document.querySelector(".result");
let ajouter = document.querySelector("#ajouter");
let barre = false

//! Ajout //
ajouter.addEventListener("click", function (e) {
  e.preventDefault();
    let liste = document.createElement('p')
    liste.textContent =`${elemlist.value}`
    liste.id="liste"+document.querySelectorAll('.result p').length
    liste.classList.add("LIS")
    liste.style='color:white;'
    result.appendChild(liste)

    // Bouton supprimer //

    let supprimer = document.createElement('Button')
    supprimer.innerHTML="X"
    supprimer.id="supprimer"+document.querySelectorAll('.result p').length
    supprimer.classList.add("SUP")
    liste.appendChild(supprimer)
    supprimer.addEventListener("click", function() {
    supprimer.parentElement.remove();
})
    // Bouton modifier//

    let modifier = document.createElement('Button')
    modifier.innerHTML="Modifier"
    modifier.id="modifier"+document.querySelectorAll('.result p').length
    modifier.classList.add("MOD")
    liste.appendChild(modifier)
    
    // modifier.addEventListener("click",function(){
    // modifier.parentElement.
    // })

    //Checkbox barrer//
    let cocher = document.createElement('input')
      cocher.setAttribute("type","checkbox")
      cocher.classList.add("COCHER")
      liste.appendChild(cocher)
      cocher.addEventListener("click",function(){
        if(barre===false){
          cocher.parentElement.style="text-decoration:line-through"
          barre=true
        }
        else{
          cocher.parentElement.style="text-decoration:none"
          barre=false
        }
          
      })
    
    })






//! ACTUALISER LA PAGE //
// let actualiser = document.querySelector(".f5");
// actualiser.addEventListener("click", location.reload(), false);
