//milestone 1: basic FizzBuzz; milestone 2: aggiungere gli elementi nel DOM; milestone 3: aggiungere stile.

//scrivere un ciclo for che fornisca un numero da 1 a 100
    for (let i = 1; i <= 100; i++){

        //recupera il container dall'html
        const container = document.querySelector(".container");

        //condizioni per fizz, buzz e fizzbuzz
        let print = i;

        const newDiv = document.createElement("div");

        console.log(newDiv)

        if (i % 3 === 0 && i % 5 === 0){
            print = "FizzBuzz";
            newDiv.classList.add("orange");
        } else if (i % 3 === 0 ) {
            print = '<img src="img/fizz.webp" alt="fizz">'
        } else if (i % 5 === 0 ) {
            print = '<img src="img/buzz.webp" alt="buzz">'
        }

        //prepara il div
        newDiv.innerHTML = print;

        container.append(newDiv);
    }

    