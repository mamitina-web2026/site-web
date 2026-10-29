const faly = document.getElementById("test")
function chiffre (a){
    faly .textContent = faly.textContent + a
}
function égale(){
    const repose = eval(faly.textContent)
    faly.textContent = repose
}
function effacer(){
    faly.textContent = faly.textContent . slice(0,-1)
}
function supprimer(){
    faly.textContent=""
}
function cosinus(){
    const n =Number(document.getElementById("test").textContent);
    document.getElementById("test").textContent=
    Math.cos(n*Math.PI/180);

}
function sinus (){
    const n =Number(document.getElementById("test").textContent);
    document.getElementById("test").textContent=
    Math.sin (n*Math.PI /180)
}
function tangente(){
    const n= Number(document.getElementById("test").textContent);
    document.getElementById("test").textContent=
    Math.tan (n*Math.PI/180)
}
function racine(){
    let n= Number(document.getElementById("test").textContent);
    if (n<0){
        document.getElementById("test").textContent=
        erreur;
    }
    else{
        document.getElementById("test").textContent=
        Math.sqrt(n);
    }
}
function ln(){
    const A = parseFloat(document.getElementById("test").textContent );
    
        document.getElementById("test").textContent=
        Math.log(A);
    }
  
function log (){
    const A = parseFloat(document.getElementById("test").textContent);
    
        document.getElementById("test").textContent =
        Math.log10(A);
}
function pourcentage(){
    const A =parseFloat (document.getElementById("test").textContent);
    document.getElementById("test").textContent =
    A/ 100;
}
