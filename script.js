document.addEventListener("DOMContentLoaded", function () {

    // Select login and navigation buttons
    const employeeBtn = document.getElementById("empLogin");
    const customerBtn = document.getElementById("customerLogin");
    const adminBtn = document.getElementById("adminLogin");

    const employeeLoginForm = document.getElementById("employeeLoginForm");
    const adminLoginForm = document.getElementById("adminLoginForm");
    const customerLoginForm = document.getElementById("customerLoginForm");
    const loginButtons = document.querySelectorAll(".loginButton");
    const passwordToggleIcon = document.getElementById("togglePassword");

    // Redirect index page buttons to login pages
    if (employeeBtn) {
        employeeBtn.addEventListener("click", function () {
            window.location.href = "employeeLogin.html";
        });
    }

    if (customerBtn) {
        customerBtn.addEventListener("click", function () {
            window.location.href = "customer_login.html";
        });
    }

    if (adminBtn) {
        adminBtn.addEventListener("click", function () {
            window.location.href = "admin_login.html";
        });
    }

    function togglePassword() {
        let password = document.getElementById("password");
        let icon = document.getElementById("togglePassword");

        if (password.type === "password") {
            password.type = "text";
            icon.classList.remove("bxs-lock-alt");  // Locked icon
            icon.classList.add("bxs-lock-open-alt"); // Unlocked icon
        } else {
            password.type = "password";
            icon.classList.remove("bxs-lock-open-alt");
            icon.classList.add("bxs-lock-alt");
        }
    }


    if (passwordToggleIcon) {
        passwordToggleIcon.addEventListener("click", togglePassword);
    }

    // Password validation
    function validatePassword(event) {
        const passwordInput = document.getElementById("password");
        const password = passwordInput.value.trim();

        if (password === "") { 
            alert("Please enter your password");
            event.preventDefault();
            return false;
        } 
        
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long and include:\n• At least one uppercase letter\n• At least one lowercase letter\n• At least one number\n• At least one special character (@$!%*?&)");
            event.preventDefault();
            return false;
        } 

        return true; // ✅ Password is valid
    }

    // Simulate login process
    function fakeLogin(event, userType, dashboardPage) {
        event.preventDefault();
        sessionStorage.setItem("role", userType);
        window.location.href = dashboardPage;
    }

    // Employee login
    if (employeeLoginForm) {
        employeeLoginForm.addEventListener("submit", function (event) {
            if (validatePassword(event)) {
                fakeLogin(event, "employee", "emp_dashboard.html");
            }
        });
    }

    // Admin login
    if (adminLoginForm) {
        adminLoginForm.addEventListener("submit", function (event) {
            if (validatePassword(event)) {
                fakeLogin(event, "admin", "admin_dashboard.html");
            }
        });
    }

    // Customer login
    if (customerLoginForm) {
        customerLoginForm.addEventListener("submit", function (event) {
            if (validatePassword(event)) {
                fakeLogin(event, "customer", "customer_dashboard.html");
            }
        });
    }

    // Attach event listeners to all login buttons
    loginButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            if (validatePassword(event)) {
                fakeLogin(event, "role", dashboardPage);
            }
        });
    });

    //sidebar menu toggle
    const menuButton = document.getElementById("menu");
    const closeButton = document.getElementById("close-btn");
    const container = document.querySelector(".container");

    if (menuButton && closeButton && container) {
        menuButton.addEventListener("click", function () {
            container.classList.add("show");
            container.classList.remove("hide");
        });

        closeButton.addEventListener("click", function () {
            container.classList.remove("show");
            container.classList.add("hide");
        });
    }
    /*dynamic content loading for the sidebar links
    const links = document.querySelectorAll(". sidebar a");
    const contentDiv = document.getElementById("content");

    
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent full-page reload

            const page = this.getAttribute("href"); // Get page URL

            fetch(page)
                .then(response => response.text())
                .then(data => {
                    contentDiv.innerHTML = data; // Load new content into the div
                    history.pushState(null, "", page); // Update browser URL (optional)
                })
                .catch(error => console.error("Error loading page:", error));
        });
    });

    // Handle browser back/forward button navigation
    window.addEventListener("popstate", function () {
        const currentPage = window.location.pathname.split("/").pop();
        if (currentPage) {
            fetch(currentPage)
                .then(response => response.text())
                .then(data => {
                    contentDiv.innerHTML = data;
                });
        }
    });*/
    const laundryLink = document.querySelector('a[href="laundry.html"]');
    const servicesSection = document.getElementById('servicesSection');
    const closeService = document.getElementById('closeService');
    const overlay = document.getElementById('overlay');
    
    // Prevent default navigation for laundry link
    laundryLink.addEventListener('click', function(e) {
        e.preventDefault();
        servicesSection.style.display = 'block';
        overlay.style.display = 'block';
    });
    
    // Close service section when X is clicked
    closeService.addEventListener('click', function() {
        servicesSection.style.display = 'none';
        overlay.style.display = 'none';
    });
    
    // Close service section when overlay is clicked
    overlay.addEventListener('click', function() {
        servicesSection.style.display = 'none';
        overlay.style.display = 'none';
    });

    const settingsPage = document.querySelector(".settings-page");
    const closeSettings = document.getElementById("closeSettings");
    const settingsLink = document.querySelector('a[href="settings.html"]')
     // Prevent default navigation for laundry link
     if (settingsPage) {
        settingsPage.style.display = 'none';
        console.log("Initial settings display:", settingsPage.style.display);
    }
    
    if (settingsLink && settingsPage && closeSettings) {
        settingsLink.addEventListener('click', function(e) {
            e.preventDefault();
            settingsPage.style.display = 'block';
            overlay.style.display = 'block';
        });
        
        closeSettings.addEventListener('click', function() {
            settingsPage.style.display = 'none';
            overlay.style.display = 'none';
        });
        
        overlay.addEventListener('click', function() {
            settingsPage.style.display = 'none';
            overlay.style.display = 'none';
        });
    }
});
