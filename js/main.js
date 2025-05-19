window.addEventListener('DOMContentLoaded', () => {
    const typedText = document.querySelector('.txt-ecrit');
    const responseLine = document.querySelector('.reponse-console');
    const nameBox = document.querySelector('.gabriel-gourdon');
    const projectGrid = document.createElement('div');
    projectGrid.classList.add('grille-projets');

    document.body.appendChild(projectGrid);

    const projects = [
        { title: 'Lorem 1', body: 'test desc 1' },
        { title: 'Ipsum 2', body: 'test desc 2' },
        { title: 'Dolor 3', body: 'test desc 3' },
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
            if(command === 'help')
            {

                responseLine.innerHTML = helpString;
            }
            else if(command === 'projects' || command === 'projets')
            {
                nameBox.classList.add('top-position');
                projectGrid.classList.add('visible');
                responseLine.textContent = '';
            }
            else if(command === 'back')
            {
                nameBox.classList.remove('top-position');
                projectGrid.classList.remove('visible');
                responseLine.textContent = '';
            }
            else if(command === 'linkedin' || command === 'Linkedin' || command === 'LinkedIn')
            {
                responseLine.innerHTML = 'Voici mon LinkedIn : <a href="https://fr.linkedin.com/in/gabriel-gourdon-974a70355" target="_blank" style="color:#9ff;text-decoration:underline;">cliquer ici</a>';
            }
            else if(command === 'github' || command === 'Github' || command === 'GitHub')
            {
                responseLine.innerHTML = 'Voici mon GitHub : <a href="https://github.com/QuartzWasTaken" target="_blank" style="color:#9ff;text-decoration:underline;">cliquer ici</a>';
            }
            else
            {
                responseLine.textContent = '';
            }
            typedText.textContent = '';
        }
    });
});