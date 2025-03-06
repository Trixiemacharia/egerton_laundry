document.addEventListener("DOMContentLoaded", function () {
    // Select login and order buttons safely
    const loginBtn = document.querySelector(".login form button");
    const orderBtn = document.querySelector(".order form button");
    const employeeBtn = document.getElementById("empLogin");
    const dashboardBtn = document.getElementById("dashboardBtn");

    if (employeeBtn) {
        employeeBtn.addEventListener("click", function () {
            window.location.href = "login.html";
        });
    }
    if(dashboardBtn){
        dashboardBtn.addEventListener("click", function () {
            window.location.href = "customer_dashboard.html";
        })
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
            const passwordInput = document.getElementById("password");
            if (!passwordInput) return;

            if (!isPasswordValid(passwordInput.value)) {
                alert("Your password must have at least 8 characters, including uppercase, lowercase, numbers, and special characters.");
                event.preventDefault();
            } else {
                window.location.href = "dashboard.html";
            }
        });
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
});
