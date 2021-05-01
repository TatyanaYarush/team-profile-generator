const generateCards = (teamData) => {
  const manager = teamData.manager.map(function (answers) {
    return `
    <div class="col col-4">
    <div class="card mx-auto border-success mb-3" style="max-width: 18rem;">
    
        <div class="card-header text-center bg-success text-white ">
       
            <h2>${answers.name}</h2>
            <h3><i class="fas fa-mug-hot"></i>Manager</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${answers.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${answers.email} "target="_blank">${answers.email}</a></li>
            <li class="list-group-item">Office Number: <a href="tel:${answers.officeNumber}" >${answers.officeNumber}</a></li>
        </ul>
    </div>
</div>
`;
  });
  

  const engineer = teamData.engineer.map(function (answers) {
    return `
    <div class="col col-4">
    <div class="card mx-auto border-success mb-3" style="max-width: 18rem;">
   
        <div class="card-header text-center bg-success text-white">
            <h2>${answers.name}</h2>
            <h3><i class="fas fa-glasses"></i> Engineer</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${answers.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${answers.email} "target="_blank">${answers.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${answers.github}"target="_blank">${answers.github}"></a></li>
        </ul>
    </div>
</div>
`;
  });

  const intern = teamData.intern.map(function (answers) {
    return `
    <div class="col col-4">
    <div class="card mx-auto border-success mb-3" style="max-width: 18rem;">
   
        <div class="card-header text-center bg-success text-white">
            <h2>${answers.name}</h2>
            <h3><i class="fas fa-user-graduate"></i>Intern</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${answers.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${answers.email} "target="_blank">${answers.email}</a></li>
            <li class="list-group-item">School: ${answers.school}</li>
        </ul>
    </div>
</div>
`;
  });
  return [manager, engineer, intern];
};

module.exports = (templateData) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
     
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
      
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    
        <title>Team Profile Generator</title>
        <style>
            body {
                margin-bottom: 5em;
            }
    
            .card {
                margin-bottom: 5em;
                
            } 


        </style> 
    
    </head>
    
    <body>
        <div class="jumbotron col-12 text-center bg-success my-5 py-5 display-4 text-white">
            <h1>My Team</h1>
        </div>
        <div class="container" >
            <div class="row">
            ${generateCards(templateData)}
            </div>
        </div>
    
    </body>
    
    </html>
    `;
};
