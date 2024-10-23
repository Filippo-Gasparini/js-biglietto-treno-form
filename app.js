console.log('bigietto treno')




// Scrivere un programma che chieda all’utente:
//- Il numero di chilometri da percorrere
//- Età del passeggero
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.



// km che vuole percorrere l'utente
const km = document.getElementById('Inserisci i km')
// età dell'utente
const userAge = document.getElementById('Inserisci la tua età')



//vado ad applicare la formula per lo sconto per i minorenni e over 65


//biglietto scontato per minorenni

const genera = ''
if (userAge < 18) {
    sconto = (km * 20) / 100;

//biglietto scontato per gli over 65

} else if (userAge > 65) {
    sconto = (km * 40) / 100;
}

//vado a generare il prezzo del biglietto

genera.addEventListener ("click",function(){
    console.log()
})





