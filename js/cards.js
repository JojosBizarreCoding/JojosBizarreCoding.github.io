// thanks to astralvrz for the original code, with permission to use

const projectsContainer = document.getElementById('card-container');

const fetchProjects = async () => await (await fetch('../data/projects.json')).json();
const warn = (project, field) => console.warn(`No ${field} for project: ${project}`);

async function createProjectCards() {
    projectsContainer.innerHTML = '';
    try {
        const data = await fetchProjects().then(data => data.projects);
        data.forEach(project => {
            const card = document.createElement('div');
            card.className = 'card';
            
            let cardHTML = '';
            
            if (project.img) {
                cardHTML += `
                <img src="${project.img}" class="card-img-top" alt="${project.title} img">
            `;
            } else {warn(project.title, 'image');}
            cardHTML += `
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
            `;
            for (const tag of project.tags) {
                cardHTML += `<span class="badge badge-tag text-dark me-1 mb-1">${tag}</span>`;
            }
            cardHTML += `<br>`;


                cardHTML += `<a href="${project.github}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">${project.button}</a>`;
            
            cardHTML += `</div>`;
            
            card.innerHTML = cardHTML;
            projectsContainer.appendChild(card);
        });
    }
    catch (error) {
        console.error(`Error fetching or processing projects: ${error}`);
        projectsContainer.innerHTML = `<div class="alert alert-danger" role="alert">Failed to load projects. Please try again later. <br> ${error}</div>`;
    }
}
createProjectCards();