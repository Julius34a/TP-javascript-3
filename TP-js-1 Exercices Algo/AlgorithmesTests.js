

//concatenation//
  var A = "1";
  var B = "3";
  alert(A+B);

// 1.1 //

 var A = 1;
 var B = 3;
 alert(A+B);

 // 1.2 //

var A = 5;
var B = 3;
var C = (parseInt(A)+parseInt(B));
var A = 2;
var C = (parseInt(B)-parseInt(A));
alert (A+" "+B+" "+C);

// 1.3 //

var A = 5;
var B = (parseInt(A)+4);
var A = (parseInt(A)+1);
var B = (parseInt(A)-4);
alert (A+" "+B);

// 1.4 //

var A = 3;
var B = 10;
var C = (parseInt(A)+parseInt(B));
var B = (parseInt(A)+parseInt(B));
var A = C;
alert (A+" "+B+" "+C);

// 1.5 //

var A = 5;
var B = 2;
var A = B;
var B = A;
alert (A+" "+B);

// 1.6 //

var C = "A";
var A = "B";
var B = "C";
alert (A+" "+B);

// 1.7 //

var D = "A";
var A = "C";
var C = "B";
var B = "D";
alert (A+" "+B+" "+C)

// 1.8 //

var A = '423';
var B = '12';
alert (parseInt(A)+parseInt(B));

// 1.9 //

var A = '423';
var B = '12';
var C = (A+B);
alert (A+B);

// 2.1 //

var val = 231;
var double = val**2;
alert (val);
alert (double);

// 2.2 //

nombre = prompt("écrivez un nombre svp"); // ouvre une fenêtre de saisie sans texte //
var carré = nombre**2;
commentaire = prompt("cliquez pour afficher le carré de ce nombre")
alert (carré);

// 2.3 //

var prixHT = prompt("écrivez le prix HT");
var nombre_articles = prompt("écrivez un nombre d'articles");
var TVA = prompt("écrivez le taux de TVA");
var prixTTC = ((prixHT*nombre_articles)*TVA)/100;
alert (prixTTC);

// 3.1 //

var nombre = prompt("écrivez un nombre");
	if(nombre >= 0)
	{
		alert("Le nombre est positif.");
	}
	else
		alert("le nombre est negatif");

// 3.2 //

var nombre1 = parseInt(prompt("écrivez un premier nombre"));
var nombre2 = parseInt(prompt("écrivez un deuxième nombre"));
	if((nombre1 > 0 && nombre2 > 0) || (nombre1 < 0 && nombre2 < 0)) {
		alert("le produit est positif");
	} else {
		alert("le produit est négatif");
	}
	

// 3.3 //

var nom1 = prompt("écrivez un nom");
var nom2 = prompt("écrivez un nom");
var nom3 = prompt("écrivez un nom");
	if(nom1<nom2 && nom2<nom3){
		alert("ordre alpha");
	} else {
		alert("non alpha");
	}


// 3.4 //

var nombre1 = parseInt(prompt("écrivez un premier nombre"));
var nombre2 = parseInt(prompt("écrivez un deuxième nombre"));
	if((nombre1 > 0 && nombre2 > 0) || (nombre1 < 0 && nombre2 < 0)) {
		alert("le produit est positif");
	}	
	else if((nombre1 < 0 && nombre2 > 0) || (nombre1 > 0 && nombre2 < 0)) {
		alert("le produit est négatif");
		} else {
			alert("le produit est nul");
	}

// 3.5 //

var age = prompt("écrivez un âge");
	if(age>12) {
		alert("Cadet");
	}
	else if(age>9) {
		alert("Minime");
	}
	else if(age>7) {
		alert("Pupille");
	}
	else if(age>5) {
		alert("Poussin");
	}
	else {
		alert("Invalid");
	} 


// 4.2 //

var heure = parseInt (prompt("écrire heures"));
var minute = parseInt (prompt("écrire minutes"));

	minute = minute+1;

	if(minute == 60){
		minute = 0;
		heure = heure+1;

		if(heure == 24){
			heure = 0;
		}
	}

	alert("Dans une minute, il sera " +heure+ " heures " +minute+ " minutes ");

// 4.3 //

