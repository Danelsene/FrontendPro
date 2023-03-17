let firstAnswer = +prompt("Скільки буде 2 + 2?");
let sum = 0;

if (firstAnswer === null) {
    sum += 0;
} else if (firstAnswer == "4") {
    sum += 10;
}

let secondAnswer = prompt("Сонце встає на сході?");

if (secondAnswer === null){
    sum += 0;
} else if (secondAnswer.trim().toLowerCase() == "так" || secondAnswer.trim().toLowerCase() == "да") {
    sum += 10;
}

let thirdAnswer = prompt("Скільки буде 5 / 0?");

if (thirdAnswer === null){
    sum += 0;
} else if (thirdAnswer == "0" || thirdAnswer.trim().toLowerCase() == "нуль" || thirdAnswer.trim().toLowerCase() == "ноль") {
    sum += 10;
}

let fourthAnswer = prompt("Якого кольору небо?");

if (fourthAnswer === null){
    sum += 0;
 } else if (fourthAnswer.trim().toLowerCase() == "блакитне" || fourthAnswer.trim().toLowerCase() == "синє" || fourthAnswer.trim().toLowerCase() == "голубе" || fourthAnswer.trim().toLowerCase() == "лазурне"){
    sum += 10;
}

let fifthAnswer = +prompt("Яка правильна відповідь на головне питання життя, всесвіту та т.д?");

if (fifthAnswer === null){
    sum += 0;
 } else if (fifthAnswer == "42") {
    sum += 10;
}

alert(sum);