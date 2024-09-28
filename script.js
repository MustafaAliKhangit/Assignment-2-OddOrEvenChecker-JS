function checkNumber() {

    let userInput = prompt("Koi number daalien:");
    let number = parseInt(userInput); 


    if (isNaN(number)) {
        alert("Wrong input! Kindly ek number daalien.");
        return;
    }

  
    let message = (number % 2 === 0) ? 
        "Yeh number " + number + " even hai." : 
        "Yeh number " + number + " odd hai.";
    
    alert(message);

    number++;

   
    alert("Process karne ke baad number hai: " + number + ".");
}


checkNumber();
