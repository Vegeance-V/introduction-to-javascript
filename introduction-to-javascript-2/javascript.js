const embedString = " And I'm not from the same string :D";
const string = `The revolution will not be televised.${embedString}`;

// If you put the const "embedString" after "string", it will display an error, because the line containing the content of the "embedString" was bellow it and thefore was not read by the system.

console.log(string);

/*const badString = string;
console.log(badString);*/

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`;
console.log(output);

const output2 = `I like the song.
I gave it a score of 90%.`;
console.log(output2);

const output3 = "I like the song.\nI gave it a score of 90%.";
console.log(output3);

//Other question
let divButton = document.getElementById('p');
const btn = document.createElement('button');
btn.innerText = 'Question';
divButton.appendChild(btn);


function test()
{
    const answer = prompt("2 + 2 = ?")
    let resultCheck = false;
    let result;

    if (answer == 4)
    {
        resultCheck = true;
    }

    if (resultCheck == true)
    {
        result = "correct";
    }

    else
    {
        result = "incorrect";
    }

    alert(`Your answer was ${answer}, and it's ${result}! GO BACK TO SCHOOL!!! >:(` )
}

btn.addEventListener("click", test);