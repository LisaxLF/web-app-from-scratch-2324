async function showFullScreen(projectTitle) {
    console.log('showFullScreen:', projectTitle);
    // await get project data
    const projectData = await getProjectData(projectTitle);

    // await render project data
    await renderProjectData(projectData);

    // await show project
    await showProject();

    // Send to the project page route
    sendToProjectPage(projectTitle);
}

//  Get assigned project data
async function getProjectData(projectTitle) {
    // Fetch de projectgegevens op uit het JSON-bestand
    const projectsData = await fetch('https://raw.githubusercontent.com/LisaxLF/web-app-from-scratch-2324/main/projects.json');
    const projects = await projectsData.json();

    // Get the project data based on the projectTitle
    const projectData = projects.find(project => project.title === projectTitle);

    return projectData;
}

// Render the project data
async function renderProjectData(projectData) {
    // Fill in the project data
    const projectTitle = document.querySelector('.project-title');
    const projectType = document.querySelector('.project-type');
    const projectDescription = document.querySelector('.project-description');
    const projectTags = document.querySelector('.project-tags');
    const projectLink = document.querySelector('.project-github');
    const projectResources = document.querySelector('.project-resources');


    projectTitle.textContent = projectData.title;
    projectType.textContent = projectData.type;
    projectDescription.textContent = projectData.description;
    // projectLink.textContent = projectData.linkGithub;

    // render each tag
    RenderTags(projectData);

    // render each resource
    RenderResources(projectData);

    // render the image
    const projectImage = document.querySelector('.project-mockup');
    projectImage.src = projectData.mockup;
}

const header = document.querySelector('header');
const fullscreenProject = document.querySelector('.fullscreen-project');

// Show the project with animation
async function showProject() {
    // when active headers net to be hidden 
    header.classList.add('header-hide');

    // add the active class
    fullscreenProject.classList.add('active');

}

// Hide the project with animation
function closeProject() {
    // remove the active class
    fullscreenProject.classList.remove('active');

    // when active headers net to be shown  
    header.classList.remove('header-hide');
}

function RenderTags(projectData) {
    // clear the tags
    const tagWrapper = document.querySelector('.project-tags');
    tagWrapper.innerHTML = '';

    projectData.courses.forEach(grade => {
        const tagWrapper = document.querySelector('.project-tags');
        const tagElement = document.createElement('span');
        tagElement.textContent = grade.title;
        tagWrapper.appendChild(tagElement);

        // add class class="tag-style"
        tagElement.classList.add('tag-style');
    });
}

function RenderResources(projectData) {
    // clear the resources
    const resourceWrapper = document.querySelector('.project-resources');
    resourceWrapper.innerHTML = '';

    projectData.resources.forEach(resource => {

        // create the resource element
        const resourceContentWrapper = document.createElement('div');
        resourceWrapper.appendChild(resourceContentWrapper);
        resourceContentWrapper.classList.add('resource-content-wrapper');

        // the name
        const resourceName = document.createElement('p');
        resourceName.textContent = resource.name;
        resourceContentWrapper.appendChild(resourceName);
        resourceName.classList.add("icon-name");

        // the circle
        const resourceElement = document.createElement('div');
        resourceContentWrapper.appendChild(resourceElement);
        resourceElement.classList.add('resource-style');

        // the image
        const resourceImage = document.createElement('img');
        resourceImage.src = resource.icon;
        resourceElement.appendChild(resourceImage);

        // events

        // add the name below when hovered
        resourceElement.addEventListener('mouseover', function () {
            resourceName.classList.add('icon-name-active');
        });

        // remove the name below when hovered
        resourceElement.addEventListener('mouseout', function () {
            resourceName.classList.remove('icon-name-active');
        });
    });
}

// Send to the project page route
function sendToProjectPage(projectTitle) {
    const projectLink = document.querySelector('#project-location');
    // Send to the project page route
    projectLink.href = `/${projectTitle}`;
}