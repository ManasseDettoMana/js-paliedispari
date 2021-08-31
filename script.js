
function parolaPalindroma(a){

    let aInv=a.split("").reverse().join("");      // divido la parola in un array di char la inverto e la ricompongo

    if(a == aInv){
        return true
    }
    return false;
}


function sceltaVincitore(giocatore,computer,scelta){
    let risultato;
    if ((giocatore + computer) % 2 == 0){
        risultato=true;                             //se la somma dei due numeri è pari risultato è true
    }
    else{
        risultato=false;                            
    }

    if(risultato != scelta){                        //confronto i risultati e stabilisco il vincitore
        return true;
    }

    return false;
}

let parola = prompt("Inserisci una parola");

if(parolaPalindroma(parola)){
    alert("La parola è palindroma");
}else{
    alert("La parola non è palindroma");
}



let numeroComputer=Math.floor(Math.random() * 5) +1;    //scelta random del numero per il computer

do{
    numeroGiocatore=parseInt(prompt("Scegli un numero da 1 a 5"));
    if(numeroGiocatore < 1 || numeroGiocatore > 5){
        alert("Numero non valido... riprova");
    }
}while(numeroGiocatore < 1 || numeroGiocatore > 5);

let scelta=prompt("Scegli se giocare come pari o dispari");   //variabile che indica se la scelta fatta è pari(true) o dispari(false)

if(scelta.toLowerCase()=="pari"){
    scelta=true;                                    //la scelta pari è true
}else if(scelta.toLowerCase()=="dispari"){
    scelta=false;                                   //la scelta dispari è false
}


let vincitore = sceltaVincitore(numeroGiocatore, numeroComputer, scelta);   //restituisce un booleano

if(vincitore){
    alert("HA VINTO IL COMPUTER");
}else{
    alert("COMPLIMENTI HAI VINTO");
}

console.log("numero giocatore " + numeroGiocatore);
console.log("numero computer " + numeroComputer);
console.log("numeri sommati " + (numeroComputer+numeroGiocatore));

