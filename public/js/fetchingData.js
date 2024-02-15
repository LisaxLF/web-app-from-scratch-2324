async function showFullScreen(projectTitle) {
    // await get project data
    const projectData = await getProjectData(projectTitle);
    // render the fullscreen.ejs file with the project data
    // Fill in the project data
    console.log(projectData);
}

//  Get assigned project data
async function getProjectData(projectTitle) {
    // Fetch de projectgegevens op uit het JSON-bestand
    const projectsData = await fetch('../projects.json');
    const projects = await projectsData.json();
    const fetchedProjectData = projects.find(project => project.title === projectTitle);
    console.log(fetchedProjectData);

    return fetchedProjectData;
}

// // Show the project with animation
async function showProject(_projectData) {
    fullscreenProject.classList.add('active');

    // Reset de translate waarden van left en right side
    document.querySelector('.left-side').style.transform = 'translateX(0)';
    document.querySelector('.right-side').style.transform = 'translateX(0)';
}

// Hide the project with animation
function closeProject() {
    fullscreenProject.classList.remove('active');
}

async function fillData(projectData) {
    // Fill in the project data
    const projectTitle = document.querySelector('.project-title');
    const projectDescription = document.querySelector('.project-description');
    const projectSkills = document.querySelector('.project-skills');
    const projectLink = document.querySelector('.project-link');

    projectTitle.textContent = projectData.title;
    projectDescription.textContent = projectData.description;
    projectSkills.textContent = projectData.skills;
    projectLink.href = projectData.link;
    projectLink.textContent = projectData.link;
}
