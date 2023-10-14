function elementFromHtml(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

const card = `
    <div id="project{id}" class="card col-lg-3 col-xl-2 mx-4 my-2" style="width: 20rem;">
        <img src="{imageSource}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title fw-bold">{cardTitle}</h5>
            <p class="card-text">{cardText}</p>
            <a href="{githubLink}" target="_blank" class="btn btn-primary">See more <i class="fa fa-github" aria-hidden="true"></i></a>
            <a href="{liveDemoLink}" target="_blank" class="btn btn-primary live-demo {display}">Live demo <i class="fa fa-play"></i></a>
        </div>
    </div>
`;

let projects = [
    {
        "imageSource" : "img/test.png",
        "cardTitle" : "My Portfolio Page",
        "cardText" : "My personal website with info about me, my projects and my career.",
        "githubLink" : "https://github.com/RaulBelmonteSouza/My-Portfolio-Page",
        "liveDemo" : false,
        "liveDemoLink" : "",
    },
    
    {
        "imageSource" : "img/rest-api.png",
        "cardTitle" : "Vehicle Control Application",
        "cardText" : "Vehicle Control Application created to solve a code challenge from Zup Company",
        "githubLink" : "https://github.com/RaulBelmonteSouza/RaulBelmonteSouza-vehicle-control-application",
        "liveDemo" : false,
        "liveDemoLink" : "",
    },
    
    {
        "imageSource" : "img/inpactus-website.png",
        "cardTitle" : " Inpactus Website",
        "cardText" : "In my birth I founded a small Software House called Inpactus to do some jobs building websites for small companies.",
        "githubLink" : "https://github.com/RaulBelmonteSouza/inpactus",
        "liveDemo" : true,
        "liveDemoLink" : "http://inpactus.raulbsouza.com/",
    },
    
    {
        "imageSource" : "img/rest-api.png",
        "cardTitle" : "Authentication Server",
        "cardText" : "Authentication server using Spring, JWT, and OAuth Refresh Token, Client Credentials and Authorization Code. ",
        "githubLink" : "https://github.com/RaulBelmonteSouza/authenticationServer",
        "liveDemo" : false,
        "liveDemoLink" : "",
    },
    
    {
        "imageSource" : "img/java-logo.png",
        "cardTitle" : "HackerRank Solutions",
        "cardText" : "HackerRank Solutions code challenges solutions in Java with chalenge description.",
        "githubLink" : "https://github.com/RaulBelmonteSouza/HackerRank-Exercices",
        "liveDemo" : false,
        "liveDemoLink" : "",
    },
    
    {
        "imageSource" : "img/aesaoborja.png",
        "cardTitle" : "Sports Association São Borja",
        "cardText" : "The institutional site to the soccer area of the Sports Association São Borja.",
        "githubLink" : "https://github.com/RaulBelmonteSouza/AESaoBorja/",
        "liveDemo" : true,
        "liveDemoLink" : "http://aesaoborja.raulbsouza.com/view/index.php",
    },
    
    {
        "imageSource" : "img/rest-api.png",
        "cardTitle" : "RESTful API Master Class",
        "cardText" : "A project for a masterclass about RESTful APIs that I teached at College.",
        "githubLink" : "https://github.com/RaulBelmonteSouza/RESTful-API-Master-Class",
        "liveDemo" : false,
        "liveDemoLink" : "",
    },
    
    {
        "imageSource" : "img/android.png",
        "cardTitle" : "Android Calculator",
        "cardText" : "A simple calculator using android with Kotlin.",
        "githubLink" : "https://github.com/RaulBelmonteSouza/android-calculator",
        "liveDemo" : false,
        "liveDemoLink" : "",
    },
    
    {
        "imageSource" : "img/java-logo.png",
        "cardTitle" : "Photo Separator",
        "cardText" : "A small piece of code to separate the photos that are in my phone backups.",
        "githubLink" : "https://github.com/RaulBelmonteSouza/photoseparator",
        "liveDemo" : false,
        "liveDemoLink" : "",
    },
];

const cardsElement = document.getElementById("cards");

for(let i = 0; i < projects.length; i++) {
    let newCard = card.replace("{imageSource}", projects[i].imageSource)
    .replace("{cardTitle}", projects[i].cardTitle)
    .replace("{cardText}", projects[i].cardText)
    .replace("{githubLink}", projects[i].githubLink)
    .replace("{display}", projects[i].liveDemo == false ? "d-none" : "")
    .replace("{liveDemoLink}", projects[i].liveDemoLink)
    .replace("{id}", i + 1);

    newCard = elementFromHtml(newCard);
    cardsElement.appendChild(newCard);
}