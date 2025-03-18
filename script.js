document.addEventListener("DOMContentLoaded", function () {
    // Select login and order buttons safely
    const loginBtn = document.querySelector(".login form button");
    const orderBtn = document.querySelector(".order form button");
    const employeeBtn = document.getElementById("empLogin");
    const customerBtn = document.getElementById("customerLogin");
    const adminBtn = document.getElementById("adminLogin");
    const dashboardBtn = document.getElementById("dashboardBtn");

    /* Employee login redirects to employee login page */
    if (employeeBtn) {
        employeeBtn.addEventListener("click", function () {
            window.location.href = "login.html";
        });
    }

    /* Customer login redirects to customer login page */
    if (customerBtn) {
        customerBtn.addEventListener("click", function () {
            window.location.href = "customer_login.html";
        });
    }

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
        });
    }

    // Validate username/email format
    const usernameInput = document.getElementById("username") || document.getElementById("username-or-email");
    if (usernameInput) {
        usernameInput.addEventListener("keypress", function (event) {
            // Prevent special characters except valid email characters
            if (!/[a-zA-Z0-9@._-]/.test(event.key)) {
                event.preventDefault();
            }
        });
    }

    // Validate password format
    function isPasswordValid(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    }

    if (loginBtn) {
        loginBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevents default form submission

            const username = document.getElementById("username").value.trim();
            const passwordInput = document.getElementById("password");

            if (!username || !passwordInput) {
                alert("Please enter both username and password.");
                return;
            }

            const password = passwordInput.value.trim();

            if (!isPasswordValid(password)) {
                alert("Your password must have at least 8 characters, including uppercase, lowercase, numbers, and special characters.");
                return;
            }

            // Check if the login is for an employee or customer
            if (username.includes("admin")) {
                alert("Welcome Admin!");
                sessionStorage.setItem("userType", "admin"); // Store session info
                window.location.href = "admin_dashboard.html"; // Redirect to admin dashboard
            } else {
                alert("Welcome Customer!");
                sessionStorage.setItem("userType", "customer"); // Store session info
                window.location.href = "customer_dashboard.html"; // Redirect to customer dashboard
            }
        });  // **← This was missing before**
    }

    // Prevent non-numeric characters in phone number
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
        phoneInput.addEventListener("keypress", function (event) {
            if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
            }
        });
    }

    // Handle order submission
    if (orderBtn) {
        orderBtn.addEventListener("click", function (event) {
            const customerNameInput = document.getElementById("customer-name");
            const phoneInput = document.getElementById("phone");
            if (!customerNameInput || !phoneInput) return;

            let customerName = customerNameInput.value.trim();
            let phone = phoneInput.value.trim();

            // Validate customer name (letters & spaces only)
            if (!/^[a-zA-Z\s]+$/.test(customerName)) {
                alert("Customer name should contain only letters and spaces.");
                event.preventDefault();
                return;
            }

            // Validate phone number (must be exactly 10 digits)
            if (!/^\d{10}$/.test(phone)) {
                alert("Phone number must be exactly 10 digits.");
                event.preventDefault();
                return;
            }

            // If validations pass, allow form submission
            alert("Order placed successfully!");
        });
    }

    // Restrict dashboard access if not logged in
    if (window.location.pathname.includes("customer_dashboard.html")) {
        const userType = sessionStorage.getItem("userType");
        if (userType !== "customer") {
            alert("Access denied! Please log in as a customer.");
            window.location.href = "customer_login.html"; // Redirect to login
        }
    }
});  // **← This closes the `DOMContentLoaded` event listener properly**
