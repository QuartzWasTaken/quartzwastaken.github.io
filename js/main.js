window.addEventListener('DOMContentLoaded', () => {

    let projectsUp = false;

    const typedText = document.querySelector('.txt-ecrit');
    const responseLine = document.querySelector('.reponse-console');

    const nameBox = document.querySelector('.gabriel-gourdon');
    const projectGrid = document.createElement('div');
    projectGrid.classList.add('grille-projets');
    const iconsList = document.querySelector('.social-icons');

    let commandesExecutees = [];
    let commandeASelectionner = 0;

    document.body.appendChild(projectGrid);

    function showProjects()
    {
        nameBox.classList.add('top-position');
        projectGrid.classList.add('visible');
        responseLine.textContent = '';
        iconsList.classList.add('hidden');
    }

    function hideProjects()
    {
        nameBox.classList.remove('top-position');
        projectGrid.classList.remove('visible');
        responseLine.textContent = '';
        iconsList.classList.remove('hidden');
    }

    const projects = [
        { title: 'CHIP8', body: 'Un interpréteur de CHIP8 réalisé en C++ avec SDL2<br>Vous pouvez trouver le projet <a href="https://github.com/QuartzWasTaken/CHIP8-Interpreter" target="_blank" style="color:#f80040;text-decoration:underline;">ici</a>'},
        { title: 'Snake avec Pathfinding', body: 'Un jeu de snake autonome capable de trouver le chemin le plus court en évitant les pavés, réalisé en C dans le cadre d\'un projet à l\'IUT<br>Vous pouvez trouver le projet <a href="https://github.com/QuartzWasTaken/SnakeIBC" target="_blank" style="color:#f80040;text-decoration:underline;">ici</a>' },
        { title: 'LCCore', body: 'Un plugin sécurisé et multifonctions pour un serveur Minecraft, réalisé en Java <br>Vous pouvez trouver le projet <a href="https://github.com/Leg0shii/LCCore/tree/prod" target="_blank" style="color:#f80040;text-decoration:underline;">ici</a>' },
        { title: 'Sit 3', body: 'test desc 4' },
        { title: 'Amet 3', body: 'test desc 5' },
        { title: 'Consectetur 4', body: 'test desc 6' }
    ];

    const helpStringArray = [
        "<strong>projects - Afficher mes projets</strong>",
        "back     - revenir en arrière depuis la liste des projets",
        "linkedin - Afficher un lien vers ma page LinkedIn",
        "github   - Afficher un lien vers mon profil GitHub",
        "help     - afficher cette liste"
      ];

    const helpString = helpStringArray.join('\n');

    projects.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'projet';
        card.innerHTML = `
            <div class="project-header">${proj.title}</div>
            <div class="project-body">${proj.body}</div>
        `;
        projectGrid.appendChild(card);
    });

    document.addEventListener('keydown', (e) => {
        if(e.key.length === 1)
        {
            typedText.textContent += e.key;
        }
        else if(e.key === 'Backspace')
        {
            typedText.textContent = typedText.textContent.slice(0, -1);
        }
        else if(e.key === 'Enter')
        {
            const command = typedText.textContent.trim();
            if(projectsUp)
            {
                hideProjects();
            }
            if(command === 'help')
            {
                responseLine.innerHTML = helpString;
            }
            else if(command === 'projects' || command === 'projets')
            {
                showProjects();
                projectsUp = true;
            }
            else if(command === 'back')
            {
                hideProjects();

            }
            else if(command === 'linkedin' || command === 'Linkedin' || command === 'LinkedIn')
            {
                responseLine.innerHTML = 'Voici mon LinkedIn : <a href="https://fr.linkedin.com/in/gabriel-gourdon-974a70355" target="_blank" style="color:#f80040;text-decoration:underline;">cliquer ici</a>';
            }
            else if(command === 'github' || command === 'Github' || command === 'GitHub')
            {
                responseLine.innerHTML = 'Voici mon GitHub : <a href="https://github.com/QuartzWasTaken" target="_blank" style="color:#f80040;text-decoration:underline;">cliquer ici</a>';
            }
            else if(command === 'todo')
            {
                responseLine.innerHTML = 'Il faut :<br>Ajouter un "à propos"<br>ajouter une présentation de chaque projet<br>(optionel) pouvoir cliquer sur les titres des projets';
            }
            else
            {
                responseLine.innerHTML = `Commande '${command}' non reconnue - taper "help" pour afficher la liste des commandes`;
            }
            if(typedText.textContent != '')
            {
                commandesExecutees.push(typedText.textContent);
            }
            typedText.textContent = '';
        }
    });
});