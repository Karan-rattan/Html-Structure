
//to get alert message
function showAlert(){
    alert("Welcome to my Website click Close to proceed");
}
//to show current date and time 
function displayDate(){
    document.getElementById('cdate').innerHTML = Date();
}
//to get greeting message according to time 
function getGreeting() {
    const currentHour = new Date().getHours();
    let greetingMessage;

    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = "Good Morning viewers";
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = "Good Afternoon viewers";
    } else {
        greetingMessage = "Good Evening viewers";
    }
    document.getElementById("greeting").innerHTML = greetingMessage;
}
window.onload = getGreeting;

