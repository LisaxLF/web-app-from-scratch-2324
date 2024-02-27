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

// ASSIGNMENTS OVERVIEW

async function showGoals() {
    const projectData = await fetchProjectData();

    // Get the button for the subject
    const courseData = await getButton(projectData);

    // Render the project goals
    RenderGoals(courseData);

    // Render the project story
    RenderStory(courseData);
}

async function getButton(projectData) {
    return new Promise((resolve) => {
        // get the radio buttons
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        console.log(radioButtons);

        // Check which radio button is checked
        radioButtons.forEach(radio => {
            if (radio.checked) {
                const radioValue = radio.value;
                console.log(radioValue);

                // Find the data for the radio value
                const courseData = FindDataforRadio(projectData, radioValue);
                resolve(courseData);
            }
        });

        // Add event listener to the radio buttons
        radioButtons.forEach(radio => {
            radio.addEventListener('change', async function () {
                if (radio.checked) {
                    const radioValue = radio.value;
                    console.log(radioValue);

                    // Find the data for the radio value
                    const courseData = await FindDataforRadio(projectData, radioValue);

                    // Render the project goals with the updated data
                    RenderGoals(courseData);

                    // Render the project story
                    RenderStory(courseData);
                }
            });
        });
    });
}

async function FindDataforRadio(projectData, radioValue) {
    // Check if projectData has the courses property
    if (projectData.hasOwnProperty('courses')) {
        // Access the courses property
        const courses = projectData.courses;

        // Iterate over each course
        for (const course of courses) {
            // Check if the title matches the radioValue
            if (course.hasOwnProperty('title') && course.title === radioValue) {
                console.log(course);
                return course; // Return the matching course
            }
        }

    }

    console.log('Course not found');
    return null; // Return null if no matching course is found
}


function RenderGoals(courseData) {
    // clear the goals
    const goalWrapper = document.querySelector('.goals-wrapper');
    goalWrapper.innerHTML = '';

    // transition for each render wrapper
    goalWrapper.style.transition = 'all 0.5s ease-in-out';


    // Use try-catch to handle errors within forEach
    try {
        courseData.goals.forEach(goal => {
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
            image.src = goal['goal-icon']; // Gebruik de goalicon van het doel
            image.alt = 'illustration';
            imageWrapper.appendChild(image);

            // maak een svg aan
            const svgIcon = document.createElement('div');
            svgIcon.classList.add('goal-card-svg');

            // Voeg de SVG-inhoud toe aan de innerHTML van het div-element
            const svgContent = `                        
            <svg width="90" height="90" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M49.7273 109.731C51.5229 109.909 53.3439 110 55.186 110C77.2959 110 96.3504 96.8835 105.032 77.9874L99.4173 68.2359C93.9245 87.8188 75.9408 102.179 54.6033 102.179C51.2334 102.179 47.9473 101.821 44.7807 101.14L49.7273 109.731ZM60.2608 0.232259C58.5898 0.0785555 56.8971 3.63553e-06 55.186 3.56136e-06C32.9392 2.59703e-06 13.7857 13.2796 5.17967 32.3645L10.3191 41.2902C16.368 22.61 33.9081 9.1018 54.6033 9.1018C58.6098 9.1018 62.4981 9.60809 66.2076 10.5602L60.2608 0.232259Z" fill="#E9E9E9"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.000193829 56.9575C0.597712 75.905 10.7221 92.4427 25.729 101.914L34.083 97.0779C18.897 89.3517 8.48147 73.4766 8.48147 55.1475C8.48147 54.0855 8.51644 53.0317 8.58527 51.9873L-0.000193829 56.9575ZM110 53.1293C109.31 34.1992 99.1102 17.7029 84.0486 8.30125L75.7284 13.1178C91.021 20.8067 101.526 36.7395 101.526 55.1475C101.526 56.1346 101.496 57.1146 101.437 58.0865L110 53.1293Z" fill="#E9E9E9"/>
            </svg>            
                `;

            // Voeg de SVG-inhoud toe aan de innerHTML van het div-element
            svgIcon.innerHTML = svgContent;

            // Voeg de svg toe aan de afbeeldingswrapper
            imageWrapper.appendChild(svgIcon);

            // Voeg de afbeeldingswrapper toe aan de inhoud van de doelkaart
            goalCardContent.appendChild(imageWrapper);

            // Voeg de beschrijving toe aan de inhoud van de doelkaart
            const descriptionParagraph = document.createElement('p');
            descriptionParagraph.textContent = goal.goal; // Beschrijving van het doel
            descriptionParagraph.classList.add('goal-card-description');
            goalCardContent.appendChild(descriptionParagraph);

            // Voeg de inhoud van de doelkaart toe aan de kaart
            goalCard.appendChild(goalCardContent);

            // Voeg de doelkaart toe aan de goal-wrapper
            goalWrapper.appendChild(goalCard);

        });
    } catch (error) {
        console.error('Error processing goals:', error);
    }
}

function RenderStory(courseData) {

    console.log(courseData);
    // HTML-structuur als een string in een template literal
    const topicStoryStructure = `
    <div class="topic-story-individual">
        <div class="topic-content-wrapper">
            <article class="topic-assignment">
                <h4>${courseData.individualAssignment}</h4>
                <p>${courseData.individualDescription}</p>
            </article>
            <article class="topic-link">
                <h5>Github</h5>
                <a href="${courseData.linkGithub}">${courseData.linkGithub}</a>
            </article>
            <article class="topic-grade">
                <h5>Grade</h5>
                <p>${courseData.grade}</p>
            </article>
        </div>
        <div class="topic-story-wrapper">
            ${courseData.individualStory.map(story => `
                <article class="topic-story-paragraph">
                    <h4>${story.header}</h4>
                    <p>${story.paragraph}</p>
                </article>
            `).join('')}
        </div>
    </div>
    `;


    // Selecteer de container voor het verhaal en voeg de HTML-structuur toe
    const container = document.querySelector('.topic-story');
    container.innerHTML = topicStoryStructure;
}

/// Render image slider
function ImageSlider() {
    // image slider event 
    const images = document.querySelectorAll(".slider-img");

    function clearActiveImage() {
        images.forEach(function (image) {
            image.classList.remove("active");
        });
    }

    images.forEach(function (image, index) {
        image.onclick = function () {
            event.stopPropagation(); // Belangrijk om clearActiveImage() niet bij elke klik aan te roepen
            if (images[index].classList.contains("active")) {
                images[index].classList.remove("active");
            } else {
                clearActiveImage(index);
                images[index].classList.add("active");
            }
        };
    });

    window.addEventListener("click", () => {
        clearActiveImage();
    });
}

ImageSlider();
showGoals();
showResources();