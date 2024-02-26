// Show resources
async function showResources() {
    const projectData = await fetchProjectData();

    // Render the project data
    RenderResources(projectData);
}

async function fetchProjectData() {
    try {
        // Fetch the project data from the JSON file
        const projectsData = await fetch('https://raw.githubusercontent.com/LisaxLF/web-app-from-scratch-2324/main/projects.json');
        const projects = await projectsData.json();

        // Get the project title from the route and decode it
        const projectTitle = decodeURIComponent(window.location.pathname.split('/').pop());

        // Find the project data based on the project title
        const projectData = projects.find(project => project.title === projectTitle);

        if (!projectData) {
            throw new Error(`Project with title '${projectTitle}' not found.`);
        }

        console.log(projectData);
        return projectData;
    } catch (error) {
        console.error('Error fetching project data:', error);
    }
}

function RenderResources(projectData) {
    // Check if projectData and projectData.resources are defined
    if (!projectData || !projectData.resources) {
        console.error('Invalid project data or missing resources.');
    }

    // clear the resources
    const resourceWrapper = document.querySelector('.project-resources');
    resourceWrapper.innerHTML = '';

    // Use try-catch to handle errors within forEach
    try {
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
    } catch (error) {
        console.error('Error processing resources:', error);
    }
}

showResources();

