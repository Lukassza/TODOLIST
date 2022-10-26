let elemlist = document.querySelector("#elemlist");
let result = document.querySelector(".result");
let ajouter = document.querySelector("#ajouter");
let barre = false;

//! Ajout //
ajouter.addEventListener("click", function (e) {
  e.preventDefault();
  if (elemlist.value == "") {
    prompt("Ne rien faire c'est déjà faire quelque chose");
  } else {
    let liste = document.createElement("p");
    liste.textContent = `${elemlist.value}`;
    document.getElementById("elemlist").value = "";
    liste.id = "liste" + document.querySelectorAll(".result p").length;
    liste.classList.add("LIS");
    liste.style = "color:white;";
    result.appendChild(liste);

    // Bouton supprimer //

    let supprimer = document.createElement("Button");
    supprimer.innerHTML = "X";
    supprimer.classList.add("SUP");
    liste.appendChild(supprimer);
    supprimer.addEventListener("click", function () {
      supprimer.parentElement.remove();
    });

    //Checkbox barrer//
    let cocher = document.createElement("input");
    cocher.setAttribute("type", "checkbox");
    cocher.classList.add("COCHER");
    liste.appendChild(cocher);
    cocher.addEventListener("click", function () {
      if (barre === false) {
        cocher.parentElement.style =
          "text-decoration:line-through;text-decoration-thickness:5px;text-decoration-color:black;color:lightslategray;";
        barre = true;
      } else {
        cocher.parentElement.style = "text-decoration:none";
        barre = false;
      }
    });
    // Bouton modifier//
    let modifier = document.createElement("Button");
    modifier.innerHTML = "Modifier";
    modifier.classList.add("MOD");
    result.appendChild(modifier);

    modifier.addEventListener("click", function () {
      let input = document.createElement("input");
      modif = 0;
      input.setAttribute("type", "text");
      input.setAttribute("id", modif);
      input.setAttribute("placeholder", "remplacez le texte ");
      liste.innerHTML=""
      liste.appendChild(input);

      cocher.style = "display:none;";
      // liste.parentElement.replaceChild(input, liste);

      let modifbtn = document.createElement("Button");
      modifbtn.classList.add("VAL");
      modifbtn.textContent = "Valider modif";
      modifbtn.addEventListener("click", function () {
        liste.textContent = `${input.value}`;
        //
        let supprimer = document.createElement("Button");
    supprimer.innerHTML = "X";
    supprimer.classList.add("SUP");
    liste.appendChild(supprimer);
    supprimer.addEventListener("click", function () {
      supprimer.parentElement.remove();
    });
      });
      liste.appendChild(modifbtn);
    });
  }
});

//! ACTUALISER LA PAGE //
let actualiser = document.querySelector(".f5");
actualiser.addEventListener("click", function () {
  location.reload();
});
