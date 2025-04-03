 // JavaScript functionality for Resume Builder

// Function to display a success message on form submission
function showSuccessMessage() {
    alert("Your resume has been submitted successfully!");
}

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
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h2>Work Experience</h2>
        <p>${experience}</p>
        <h2>Education</h2>
        <p>${education}</p>
        <h2>Skills</h2>
        <p>${skills}</p>
    `;

    // Display the resume content (for now, just log it)
    console.log(resumeContent);
    alert("Resume generated! Check the console for details.");
}

// Function to print the resume
function printResume() {
    window.print();
}

// Function to save the resume (using local storage for simplicity)
function saveResume() {
    const resumeData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        experience: document.getElementById("experience").value,
        education: document.getElementById("education").value,
        skills: document.getElementById("skills").value,
    };
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    alert("Resume saved for future use!");
}

// Function to send the resume via email (placeholder)
function sendEmail() {
    alert("This feature is not yet implemented.");
}

// Event listeners for buttons
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generateResume").addEventListener("click", generateResume);
    document.getElementById("printResume").addEventListener("click", printResume);
    document.getElementById("saveResume").addEventListener("click", saveResume);
    document.getElementById("sendEmail").addEventListener("click", sendEmail);
});

// Function to display a success message on form submission
function showSuccessMessage() {
    alert("Your resume has been submitted successfully!");
}

// Event listener for a hypothetical submit button
document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector(".button"); // Assuming a button with class 'button'
    if (submitButton) {
        submitButton.addEventListener("click", showSuccessMessage);
    }
});
