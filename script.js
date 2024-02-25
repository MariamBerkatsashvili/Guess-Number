//2. გამოიცანი რიცხვი

//შევქმნათ ფუნქცია  guessNumber
function guessNumber (){
    let minNumber;
    let maxNumber;

    do{
        //მომხმარებლის მიერ დიაპაზონის მინიმალური მნიშვნელობის არჩევა რიცხვის გამოსაცნობად  
        minNumber=Number(prompt('Please enter the Minimum Number of the Range'));
        console.log(minNumber);

        //ვალიდაცია: დიაპაზონის მინიმალური მნიშვნელობა უნდა იყოს რიცხვი (ternary)
        (minNumber/1!==minNumber) || minNumber<0 ? alert(`Please enter a valid number`) : '';
        //ვალიდაცია: მინიმალური რიცხვი უნდა იყოს მთელი
        parseInt(minNumber)!==parseFloat(minNumber) ? alert(`Please enter a integer`): '';
    } while ((minNumber / 1 !== minNumber) || minNumber<0 || parseInt(minNumber)!==parseFloat(minNumber));

    do{
        //მომხმარებლის მიერ დიაპაზონის მაქსიმალური მნიშვნელობის არჩევა რიცხვის გამოსაცნობად  
        maxNumber=Number(prompt('Please enter the Maximum Number of the Range'));
        console.log(maxNumber);

        //ვალიდაცია: დიაპაზონის მინიმალური რიცხვი უნდა იყოს ნაკლები მაქსიმალურ რიცხვზე 
        if(minNumber>=maxNumber) { 
            alert('Try again! The min number in the range must be less than the max number. ') };
        //ვალიდაცია: დიაპაზონის მაქსიმალური მნიშვნელოვა უნდა იყოს რიცხვი (ternary)
        !maxNumber  || (maxNumber/1!==maxNumber) || maxNumber<0 ? alert(`Please enter a valid number`) : '';
        //ვალიდაცია:  მაქსიმალური რიცხვი უნდა იყოს მთელი
        parseInt(maxNumber)!==parseFloat(maxNumber) ? alert(`Please enter a integer`): '';
    } while (minNumber >= maxNumber || !maxNumber  || (maxNumber / 1 !== maxNumber) || parseInt(maxNumber)!==parseFloat(maxNumber));
    
    //მასივის შექმნა მომხმარებლის არჩეული დიაპაზონის შესაბამისად 
    const array=[];
    for(let z=minNumber; z<maxNumber; z++){
        array.push(z);
    }

    //შემთხვევითი სამიზნე რიცხვის არჩევა მასივიდან
    const target=Math.round(Math.random() * (array.length-1) + minNumber);
    
    // ცვლადი ქმედებების დათვლისთვის
    let count=0;

    // "do-while"ციკლის გამოყენება, რათა განვსაზღვროთ მომხმარებლის მიერ შესრულებული ქმედების შედეგები
    // სანამ მათი შეყვანილი რიცხვი არასწორია
    let answer;

    do {
        //ციკლმა მოსთხოვოს მომხმარებელს არჩეულ დიაპაზონში რიცხვის შეყვანა
        answer = Number(prompt(`Guess a number from ${minNumber} to ${maxNumber}`));

        //ვალიდაცია შემდეგი შემთხვევებისათვის:
        //თუ მოხმარებლის პასუხი არაა მის მიერ არჩეულ ზღვრებს შორის
        // თუ პასუხი არაა მთელი რიცხვი
        //თუ პასუხი არაა ვალიდური, არაფერი შეიყვანა
        if (isNaN(answer) || answer<minNumber || answer>=maxNumber || parseInt(answer)!==parseFloat(answer)) {
            alert(`Please enter a valid integer number from ${minNumber} to ${maxNumber}`);
            console.error(`Please enter a valid integer number from ${minNumber} to ${maxNumber}`);
        } else if (answer < target) {
            console.log('Your number too low');
            alert('Your number too low');
        } else if (answer > target) {
            console.log('Your number too high');
            alert('Your number too high');
        }
        count++;

        // ციკლმა შეასრულოს ქმედებები, სანამ არ იპოვის რიცხვს 
    } while (answer !== target);
    
    //რიცხვის გამოცნობის შედეგი
    console.log(`Congrats! You guessed ${target}.`);
    console.log(`The number of attempts is ${count}.`);
    alert(`Congrats! You guessed ${target}. The number of attempts is ${count}.`);
    document.write(`Congrats! You guessed ${target}. `);
    document.write(`The number of attempts is ${count}.`);
}
//გამოვიძახოთ ფუნქცია GuessNumber
guessNumber();