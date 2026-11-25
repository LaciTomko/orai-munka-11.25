async function txtBeolvasas(fajl, elem) {
    console.log(`Fájl beolvasása: ${fajl}`);
    const response = await fetch(fajl);
    const szoveg = await response.text();

    elem.textContent = szoveg;
    elem.style.textAlign = "left";
    elem.style.lineHeight = "1.5";
    elem.style.textIndent = "15px";
    elem.style.whiteSpace = "pre-line";
}

const menu = document.getElementById("fejvalaszt");
const szcim = document.getElementById("szovegcim");
const szov = document.getElementById("szoveg");

menu.addEventListener("change", function(event){
    const val = this.value;
    console.log(`Kiválasztott fejezet: ${val}`);
    
    if (val == "bevezetes")
    {
        szcim.textContent = "Bevezetés";
        txtBeolvasas("./forras/bevezetes.txt", szov);
    }
    else if (val == "tortenete")
    {
        szcim.textContent = "Története";
        txtBeolvasas("./forras/tortenet.txt", szov);
    }
    else if (val == "klubrol")
    {
        szcim.textContent = "A Klubról";
        txtBeolvasas("./forras/klub.txt", szov);
    }
    
    event.preventDefault();
});

const kepmenu = document.getElementById("kepvalaszt");
const kepelem = document.getElementById("kep");

kepmenu.addEventListener("change", function(){
    const val = this.value;
    console.log(`Kiválasztott kép: ${val}`);

    if (val == "campnou")
    {
        kepelem.src = "./img/campnou.webp";
    }
    else if (val == "cimer")
    {
        kepelem.src = "./img/cimer.jpg";
    }
    else if (val == "csapat")
    {
        kepelem.src = "./img/csapat.jpg";
    }
    else
    {
        kepelem.src = "";
    }
});