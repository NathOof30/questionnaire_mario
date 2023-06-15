function showValue(newValue){
	document.getElementById("range").innerHTML= newValue;
}


function Recup_champs(id){
            for (var i = 1;i <= 4; i++){
            if ("Check" + i === id && document.getElementById("Check" + i).checked === true){
          	        document.getElementById("Check" + i).checked = true;
        } else { document.getElementById("Check" + i).checked = false; }
    }  
}

function Recap(){
    var quest1 = document.querySelector("input[name=rp1]:checked").value;
    var quest2 = document.querySelector("input[name=rp2]:checked").value;
    var quest3 = document.querySelector("input[name=rp3]:checked").value;

    var score=0;
    resultq1="FAUX";
    resultq2="FAUX";
    resultq3="FAUX";
    if (quest1 == 'reponse2') {score+=1, resultq1="VRAI";}
    if (quest2 == 'reponse3') {score+=1, resultq2="VRAI";}
    if (quest3 == 'reponse1') {score+=1, resultq3="VRAI";}

    mess= " ";
    if (score == 0) {mess="\nT'es trop nul franchement tu aurais pu avoir au moins 1 point !!!";}
    if (score == 1) {mess="\nBon c'est pas ouf mais tu n'as pas 0 point donc euh...";}
    if (score == 2) {mess="\nDommage, c'était presque parfait !";}
    if (score == 3) {mess="\nWeeesh, Point faible ? Trop fort.";}

    q1="\nQuestion 1 : " + resultq1
    q2="\nQuestion 2 : " + resultq2
    q3="\nQuestion 3 : " + resultq3
    messfinal= mess+ "\nTon score est de : " + score + q1 + q2 + q3;

    alert(messfinal)
}


function Recup_champs(id){
    		for (var i = 1;i <= 4; i++){
        	if ("Check" + i === id && document.getElementById("Check" + i).checked === true){
          		document.getElementById("Check" + i).checked = true;
        } else { document.getElementById("Check" + i).checked = false; }
    }  
}