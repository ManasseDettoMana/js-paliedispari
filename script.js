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

let parola = prompt("Inserisci una parola");
parolaInvertita=invertiParola(parola);
console.log(parolaPalindroma(parola, parolaInvertita));

