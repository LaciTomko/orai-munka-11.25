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
const cimm = document.getElementById("szovegcim");
const szov = document.getElementById("szoveg");

menu.addEventListener("change", function(event){
    const val = this.value;
    console.log(`Kiválasztott fejezet: ${val}`);
    
    if (val == "bevezetes")
    {
        cimm.textContent = "Bevezetés";
        txtBeolvasas("./forras/bevezetes.txt", szov);
    }
    else if (val == "tortenete")
    {
        cimm.textContent = "Története";
        txtBeolvasas("./forras/tortenet.txt", szov);
    }
    else if (val == "klubrol")
    {
        cimm.textContent = "A Klubról";
        txtBeolvasas("./forras/klub.txt", szov);
    }
    
    event.preventDefault();
});