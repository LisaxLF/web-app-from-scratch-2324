// Functie om project in volledig scherm weer te geven wanneer erop wordt geklikt
function showProject(title) {
    const project = projects.find(project => project.title === title); // Zoek het project op basis van de titel
    if (!project) {
        console.error('Project not found!');
        return;
    }

    const fullscreenProject = document.getElementById("fullscreen-project");

    // Voeg projectgegevens toe aan het volledig scherm overlay
    fullscreenProject.innerHTML = `
    <article class="project">
        <div class="title">
            <h4>${project.type}</h4>
            <h3>${project.title}</h3>
        </div>
        <div class="tags">
            <!-- Loop door de graden van het project en voeg tags toe -->
            ${project.grades.map(grade => `<span class="tag-style">${grade.title}</span>`).join('')}
        </div>
        <p>${project.description}</p>
        <a href="/projects/">Read more
            <svg>
                <!-- Voeg SVG-pictogram toe -->
            </svg>
        </a>
    </article>
    `;

    // Toon het volledig scherm overlay
    const fullscreenOverlay = document.getElementById("fullscreen-overlay");
    fullscreenOverlay.classList.add("active");
}

// Functie om het volledig scherm overlay te verbergen
function hideProject() {
    const fullscreenOverlay = document.getElementById(".hideproject");
    fullscreenOverlay.
    fullscreenOverlay.classList.remove("active");
}