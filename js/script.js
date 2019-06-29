var eventType = prompt("What type of event are you attending?");
var tempFahr = prompt("What is the Temperature?");
var eventTypeClothingSuggestion;
var tempFahrClothingSuggestion;

if (eventType === 'casual') {
    eventTypeClothingSuggestion = 'something comfy'
} else if (eventType === 'semi-formal') {
    eventTypeClothingSuggestion = 'a polo'
} else if (eventType === 'formal') {
    eventTypeClothingSuggestion = 'a suit'
}


if (tempFahr < 54) {
    tempFahrClothingSuggestion = 'a coat'
} else if (tempFahr <=70 && tempFahr >=54) {
    tempFahrClothingSuggestion = 'a jacket'
} else if (tempFahr > 70) {
    tempFahrClothingSuggestion = 'no jacket'
}

var result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear ${eventTypeClothingSuggestion} and ${tempFahrClothingSuggestion}.`

console.log(result)


