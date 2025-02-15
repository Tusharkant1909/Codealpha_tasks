document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.navBtn').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.textContent.replace(" ", "");
            const section = document.querySelector("." + sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Dynamic Greeting Message
    function updateGreeting() {
        const hours = new Date().getHours();
        let greeting = "Hello!";
        if (hours < 12) {
            greeting = "Good Morning!";
        } else if (hours < 18) {
            greeting = "Good Afternoon!";
        } else {
            greeting = "Good Evening!";
        }
        document.querySelector('.profileIntro h1').textContent = greeting + " I'm Tushar Kant";
    }
    updateGreeting();

    // Form validation for feedback submission
    document.querySelector(".submitBtn").addEventListener("click", function (event) {
        event.preventDefault();
        const name = document.querySelector("input[name='userName']").value;
        const email = document.querySelector("input[name='emaill']").value;
        const feedback = document.querySelector("textarea[name='Feedback']").value;

        if (!name || !email || !feedback) {
            alert("Please fill in all fields before submitting.");
            return;
        }
        alert("Thank you for your feedback, " + name + "!");
    });

    // Toggle project cards animation on hover
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.classList.add('active');
        });
        card.addEventListener('mouseleave', function () {
            this.classList.remove('active');
        });
    });
});
