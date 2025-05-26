window.addEventListener('DOMContentLoaded', () => {

    let projectsUp = false;
    let aboutUp = false;

    const typedText = document.querySelector('.txt-ecrit');
    const responseLine = document.querySelector('.reponse-console');

    const nameBox = document.querySelector('.gabriel-gourdon');
    const projectGrid = document.createElement('div');
    projectGrid.classList.add('grille-projets');
    const iconsList = document.querySelector('.social-icons');

    const fenetreAbout = document.querySelector('.fenetre-about');
    const grilleProjets = document.querySelector('.grille-projets');

    let commandesExecutees = [];
    let commandeASelectionner = -1;

    document.body.appendChild(projectGrid);

    function monterNom()
    {
        nameBox.classList.add('top-position');
        iconsList.classList.add('hidden');
    }

    function descendreNom()
    {
        nameBox.classList.remove('top-position');
        iconsList.classList.remove('hidden');
    }

    function showProjects()
    {
        monterNom();
        projectGrid.classList.add('visible');
        responseLine.textContent = '';
    }

    function hideProjects()
    {
        descendreNom();
        projectGrid.classList.remove('visible');
        responseLine.textContent = '';
    }

    function showAbout()
    {
        hideProjects();
        monterNom();
        fenetreAbout.classList.add('visible');
    }

    function hideAbout()
    {
        descendreNom();
        hideProjects();
        fenetreAbout.classList.remove('visible');    
    }

    const projects = [
        { title: 'CHIP8', body: 'Un interpréteur de CHIP8 réalisé en C++ avec SDL2<br>Vous pouvez trouver le projet <a href="https://github.com/QuartzWasTaken/CHIP8-Interpreter" target="_blank" style="color:#f80040;text-decoration:underline;">ici</a>'},
        { title: 'Snake avec Pathfinding', body: 'Un jeu de snake autonome capable de trouver le chemin le plus court en évitant les pavés, réalisé en C dans le cadre d\'un projet à l\'IUT<br>Vous pouvez trouver le projet <a href="https://github.com/QuartzWasTaken/SnakeIBC" target="_blank" style="color:#f80040;text-decoration:underline;">ici</a>' },
        { title: 'LCCore', body: 'Un plugin sécurisé et multifonctions pour un serveur Minecraft, réalisé en Java <br>Vous pouvez trouver le projet <a href="https://github.com/Leg0shii/LCCore/tree/prod" target="_blank" style="color:#f80040;text-decoration:underline;">ici</a>' }
    ];

    const helpStringArray = [
        "<strong>about    - Afficher la section \"À propos\"</strong>",
        "<strong>projects - Afficher mes projets</strong>",
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

    document.querySelectorAll('a').forEach(button => {
        button.addEventListener('click', () => {
          console.log('Bouton cliqué');
      
          button.blur();
        });
      });

    document.addEventListener('keydown', (e) => {
        if(e.key.length === 1)
        {
            typedText.textContent += e.key;
        }
        else if(e.key === 'ArrowUp')
        {
            if(commandeASelectionner < 0)
            {
                commandeASelectionner = -1;
            }
            typedText.textContent = commandesExecutees[commandeASelectionner];
            commandeASelectionner--;
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

            if(aboutUp)
            {
                hideAbout();
            }

            if(command === 'help')
            {
                responseLine.innerHTML = helpString;
            }
            else if(command === 'projects' || command === 'projets')
            {
                showProjects();
                projectsUp = true;
                responseLine.innerHTML = "Tapez \"back\" ou une autre commande pour cacher la liste des projets"
            }
            else if(command === 'about' || command === 'About')
            {
                showAbout();
                aboutUp = true;
                responseLine.innerHTML = "Tapez \"back\" ou une autre commande pour cacher la section \"À propos\""
            }
            else if(command === 'back')
            {
                hideProjects();
                hideAbout();
                projectsUp = false;
                aboutUp = false;
                responseLine.innerHTML = "Tapez \"help\" pour afficher la liste des commandes"
            }
            else if(command === 'linkedin' || command === 'Linkedin' || command === 'LinkedIn')
            {
                responseLine.innerHTML = 'Voici mon LinkedIn : <a href="https://fr.linkedin.com/in/gabriel-gdn" target="_blank" style="color:#f80040;text-decoration:underline;">cliquer ici</a>';
            }
            else if(command === 'github' || command === 'Github' || command === 'GitHub')
            {
                responseLine.innerHTML = 'Voici mon GitHub : <a href="https://github.com/QuartzWasTaken" target="_blank" style="color:#f80040;text-decoration:underline;">cliquer ici</a>';
            }
            else if(command === 'todo')
            {
                responseLine.innerHTML = 'Il faut :<br>Afficher l\'indice "help" après avoir fait back<br>ajouter une présentation de chaque projet<br><strong>Ajouter des publications</strong>';
            }
            else
            {
                responseLine.innerHTML = `Commande '${command}' non reconnue - taper "help" pour afficher la liste des commandes`;
            }
            if(typedText.textContent != '')
            {
                commandesExecutees.push(typedText.textContent);
                commandeASelectionner = commandesExecutees.length - 1;
            }
            typedText.textContent = '';
        }
    });
})