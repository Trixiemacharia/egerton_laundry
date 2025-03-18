document.addEventListener("DOMContentLoaded", function () {
    // Select login and navigation buttons
    const employeeBtn = document.getElementById("empLogin");
    const customerBtn = document.getElementById("customerLogin");
    const adminBtn = document.getElementById("adminLogin");
<<<<<<< HEAD
    const dashboardBtn = document.getElementById("dashboardBtn");
=======
>>>>>>> f3977b42f30a64d19dc1827f71414609a5cb7929

    const loginForm = document.getElementById("loginForm");
    const employeeLoginForm = document.getElementById("employeeLoginForm");
    const adminLoginForm = document.getElementById("adminLoginForm");
    const customerLoginForm = document.getElementById("customerLoginForm");

    // Redirect index page buttons to login pages
    if (employeeBtn) {
        employeeBtn.addEventListener("click", function () {
            window.location.href = "login.html";
        });
    }

    if (customerBtn) {
        customerBtn.addEventListener("click", function () {
            window.location.href = "customer_login.html";
        });
    }

<<<<<<< HEAD
    /*Admin login redirects to admin login page*/
    if (adminBtn) {
        adminBtn.addEventListener("click", function () {
            window.location.href = "admin_login.html";
        });
    }

    // Dashboard button redirects to customer's dashboard
    if (dashboardBtn) {
        dashboardBtn.addEventListener("click", function () {
            window.location.href = "customer_dashboard.html";
=======
    if (adminBtn) {
        adminBtn.addEventListener("click", function () {
            window.location.href = "admin_login.html";
>>>>>>> f3977b42f30a64d19dc1827f71414609a5cb7929
        });
    }

    // Simulate login process
    function fakeLogin(event, userType, dashboardPage) {
        event.preventDefault();
        sessionStorage.setItem("role", userType);
        window.location.href = dashboardPage;
    }

    // General login form submission
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            fakeLogin(event, "customer", "customer_dashboard.html");
        });
    }

    // Employee login
    if (employeeLoginForm) {
        employeeLoginForm.addEventListener("submit", function (event) {
            fakeLogin(event, "employee", "emp_dashboard.html");
        });
    }

    // Admin login
    if (adminLoginForm) {
        adminLoginForm.addEventListener("submit", function (event) {
            fakeLogin(event, "admin", "admin_dashboard.html");
        });
    }

    // Customer login
    if (customerLoginForm) {
        customerLoginForm.addEventListener("submit", function (event) {
            fakeLogin(event, "customer", "customer_dashboard.html");
        });
    }
});
