//milestone 1: basic FizzBuzz; milestone 2: aggiungere gli elementi nel DOM; milestone 3: aggiungere stile.

//scrivere un ciclo for che fornisca un numero da 1 a 100
    for (let i = 1; i <= 15; i++){

        let print = i;

        //condizioni per fizz, buzz e fizzbuzz
        if (i % 3 === 0 && i % 5 === 0){
            print = "FizzBuzz";
        } else if (i % 3 === 0 ) {
            print = "Fizz";
        } else if (i % 5 === 0 ) {
            print = "Buzz";
        }

        console.log(print)
    }