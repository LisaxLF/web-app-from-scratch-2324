![WAFSbanner](https://github.com/LisaxLF/web-app-from-scratch-2324/assets/112825800/d881c536-4243-4499-a30b-810ab52f7e14)

Welcome to my portfolio landing page! Here, you'll find everything you need to know about me, my skills, and the projects I've worked on. It's a one-stop destination to explore my professional journey and discover the diverse range of projects I've been involved in. Whether you're curious about my background, interested in my skills, or eager to see my projects in action, you'll find it all right here. Let's dive in and explore together!

## Why building my portfolio
![banner-why](https://github.com/LisaxLF/web-app-from-scratch-2324/assets/112825800/3e595751-e699-4bed-a09b-e8452516ee0d)

Building my portfolio was not only a logical step but also an exciting opportunity to showcase my skills and experiences in the world of web development. Here's why I embarked on this journey

![small-banner-professional](https://github.com/LisaxLF/web-app-from-scratch-2324/assets/112825800/b2bcd8e4-a0ed-4278-a47f-d3cc7d903695)

Having a polished portfolio is crucial in today's digital age. It serves as a visual representation of my skills, experiences, and accomplishments, making it easier for potential employers or clients to gauge my capabilities.


![small-banner-unique](https://github.com/LisaxLF/web-app-from-scratch-2324/assets/112825800/5116dfec-b381-4b58-bfd3-ccbb90f30e8e)

Creating my portfolio provided me with a unique chance to work with various technologies and tools, such as Express.js, HTML, CSS, and JavaScript. Through hands-on experience, I've been able to sharpen my skills and deepen my understanding of web development concepts.


![small-banner-branding](https://github.com/LisaxLF/web-app-from-scratch-2324/assets/112825800/435b0fb6-8c56-4bae-a0f9-4589ad4a9060)

My portfolio is more than just a collection of projects; it's a reflection of who I am as a developer. By carefully curating its content and design, I've been able to craft a cohesive personal brand that communicates my values, interests, and aspirations in the tech industry.


![small-banner-improvement](https://github.com/LisaxLF/web-app-from-scratch-2324/assets/112825800/a6b62e59-ff1b-40a9-8940-7836a774da3a)

Building and maintaining my portfolio is an ongoing process that allows me to continually refine my skills and stay up-to-date with the latest trends and technologies in web development. It's a journey of growth and self-improvement that I'm excited to continue exploring.


## My Journey
![banner-journey](https://github.com/LisaxLF/web-app-from-scratch-2324/assets/112825800/95283477-1316-4aaa-89ca-748a5d6c7f66)

My journey in building this portfolio began with careful planning and ideation. I started by creating a flowchart and sketches to visualize the structure and layout of the portfolio. These early drafts helped me brainstorm ideas and refine my vision for the final product.

### About the Flowchart
The flowchart below provides an overview of the functionalities of my portfolio. Please note that not all points are elaborated in detail, but the flowchart still offers a useful overview of what my portfolio has to offer.

The flowchart illustrates how a user can explore my portfolio and the actions they can take when viewing different sections such as skills, about me, projects, and CV. While not all possible interactions are included, the flowchart still gives a good understanding of the structure and available options of my portfolio.

Feel free to use the flowchart as a visual tool to navigate through my portfolio and explore the various capabilities it offers.

![image](https://github.com/LisaxLF/web-app-from-scratch-2324/assets/112825800/fe781d90-4626-4d43-8a16-ca932cfac7ec)

### Adapting Sketches to Meet School Requirements
As I began designing my portfolio, I created sketches to plan its layout and features. However, as I progressed, I needed to adapt these sketches to meet the specific requirements of my school project.

The original sketches focused on visual aesthetics and user interaction. Additionally, I had incorporated a microanimation to enhance the user experience. However, to align with the school's objectives, I revised them to include functionalities such as data retrieval from external APIs and seamless navigation within the portfolio.

The updated sketches reflect these changes, ensuring that my portfolio meets the criteria outlined by my school while still maintaining a user-friendly design with the microanimation intact.

With some design tweaks, I tailored my portfolio to meet the course requirements. This meant adjusting the design and features to match the curriculum's goals.

![Before Sketch](https://github.com/LisaxLF/web-app-from-scratch-2324/assets/112825800/ceb2ad7d-fcbb-4d8b-95ea-4a3132ae1f69)
***Before Sketch**: Initial design concept.*

![image](https://github.com/LisaxLF/web-app-from-scratch-2324/assets/112825800/42759696-5c88-47d1-b1d5-cdcad319d2e9)
***After Sketch**: finalized design concept.*

After refining my sketches based on feedback, I had a clear plan to bring my vision to life. I used HTML, CSS, JavaScript, and Express.js to build it. This meant i would work on both the frontend aswell as the backend.

Building the portfolio taught me a lot about web development, attention to detail, and problem-solving. It was a journey of ups and downs, but it helped me grow.

Now, I'm excited to share the final result with you. Join me as I showcase the fruits of my labor. Thank you for being part of my journey.

## Features
![banner-features](https://github.com/LisaxLF/web-app-from-scratch-2324/assets/112825800/dcbd2fb5-6469-4f6e-a745-d96a18bf9bbd)

Explore the key features that make my portfolio stand out:

**Marquee/Carousel Skillcards** - Highlight your skills with dynamic marquee or carousel cards, providing an engaging way for users to explore your expertise.

**CV Download** - Allow users to easily download your CV directly from your portfolio, making it convenient for them to access your resume.

**Project Showcase** - Present your projects in a visually appealing showcase, providing users with a glimpse into your work and accomplishments.

**API Integration** - Incorporate external APIs to enhance your portfolio, whether it's fetching live data, displaying real-time information, or adding interactive elements for a richer user experience.

### Marquee/Carousel Skillcards
``` EJS
<!-- Data uit het JSON-bestand -->
<% for (const key in skillsWebDev) { %>
<% const SkillWebDev = skillsWebDev[key]; %>
<div class="card">
    <div class="content">
        <div class="front">
            <img class="icons" src="<%= SkillWebDev.img %>" alt="<%= SkillWebDev.name %>">
            <p><%= SkillWebDev.name %></p>
        </div>
        <div class="back">
            <span><%= SkillWebDev.percentage %>%</span>
            <p><%= SkillWebDev.level %></p>
        </div>
    </div>
</div>
<% } %>
```
This code creates cards on my portfolio page using data from a JSON file. It loops through each skill in the skillsWebDev array, which is loaded from the JSON file.

For each skill, an HTML card is generated with information like the skill's name and icon from the corresponding objects in the JSON file. The front of the card shows the skill's name, while the back shows the skill's percentage and level.

This dynamic approach allows new skills to be easily added to the JSON file without needing to change the HTML code, making it easy to keep my portfolio up-to-date with my latest skills and expertise.


https://github.com/LisaxLF/web-app-from-scratch-2324/assets/112825800/9a644e09-d6d5-4f6b-b55a-8abb80f5b493


### CV Download
``` Javascript
app.get('/download', function (req, res) {
    try {
        const file = `${__dirname}/public/downloads/CVLisa.pdf`;
        res.download(file);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error occurred while reading files.');
    }
});
```
This code snippet defines a route in my application for downloading my CV. When a user navigates to the /download endpoint, the server responds by sending the CV file as a download.

The res.download() function is used to initiate the file download. It takes the file path as an argument and sends it to the client's browser with the appropriate headers for downloading.

If any error occurs during the process, such as the file not being found or an error while reading the file, the server responds with a 500 status code and an error message.

### Project Showcase

In the project showcase section of my portfolio, I've incorporated micro animations to enhance the user experience. When a user clicks on a project, a small screen slides in from both sides, displaying basic information about the project.

Additionally, the navigation bar smoothly slides up, creating a seamless transition. These subtle animations not only add a touch of interactivity but also improve the overall aesthetic appeal of the portfolio.

By integrating these micro animations, I aim to provide users with an engaging and enjoyable browsing experience while showcasing my projects in an elegant manner.

https://github.com/LisaxLF/web-app-from-scratch-2324/assets/112825800/46b2d915-9a2b-49d5-aa17-f986aa8427a9

### API Intergration
``` Javascript
app.get('/', async (_req, res) => {
    try {
        const dataWebDev = await readFile('skills-webdevelop.json');
        const dataWebDesign = await readFile('skills-webdesign.json');
        const projectsData = await readFile('projects.json');

        const skillsWebDev = JSON.parse(dataWebDev);
        const skillsWebDesign = JSON.parse(dataWebDesign);
        const projects = JSON.parse(projectsData);

        res.render('index', {
            skillsWebDev,
            skillsWebDesign,
            projects
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error occurred while reading files.');
    }
});
```

This code snippet demonstrates the integration of external APIs into my portfolio. When a user visits the homepage (/), the server renders the index.ejs file and fetches data from three separate JSON files using asynchronous file reading operations.

The data retrieved includes information about web development skills (skills-webdevelop.json), web design skills (skills-webdesign.json), and projects (projects.json). These JSON files serve as the source of dynamic content for my portfolio.

Once the data is fetched and parsed, it is passed to the index.ejs file as variables (skillsWebDev, skillsWebDesign, and projects). This allows me to dynamically generate the content of my portfolio based on the data retrieved from the APIs.

By integrating these external APIs, I am able to keep my portfolio content up-to-date and provide users with relevant and engaging information about my skills and projects.

## Technologies
![banner-technology](https://github.com/LisaxLF/web-app-from-scratch-2324/assets/112825800/4c675a05-23fb-4156-86ce-ba09b4432cae)

This portfolio landing page is built using the following technologies:

- HTML
- CSS
- JavaScript
- Express.js
- EJS (Embedded JavaScript templates)

## Installation
![banner-instal](https://github.com/LisaxLF/web-app-from-scratch-2324/assets/112825800/1df39ace-a024-4271-8318-b8ee083448a5)

1. Clone the repository:
https://github.com/LisaxLF/web-app-from-scratch-2324.git


2. Install the necessary dependencies:
npm install

## Usage
![banner-usage](https://github.com/LisaxLF/web-app-from-scratch-2324/assets/112825800/a40fa895-f440-4788-9af8-61c1019ecf2a)

1. Start the Express server:
  npm start

2. Open your web browser and go to `http://localhost:3000` to view the landing page.

## License
![banner-license](https://github.com/LisaxLF/web-app-from-scratch-2324/assets/112825800/352366ec-d883-4da3-8d17-a4ddaa8214f0)

This project is licensed under the MIT License. See the `LICENSE` file for more information.
