// JavaScript functionality for Resume Builder

// Function to generate the resume
function generateResume() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;
    const image = document.getElementById("image").files[0];

    // Logic to create a resume (this can be expanded)
    const resumeContent = `
        <h1>${name}</h1>
