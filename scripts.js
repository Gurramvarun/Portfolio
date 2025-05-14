// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Project Modal Logic
const projectBtns = document.querySelectorAll(".project-btn");
const modal = document.getElementById("project-modal");
const closeBtn = document.querySelector(".close-btn");
const projectDescription = document.getElementById("project-description");

const projectData = {
  pneumatic:
    "This project replaces the traditional manual lever system with a pneumatic pushbutton mechanism to automate gear shifting, reducing rider fatigue.",
  biomedical:
    "Exploring biomedical applications of zinc and fluoroapatite in bone repair and dental applications, focusing on material synthesis and biocompatibility.",
  manufacturing:
    "Designed and executed a manufacturing process with multiple hole-making operations such as drilling, reaming, and tapping on a single metallic workpiece.",
};

projectBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const projectType = btn.getAttribute("data-project");
    projectDescription.textContent = projectData[projectType];
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
