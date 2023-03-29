"use strict";

btnAdd.onclick = () =>{
 const li = document.createElement("li");   
 li.textContent = champ.value;
 ol.appendChild(li);
}

