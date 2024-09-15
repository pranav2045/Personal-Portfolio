document.addEventListener('DOMContentLoaded', function() {
    // Select all the navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Loop through each link and add a click event listener
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add the active class to the clicked link
            this.classList.add('active');
        });
    });

    // Light effect following mouse movement
    document.addEventListener('mousemove', (e) => {
        const light = document.querySelector('.light');
        light.style.left = `${e.clientX}px`;
        light.style.top = `${e.clientY}px`;
    });
});
