const generateHTML = (team => {
console.log(team);

const html = [];

// Using bootstrap to build individual divs
const managerCard = manager => {
    console.log(manager);
    let managerCard = `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${manager.name}<br/>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
        `;
    html.push(managerCard)
}

const engineerCard = manager => {
    console.log(manager);
    let engineerCard = `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${engineer.name}<br/>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
    </div>
        `;
    html.push(engineerCard)
}

const internCard = manager => {
    console.log(manager);
    let internCard = `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${intern.name}<br/>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
        <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
        `;
    html.push(internCard)
}

//Loop through the given rolls to generate cards
for (let i= 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
        managerCard(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
        engineerCard(team[i]);
    }
    if (team[i].getRole() === "Intern") {
        internCard(team[i]);
    }
}

//join the html cards
return html.join('');

})

//export for page build
module.exports = tema => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="./style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        
    </head>
    <body>
        <header>
            <h1>The Team</h1>
        </header>

        <main> ${generateHTML(team)} </main>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </body>
    </html>
    `;


}