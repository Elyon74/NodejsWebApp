// JavaScript source code
// <BR> saut de ligne
// Fonction afffichant la date du jour
function datee() {
	var date = new Date();
	var tab_mois = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
	var hours = date.getHours();
	var min = date.getMinutes();
	var year = date.getFullYear();
	var day = date.getDate();
	var month = date.getMonth();
	var txtAccueil = hours < 19 ? "Bonjour ," : "Bonsoir ,";
	console.log("dt.getDate()=" + day)
	console.log("dt.getMonth()=" + month);
	console.log("dt.getFullYear()=" + year);
	console.log("dt.getHours()=" + hours);
	console.log("dt.getMinutes()=" + min);
	document.write(txtAccueil);
	var date2 = "<BR>Nous sommes le " + day + " " + tab_mois[date.getMonth()] + " " + year + " " + "il est : " + hours + "h" + min;
	return date2;
}
// Execution de la fonction
var date1 = datee();
document.write(date1);