

var questionNumber = 1;

function toevoegen() {
    aantal++;
    var vragencontainer = document.getElementById("vragencontainer");

    var vraagdiv = document.createElement("div");
    vraagdiv.innerHTML = `
    <input class="vraag" placeholder="zet je vraag hier in"  id="vraag${questionNumber}">
    <div>
      <input placeholder="zet je antwoord hier in" id="antwoord1_${questionNumber}">
      <input class="check" type="checkbox" id="checkbox1_${questionNumber}">
    </div>
    <div>
    <input placeholder="zet je antwoord hier in" id="antwoord2_${questionNumber}">
    <input class="check" type="checkbox" id="checkbox2_${questionNumber}">
    </div>
    <div>
    <input placeholder="zet je antwoord hier in" id="antwoord3_${questionNumber}">
    <input class="check" type="checkbox" id="checkbox3_${questionNumber}">
    </div>
    <div class="last">
    <input placeholder="zet je antwoord hier in" id="antwoord4_${questionNumber}">
    <input class="check" type="checkbox" id="checkbox4_${questionNumber}">
    </div>
  `;

    vragencontainer.appendChild(vraagdiv);
    questionNumber++;
}









var aantal = 1;

function createAndDownloadFileAnswers() {
    var text = "";
    for (var i = 0; i < aantal; i++) {
        text += getText(i, true);
    }
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mytextfile.txt";
    a.click();
    URL.revokeObjectURL(url);
}

function createAndDownloadFileQuestions() {

    var text = "";
    for (var i = 0; i < aantal; i++) {
        text += getText(i, false);
    }
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mytextfile.txt";
    a.click();
    URL.revokeObjectURL(url);
}


function getText(hoeveelheid, metAntwoord) {
    var vraag = document.getElementById("vraag" + hoeveelheid).value;
    vraag = vraag + "\n\n";
    var antwoord1 = document.getElementById("antwoord" + "1_" + hoeveelheid).value;
    var antwoord2 = document.getElementById("antwoord" + "2_" + hoeveelheid).value;
    var antwoord3 = document.getElementById("antwoord" + "3_" + hoeveelheid).value;
    var antwoord4 = document.getElementById("antwoord" + "4_" + hoeveelheid).value;
    var checkbox1 = document.getElementById("checkbox" + "1_" + hoeveelheid).checked;
    var checkbox2 = document.getElementById("checkbox" + "2_" + hoeveelheid).checked;
    var checkbox3 = document.getElementById("checkbox" + "3_" + hoeveelheid).checked;
    var checkbox4 = document.getElementById("checkbox" + "4_" + hoeveelheid).checked;
    var antwoord = "";
    if (metAntwoord) {
        if (checkbox1) {
            antwoord1 = "✅" + antwoord1;
        }
        else {
            antwoord1 = "❌" + antwoord1;
        }
        if (checkbox2) {
            antwoord2 = "✅" + antwoord2;
        }
        else {
            antwoord2 = "❌" + antwoord2;
        }
        if (checkbox3) {
            antwoord3 = "✅" + antwoord3;
        }
        else {
            antwoord3 = "❌" + antwoord3;
        }
        if (checkbox4) {
            antwoord4 = "✅" + antwoord4;
        }
        else {
            antwoord4 = "❌" + antwoord4;
        }
    }
    antwoord = antwoord + "\n";
    antwoord = antwoord + antwoord1 + "\n";
    antwoord = antwoord + antwoord2 + "\n";
    antwoord = antwoord + antwoord3 + "\n";
    antwoord = antwoord + antwoord4 + "\n";
    antwoord = antwoord + "\n";
    return vraag + antwoord;

}