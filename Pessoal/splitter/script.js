var tipSelected;

function onTipSelected(elementId, tip) {
    
    var tips = document.getElementsByClassName("tip-selected");

    if (tips.length > 0) {
        for (var tipIndex in tips) {
            if (tips[tipIndex].classList != null) {
                tips[tipIndex].classList.remove("tip-selected");
            }
        }
    }

    tipSelected = tip;

    document.getElementById(elementId).classList.add('tip-selected');    
}

function onCalculate() {
    var amounttip = document.getElementById("valortip")
    var totalpersonal = document.getElementById("valortotal")
    var bill = Number(document.getElementById("inputbill").value)
    var numberpeople = Number(document.getElementById("inputpessoa").value)
    var resultip= bill/100*tipSelected
    amounttip.innerHTML=`$${resultip}`
    var resultotal = (resultip + bill)/numberpeople
    totalpersonal.innerHTML= `$${resultotal}`
}