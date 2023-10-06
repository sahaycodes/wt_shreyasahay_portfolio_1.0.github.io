document.addEventListener("DOMContentLoaded", function () {
    const rotatingText = document.getElementById("rotatingText");
    const connectButton = document.getElementById("connectButton");

    const toRotate = ["Note Takin'", "Web App", "Self-Project"];
    let loopNum = 10;
    let isDeleting = false;
    let text = '';
    let delta = 300 - Math.random() * 100;
    const period = 2000;

    function tick() {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        rotatingText.textContent = updatedText;

        if (isDeleting) {
            delta /= 2;
        }

        if (!isDeleting && updatedText === fullText) {
            isDeleting = true;
            delta = period;
        } else if (isDeleting && updatedText === '') {
            isDeleting = false;
            loopNum++;
            delta = 500;
        }
    }

    setInterval(tick, delta);

    connectButton.addEventListener("click", function () {
        console.log('connect');
    });

    // Additional code from your previous conversion
    const navbar = document.getElementById("navbar");
    const navbarToggler = document.getElementById("navbar-toggler");
    const navbarCollapse = document.getElementById("navbar-collapse");

    navbarToggler.addEventListener("click", () => {
        navbar.classList.toggle("open");
        navbarCollapse.classList.toggle("show");
    });

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.forEach((navLink) => navLink.classList.remove("active"));
            link.classList.add("active");
        });
    });
});
//typing effect function 
function typeEffect(text, elementId, speed,callback) {
    const textElement = document.getElementById(elementId);
    const textToType = text.split('');
    let i = 0;

    function type() {
        if (i < textToType.length) {
            textElement.innerHTML += textToType[i];
            i++;
            setTimeout(type, speed);
        }else{
            setTimeout(deleteEffect,1000);
        }
    }

    function deleteEffect(){
        if (i>=0){
            const currentText = textToType.slice(0,i).join('');
            textElement.innerHTML=currentText;
            i--;
            setTimeout(deleteEffect,speed);
        }else{
            if (typeof callback === 'function'){
                callback();
            }
        }
    }

    type();
}

// Call the typing effect function 
typeEffect("I'm Shreya Sahay", "typingText", 100,function() {
    setTimeout(function(){
        typeEffect("I'm Shreya Sahay","typingText",100);

    },1000);
});

