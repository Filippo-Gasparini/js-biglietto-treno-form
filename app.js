console.log('bigietto treno')




// Scrivere un programma che chieda all’utente:
//- Il numero di chilometri da percorrere
//- Età del passeggero
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.



// km che vuole percorrere l'utente
const km = document.getElementById('km')
// età dell'utente
const userAge = document.getElementById('eta')


const nome = document.getElementById('nomecognome')


const bottonegenera = document.getElementById('genera')
console.log(bottonegenera)

//vado ad applicare la formula per lo sconto per i minorenni e over 65


//vado a generare il prezzo del biglietto

bottonegenera.addEventListener("click", function (event) {
    event.preventDefault()
    
    const nomeInput = nome.value;
    const kmInput = km.value
    const userAgeInput = userAge.value



    //biglietto scontato per minorenni
    if (userAge < 18) {
        sconto = (km * 20) / 100;

        //biglietto scontato per gli over 65

    } else if (userAge > 65) {
        sconto = (km * 40) / 100;
    }

    console.log(bottonegenera)
})





