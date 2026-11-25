const cimkontener = document.createElement("div");
cimkontener.className = "container-fluid text-center p-4";
cimkontener.id = "fejlec";

const cimsor = document.createElement("div");
cimsor.className = "row";

const cim = document.createElement("h1");
cim.className = "text-center display-3";
cim.textContent = "FC Barcelona";

const alcim = document.createElement("h2");
alcim.className = "display-6";
alcim.textContent = "Més que un club";

const fejvalasztsor = document.createElement("div");
fejvalasztsor.className = "row mt-3 justify-content-center";

const fejvalasztoszlop = document.createElement("div");
fejvalasztoszlop.className = "col-12 col-sm-6";

const fejvalaszt = document.createElement("select");
fejvalaszt.id = "fejvalaszt";
fejvalaszt.className = "form-select";

const valasztas = document.createElement("option");
valasztas.textContent = "-- Válassz! --";

const bevezetes = document.createElement("option");
bevezetes.textContent = "Bevezetés";
bevezetes.value = "bevezetes";

const tortenete = document.createElement("option");
tortenete.textContent = "Története";
tortenete.value = "tortenete";

const klubrol = document.createElement("option");
klubrol.textContent = "A Klubról";
klubrol.value = "klubrol";

const szovegkontener = document.createElement("div");
szovegkontener.className = "container mt-4";

const szovegsor = document.createElement("div");
szovegsor.className = "row";

const szovegoszlop = document.createElement("div");
szovegoszlop.className = "col-12";

const szovegcim = document.createElement("h4");
szovegcim.id = "szovegcim";

const szoveg = document.createElement("p");
szoveg.id = "szoveg";
szoveg.textContent = "Válassz egyet a fenti opciók közül!";

const kepkontener = document.createElement("div");
kepkontener.className = "container mt-4";

const kepsor = document.createElement("div");
kepsor.className = "row justify-content-center";

const keposzlop = document.createElement("div");
keposzlop.className = "col-12 col-sm-6 text-center";

const kepcim = document.createElement("h4");
kepcim.id = "kepcim";
kepcim.textContent = "Képgaléria";

const kepvalaszt = document.createElement("select");
kepvalaszt.id = "kepvalaszt";
kepvalaszt.className = "form-select mb-3";

const kepmain = document.createElement("option");
kepmain.textContent = "-- Válassz képet! --";
kepmain.value = "";

const kep1 = document.createElement("option");
kep1.textContent = "Spotify Camp Nou";
kep1.value = "campnou";

const kep2 = document.createElement("option");
kep2.textContent = "FC Barcelona Címer";
kep2.value = "cimer";

const kep3 = document.createElement("option");
kep3.textContent = "Csapatkép";
kep3.value = "csapat";

const kep = document.createElement("img");
kep.id = "kep";
kep.className = "img-fluid rounded";
kep.alt = "Válassz egy képet a menüből!";

szovegoszlop.appendChild(szovegcim);
szovegoszlop.appendChild(szoveg);
szovegsor.appendChild(szovegoszlop);
szovegkontener.appendChild(szovegsor);

fejvalaszt.append(valasztas, bevezetes, tortenete, klubrol);
fejvalasztoszlop.appendChild(fejvalaszt);
fejvalasztsor.appendChild(fejvalasztoszlop);
cimkontener.append(cim, alcim, fejvalasztsor);

kepvalaszt.append(kepmain, kep1, kep2, kep3);
keposzlop.append(kepcim, kepvalaszt, kep);
kepsor.appendChild(keposzlop);
kepkontener.appendChild(kepsor);

document.body.appendChild(cimkontener);
document.body.appendChild(szovegkontener);
document.body.appendChild(kepkontener);