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

// Show goals
async function showGoals() {
    const projectData = await fetchProjectData();

    // Render the project data
    RenderGoals(projectData);
}

function RenderGoals(projectData) {
    // Check if projectData and projectData.goals are defined
    if (!projectData || !projectData.goals) {
        console.error('Invalid project data or missing goals.');
    }

    // clear the goals
    const goalWrapper = document.querySelector('.goals-wrapper');
    goalWrapper.innerHTML = '';

    // Use try-catch to handle errors within forEach
    try {
        projectData.goals.forEach(goal => {
            // Maak het doelkaart-element
            const goalCard = document.createElement('div');
            goalCard.classList.add('goal-card');

            // Maak de inhoud van de doelkaart
            const goalCardContent = document.createElement('div');
            goalCardContent.classList.add('goal-card-content');

            // Maak de afbeeldingswrapper
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add('goal-card-image-wrapper');

            // Voeg de afbeelding toe
            const image = document.createElement('img');
            image.src = goals.goal-icon; // Gebruik de goalicon van het doel
            image.alt = 'illustration';
            imageWrapper.appendChild(image);

            // Voeg de SVG toe
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.classList.add('goal-card-svg');
            svg.innerHTML = `
        <g id="logo" style="mix-blend-mode:soft-light">
            <g id="big circle">
                <path id="side-p2" fill-rule="evenodd" clip-rule="evenodd" d="M1.17212 321.477C0.39624 312.755 0 303.924 0 295C0 175.742 70.7662 73.0132 172.597 26.5134L221.883 54.8159C118.924 86.1184 44 181.809 44 295C44 313.707 46.0465 331.936 49.9279 349.475L1.17212 321.477ZM588.53 265.362C589.502 275.11 590 284.997 590 295C590 413.13 520.566 515.042 420.284 562.152L371.49 534.132C472.708 501.783 546 406.951 546 295C546 275.066 543.676 255.676 539.285 237.084L588.53 265.362Z" fill="#ECECEC"/>
                <path id="side-p1" fill-rule="evenodd" clip-rule="evenodd" d="M284.655 589.822C183.407 586.333 95.1179 531.822 44.6992 451.2L70.3315 407.041C111.496 489.425 196.64 546 294.999 546C300.157 546 305.279 545.844 310.36 545.538L284.655 589.822ZM306.475 0.219104C407.65 4.08932 495.767 58.9132 545.897 139.761L520.199 184.032C479.24 101.067 393.784 44 294.999 44C290.245 44 285.522 44.1321 280.834 44.3929L306.475 0.219104Z" fill="#ECECEC"/>
            </g>
        </g>
    `;

            imageWrapper.appendChild(svg);

            // Voeg de afbeeldingswrapper toe aan de inhoud van de doelkaart
            goalCardContent.appendChild(imageWrapper);

            // Voeg de beschrijving toe aan de inhoud van de doelkaart
            const descriptionParagraph = document.createElement('p');
            descriptionParagraph.textContent = description;
            descriptionParagraph.classList.add('goal-card-description');
            goalCardContent.appendChild(descriptionParagraph);

            // Voeg de inhoud van de doelkaart toe aan de kaart
            goalCard.appendChild(goalCardContent);

            // Voeg de doelkaart toe aan de goal-wrapper
            const goalWrapper = document.querySelector('.goal-wrapper');
            goalWrapper.appendChild(goalCard);
        });
    } catch (error) {
        console.error('Error processing goals:', error);
    }
}