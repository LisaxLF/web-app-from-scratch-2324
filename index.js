const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

// Set de view engine naar EJS
app.set('view engine', 'ejs');

// Serveer statische bestanden
app.use(express.static('public'));

// Render de index.ejs file
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

//route for the about page
app.get('/about', async (req, res) => {
    try {
        res.render('about', {
            about
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error occurred while reading files.');
    }
});

//route for the contact page
app.get('/contact', async (req, res) => {
    try {
        res.render('contact', {
            contact
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error occurred while reading files.');
    }
});

//route for the 404 page
// app.get('*', async (req, res) => {
//     try {
//         res.render('404');
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).send('Error occurred while reading files.');
//     }
// });

//route for cv download
app.get('/download', function (req, res) {
    try {
        const file = `${__dirname}/public/downloads/CVLisa.pdf`;
        res.download(file);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error occurred while reading files.');
    }
});


// Route for the project page
app.get('/:title', async (req, res) => {
    try {
        const projectsData = await readFile('projects.json');
        const projects = JSON.parse(projectsData);
        const projectData = projects.find(project => project.title === req.params.title);

        res.render('project', {
            projectData
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error occurred while reading files.');
    }
});

async function readFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                console.error('Error:', err);
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

app.listen(port, () => {
    console.log('Server is running on port 3000');
});