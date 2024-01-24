

const queryString =  window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const redir = urlParams.get("r");

const answer = "123456789"

if (queryString == "?r=FREDDY_FAZBER_six") {window.location = "log-in84762"}

function goto() {
    var secretCode = document.getElementById("pwd").value;
    if(secretCode == answer) {
        window.location = "log-in84762";
    } else {
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D";
    }
    
}

setInterval(goto, 30000);