var heure = parseInt (prompt("écrire heures"));
var minute = parseInt (prompt("écrire minutes"));
var seconde = parseInt(prompt("écrire secondes"));
	seconde = seconde+1;

	if(seconde == 60){
		seconde = 0;
		minute = minute+1;
		
		if(minute == 60){
		minute = 0;
		heure = heure+1;
		
			if(heure == 24){
			heure = 0;
			}
		}
	}

	alert("Dans une minute, il sera " +heure+ " heures " +minute+ " minutes " +seconde+ "secondes");

// 4.4 //

var nbcopie = parseInt(prompt("écrire nombre de photocopies"));

	if(nbcopie>30){
		tarif = (0.1*10)+(0.9*20)+(0.08*(nbcopie-30));
	}
	else if(nbcopie>10){
		tarif = (0.1*10)+(0.09*(nbcopie-10));
	}
	else {
		tarif = 0.1*nbcopie;
	}
	
alert("Montant de la facture est de " +tarif+ " euros ");


// 4.5 //

var age = parseInt (prompt("écrire un âge"));
var sexe = prompt("écrire le sexe");

	if(age>20 && sexe == "homme"){
		alert("imposable");
	}
	else if(age>18 && age<35 && sexe == "femme"){
		alert("imposable");
	}
	else {
		alert("non imposable");
	}


// 4.6 //

var score1 = parseInt(prompt("écrire score candidat1"));
var score2 = parseInt(prompt("écrire score candidat2"));
var score3 = parseInt(prompt("écrire score candidat3"));
var score4 = parseInt(prompt("écrire score candidat4"));
var total = score1+score2+score3+score4;

	if(score1>(score2 + score3 + score4)/2){
		alert("candidat1 élu au premier tour");
	}

	if((score1>total/8) && (score1<total/2) && (score1>score2) && (score1>score3) && (score1>score4)){
		alert("candidat1 passe au deuxième tour en ballotage favorable");
	}

	else if ((score1>total/8) && (score1<total/2)){
		alert("candidat1 passe au deuxième tour en ballotage défavorable");
	}

	if (score1<(total/8)) 
		alert("candidat non élu");
	
// 5.1 //

var nombre = prompt("écrire un nombre compris entre 1 et 3");

while(nombre<1 || nombre>3){
	nombre = prompt("ré-essayez d'écrire un nombre compris entre 1 et 3");
}
alert("le nombre convient");

// 5.2 //

var nombre = prompt("écrire un nombre compris entre 10 et 20");

while(nombre<10 || nombre>20){
	nombre = prompt("ré-écrire un nombre compris entre 10 et 20");
		if(nombre>20){
			alert("plus petit");
		}
		else if(nombre<10){
			alert("plus grand");
		}
}
alert("trouvé");

// 5.3 //

var nombre = parseInt (prompt("écrire un nombre"));

	for (i=0; i<10; i++){
		nombre = nombre+1;
		alert(nombre);
	}	

// 5.5 //

var nombre = parseInt(prompt("écrire un nombre entre 1 et 10"));
var produit = 0;
var resultat = nombre*produit;

	for(i=0; i<10; i++){
		produit = produit +1;
		resultat = nombre*produit;
		alert(nombre+ " x " +produit+ " = " +resultat);
	}


// 5.6 //

var nombre = parseInt(prompt("écrire un nombre de départ"));
var somme = 0;

	for(i=0; i<=nombre; i++){
		somme = i + somme;
	}

alert(somme)

// 6.1 //

var tableau = [];

for (i = 0; i < 7;) {
    tableau [i] = 0;
    i++;
}

alert(tableau);

// 6.2 //

var tableau = ["a","e","i","o","u","y"];

alert(tableau);

// 6.3 //

var tableau = [];

for (i = 0; i < 9;){
	tableau [i] = parseInt(prompt("écrire une note"));
	i++;
}

alert(tableau);

// 6.4 //

var tab = [];
var nbvaleur = parseInt(prompt("entrez le nombre de valeurs à saisir"));
var positif = 0;
var negatif = 0;

for (i = 0; i < nbvaleur; i++){
	var valeur = parseInt(prompt("entrez une valeur"));
	tab [i] = valeur;

		if(valeur>0){
			positif = positif + 1;
		}

		else {
			negatif = negatif + 1;
		}
}

alert(+positif+ " sont positifs " +negatif+ " sont negatifs ");

