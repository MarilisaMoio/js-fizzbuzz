//milestone 1: basic FizzBuzz; milestone 2: aggiungere gli elementi nel DOM; milestone 3: aggiungere stile.

//scrivere un ciclo for che fornisca un numero da 1 a 100
    for (let i = 1; i <= 100; i++){

        //recupera il container dall'html
        const container = document.querySelector(".container");

        //condizioni per fizz, buzz e fizzbuzz
        let print = i;

        if (i % 3 === 0 && i % 5 === 0){
            print = "FizzBuzz";
        } else if (i % 3 === 0 ) {
            print = "Fizz";
        } else if (i % 5 === 0 ) {
            print = "Buzz";
        }

        //prepara il div
        let divContent = `<div>${print}</div>`;

        container.innerHTML += divContent;
    }

    