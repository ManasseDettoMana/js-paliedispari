// divido la parola in un array di char la inverto e la ricompongo
function invertiParola(a){
    a=a.split("").reverse().join("");
    return a;
}

function parolaPalindroma(a,aInv){
    if(a == aInv){
        alert(a + " è una parola palindroma");
    }else{
        alert(a + " non è una parola palindroma");
    }
}

function sceltaNumeroComputer(n,scelta){
    let numeroComputer;
    if(n % 2 == 0){                                               //se l'utente ha scelto un numero paro, crea un numero random finchè è dispari
        do{
            numeroComputer=Math.floor(Math.random() * 5) +1; 
        }while(numeroComputer % 2 ==0);
        scelta=true;                                             
    }else{                                                        //altrimenti fai la stessa cosa ma finchè il numero non é pari.
        do{
            numeroComputer=Math.floor(Math.random() * 5) +1; 
        }while(numeroComputer % 2 != 0);
        scelta=false;
    }

    return numeroComputer;
}

function sceltaVincitore(giocatore,computer,scelta){
    let risultato;
    if ((giocatore + computer) % 2 == 0){
        risultato=true;
    }
    else{
        risultato=false;
    }

    if(risultato == scelta){ //confronto i risultati e stabilisco il vincitore
        return true;
    }

    return false;
}

let parola = prompt("Inserisci una parola");

parolaInvertita=invertiParola(parola);
// console.log(parolaPalindroma(parola, parolaInvertita));


let numeroGiocatore;
let scelta;//variabile che indica se la scelta fatta è pari(true) o dispari(false)

do{
    numeroGiocatore=parseInt(prompt("Scegli un numero da 1 a 5"));
    if(numeroGiocatore < 1 || numeroGiocatore > 5){
        alert("Numero non valido... riprova");
    }
}while(numeroGiocatore < 1 || numeroGiocatore > 5);


let numeroComputer = sceltaNumeroComputer(numeroGiocatore, scelta);
// console.log(scelta);

let vincitore = sceltaVincitore(numeroGiocatore, numeroComputer, scelta);

if(vincitore){
    alert("HA VINTO IL COMPUTER");
}else{
    alert("COMPLIMENTI HAI VINTO");
}

console.log("numero giocatore " + numeroGiocatore);
console.log("numero computer " + numeroComputer);
// console.log("numeri sommati " + numeroComputer+numeroGiocatore);
