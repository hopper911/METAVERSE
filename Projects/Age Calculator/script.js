let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById('result');

function calculateAge(){
    let birthDate = new Date(userInput.value);
    let today = new Date();
    let age = new Date(today - birthDate);

    let years = age.getUTCFullYear() - 1970; // Subtract the epoch year
    let months = age.getUTCMonth();
    let days = age.getUTCDate() - 1; // Subtract 1 day since the day of the month starts from 1

    result.innerHTML = `You are ${years} years, ${months} months and ${days} days old`;
}

function getDayInMonth(year,month){
    return (new Date(year, month, 0)).getDate();
}
