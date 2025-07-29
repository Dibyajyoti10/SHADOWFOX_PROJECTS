var typeData = new Typed(".role",{
    strings:[
        "Full Stack Developer",
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Coder",
        "Designer",
        "FreeLancer",
        "Artist",
    ],
    loop: true,
    typeSpeed: 60,
    backSpeed: 90,
    backDelay: 1000,
});

document.getElementById("dark-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// document.getElementById("dark-toggle").addEventListener("click", function(){
//     const body = document.body;
//     const btn = document.getElementById("dark-toggle");

//     body.classList.toggle("dark-mode");

//     if (body.classList.contains("dark-mode")) {
//         btn.innerHTML = "☀️ Light Mode";
//     } else {
//         btn.innerHTML = "🌙 Dark Mode";
//     }

// });


VanillaTilt.init(document.querySelectorAll(".project-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
  });
