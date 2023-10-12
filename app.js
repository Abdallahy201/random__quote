    let quoteP = document.getElementById("quote");
    let author = document.getElementById("author");
    let button = document.getElementById("btn");

    let url = "https://api.quotable.io/random";
    let req = new XMLHttpRequest();

    req.open("GET", url);
    req.send();

    req.onreadystatechange = function() {
    if (this.status === 200 && this.readyState === 4) {
        let jsData = JSON.parse(this.response);
        console.log(jsData);
        changeQuote(jsData);
    }
    };

    function changeQuote(data) {
    quoteP.textContent = data.content;
    author.textContent = data.author;
    }

    button.addEventListener("click", function() {
    req.open("GET", url);
    req.send();
    });