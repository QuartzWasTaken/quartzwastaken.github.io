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

    function handleCommand(cmd)
    {
        switch(cmd)
        {
            case "back":
                hideProjects();
                hideAbout();
                projectsUp = false;
                aboutUp = false;
                responseLine.innerHTML = "Tapez \"help\" pour afficher la liste des commandes"
                break;

            case "help":
                responseLine.innerHTML = helpString;
                break;
                
            case "projects":
            case "projets":
            case "project":
            case "projet":
                showProjects();
                projectsUp = true;
                responseLine.innerHTML = "Tapez \"back\" ou une autre commande pour cacher la liste des projets"
                break;

            case "about":
            case "About":
                showAbout();
                aboutUp = true;
                responseLine.innerHTML = "Tapez \"back\" ou une autre commande pour cacher la section \"À propos\""
                break;

            case "linkedin":
            case "Linkedin":
            case "LinkedIn":
                responseLine.innerHTML = 'Voici mon LinkedIn : <a href="https://fr.linkedin.com/in/gabriel-gdn" target="_blank" style="text-decoration:underline;">cliquer ici</a>';
                break;

            case "github":
            case "Github":
            case "GitHub":
                responseLine.innerHTML = 'Voici mon GitHub : <a href="https://github.com/QuartzWasTaken" target="_blank" style="text-decoration:underline;">cliquer ici</a>';
                break;

            default:
                responseLine.innerHTML = `Commande '${cmd}' non reconnue - taper "help" pour afficher la liste des commandes`;
                break;
        }
    }

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
        { title: 'CHIP8', body: `En début de première année de BUT Informatique, j'ai voulu approfondir ma connaissance du C++.
            J'ai donc démarré un projet personnel d\'émulateur de <a href="https://fr.wikipedia.org/wiki/CHIP-8" target="_blank">CHIP8</a>.
            <br>Au fil de ce projet, j'ai eu l'occasion de me familiariser avec le <strong>C++ et ses interactions avec la librairie graphique SDL2</strong>.
            Le résultat final de ce projet est un émulateur de CHIP8 fonctionnel.
            <br>Vous pouvez trouver le projet <a href="https://github.com/QuartzWasTaken/CHIP8-Interpreter" target="_blank" style="color:#f80040;text-decoration:underline;">ici</a>`},

        { title: 'Snake avec Pathfinding', body: `Dans le cadre de ma formation, l'IUT m'a confié un projet en C.
            Dans le cadre de ce projet en collaboration, j'ai été amené à réaliser un <strong>jeu de Snake</strong> en étant soumis à une limite de temps et des restrictions précises.
            Le projet complété est un Snake qui utilise un <a href="https://fr.wikipedia.org/wiki/Algorithme_A*" target="_blank">algorithme de pathfinding</a> qui prend en compte les obstacles sur le terrain.
            <br>Vous pouvez trouver le projet <a href="https://github.com/QuartzWasTaken/SnakeIBC" target="_blank" style="text-decoration:underline;">ici</a>` },

        { title: 'LCCore', body: `Pour résoudre les problèmes que je rencontrais avec un serveur Minecraft sur lequel je jouais, je me suis attelé moi-même à leur résolution.
            J'ai contribué à l'ajout de <strong>nouvelles commandes</strong>, de renforcement de la sécurité et de nouvelles manières d'utiliser le chat.
            <br>Vous pouvez trouver le projet <a href="https://github.com/Leg0shii/LCCore/tree/prod" target="_blank" style="text-decoration:underline;">ici</a>` }
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
        const maxLength = 150; // nombre de caractères visibles par défaut
        const isTronque = proj.body.length > maxLength;
        const resume = isTronque ? proj.body.slice(0, maxLength) + "..." : proj.body;

        card.innerHTML = `
        <div class="project-header">${proj.title}</div>
        <div class="project-body">
            <div class="texte-court">${resume}</div>
            <div class="texte-complet" style="display:none;">${proj.body}</div>
            ${isTronque ? '<button class="toggle-description">En savoir plus</button>' : ''}
        </div>
    `;
        projectGrid.appendChild(card);
    });

    projectGrid.addEventListener('click', function(e) {
        if (e.target.classList.contains('toggle-description')) {
            const btn = e.target;
            const projetBody = btn.parentElement;
            const court = projetBody.querySelector('.texte-court');
            const complet = projetBody.querySelector('.texte-complet');
    
            const isExpanded = complet.style.display === 'block';
    
            if (isExpanded) {
                complet.style.display = 'none';
                court.style.display = 'block';
                btn.textContent = 'En savoir plus';
            } else {
                complet.style.display = 'block';
                court.style.display = 'none';
                btn.textContent = 'Voir moins';
            }
        }
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

            handleCommand(command);
            
            if(typedText.textContent != '')
            {
                commandesExecutees.push(typedText.textContent);
                commandeASelectionner = commandesExecutees.length - 1;
            }

            typedText.textContent = '';
        }
    });
})