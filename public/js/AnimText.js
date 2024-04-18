document.addEventListener("DOMContentLoaded", function () {
    main();
});

// Main async function
async function main() {
    // Call the function
    const text = await splitText();
    await AnimateText(text);

    // Await the completion of text animation before calling appearSvg
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000); // Adjust the delay as needed to ensure the text animation completes
    });

    appearSvg();
}


// splitText function
async function splitText() {
    const title = document.querySelector("h1");
    const text = title.textContent; // Get the original text
    title.textContent = ""; // Clear the text

    return text;
}

// AnimateText function
async function AnimateText(text) {
    const title = document.querySelector("h1"); // Add missing variable declaration
    [...text].forEach((char, index) => {
        setTimeout(() => {
            title.textContent += char;
        }, index * 100); // Adjust the delay here (in milliseconds)
    });
}

// Appear svg animation function
function appearSvg() {
    const svg = document.querySelector(".mouse");
    svg.style.opacity = 1;
    svg.style.transition = "opacity 5s";
    svg.style.animation = "appear infinite ease-in-out 2s";
}