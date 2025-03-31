// Theme and Font Size Management
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme and font size from localStorage or defaults
    initializeSettings();

    // Set up event listeners for theme toggles
    setupThemeToggle();

    // Set up event listeners for font size controls
    setupFontSizeControls();

    // Apply the current settings to the whole project
    applySettingsToDocument();
});

// Initialize settings from localStorage or set defaults
function initializeSettings() {
    // Theme settings
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'light'); // Default to light theme
    }

    // Font size settings
    if (!localStorage.getItem('fontSize')) {
        localStorage.setItem('fontSize', '16'); // Default to 16px
    }
}

// Set up theme toggle functionality
function setupThemeToggle() {
    const themeRadios = document.querySelectorAll('input[name="theme"]');
    
    // Set the current theme radio button
    const currentTheme = localStorage.getItem('theme');
    document.querySelector(`input[name="theme"][value="${currentTheme}"]`).checked = true;
    
    // Add event listeners to theme radio buttons
    themeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            localStorage.setItem('theme', this.value);
            applySettingsToDocument();
        });
    });
}

// Set up font size controls
function setupFontSizeControls() {
    const fontSizeInput = document.getElementById('font-size');
    const fontSizeValue = document.querySelector('.font-size-value');
    const fontDecreaseBtn = document.querySelector('.font-decrease');
    const fontIncreaseBtn = document.querySelector('.font-increase');
    
    // Set initial values
    const currentFontSize = localStorage.getItem('fontSize');
    fontSizeInput.value = currentFontSize;
    fontSizeValue.textContent = `${currentFontSize}px`;
    
    // Input event for slider
    fontSizeInput.addEventListener('input', function() {
        localStorage.setItem('fontSize', this.value);
        fontSizeValue.textContent = `${this.value}px`;
        applySettingsToDocument();
    });
    
    // Decrease button
    fontDecreaseBtn.addEventListener('click', function() {
        if (fontSizeInput.value > 12) {
            fontSizeInput.value--;
            fontSizeInput.dispatchEvent(new Event('input'));
        }
    });
    
    // Increase button
    fontIncreaseBtn.addEventListener('click', function() {
        if (fontSizeInput.value < 24) {
            fontSizeInput.value++;
            fontSizeInput.dispatchEvent(new Event('input'));
        }
    });
}

// Apply current settings to the whole document
function applySettingsToDocument() {
    // Apply theme
    const currentTheme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Apply font size
    const currentFontSize = localStorage.getItem('fontSize');
    document.documentElement.style.fontSize = `${currentFontSize}px`;
}

// Listen for settings changes from other pages
window.addEventListener('storage', function(event) {
    if (event.key === 'theme' || event.key === 'fontSize') {
        applySettingsToDocument();
    }

     // Tab switching functionality
     const tabBtns = document.querySelectorAll('.tab-btn');
     const tabPanes = document.querySelectorAll('.tab-pane');
     
     tabBtns.forEach(btn => {
         btn.addEventListener('click', () => {
             // Remove active class from all buttons and panes
             tabBtns.forEach(b => b.classList.remove('active'));
             tabPanes.forEach(p => p.classList.remove('active'));
             
             // Add active class to clicked button and corresponding pane
             btn.classList.add('active');
             const tabId = btn.getAttribute('data-tab');
             document.getElementById(tabId).classList.add('active');
         });
     });
     
     // Toggle password visibility
     const togglePasswordBtns = document.querySelectorAll('.toggle-password');
     togglePasswordBtns.forEach(btn => {
         btn.addEventListener('click', () => {
             const targetId = btn.getAttribute('data-target');
             const passwordInput = document.getElementById(targetId);
             const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
             passwordInput.setAttribute('type', type);
             btn.classList.toggle('fa-eye-slash');
         });
     });
     
     // Font size control
     const fontSizeInput = document.getElementById('font-size');
     const fontSizeValue = document.querySelector('.font-size-value');
     const fontPreview = document.querySelector('.font-size-preview p');
     
     fontSizeInput.addEventListener('input', () => {
         const size = fontSizeInput.value;
         fontSizeValue.textContent = `${size}px`;
         fontPreview.style.fontSize = `${size}px`;
     });
     
     document.querySelector('.font-decrease').addEventListener('click', () => {
         if (fontSizeInput.value > 12) {
             fontSizeInput.value--;
             fontSizeInput.dispatchEvent(new Event('input'));
         }
     });
     
     document.querySelector('.font-increase').addEventListener('click', () => {
         if (fontSizeInput.value < 24) {
             fontSizeInput.value++;
             fontSizeInput.dispatchEvent(new Event('input'));
         }
     });
     
     // Color presets
     const sidebarColorInput = document.getElementById('sidebar-color');
     const colorPresets = document.querySelectorAll('.color-preset');
     
     colorPresets.forEach(preset => {
         preset.addEventListener('click', () => {
             const color = preset.getAttribute('data-color');
             sidebarColorInput.value = color;
         });
     });
     
     // Password strength indicator (simplified for demo)
     const newPasswordInput = document.getElementById('new-password');
     newPasswordInput.addEventListener('input', () => {
         const password = newPasswordInput.value;
         const strengthBars = document.querySelectorAll('.strength-bar');
         const strengthText = document.querySelector('.strength-text');
         
         // Simple strength calculation for demo
         let strength = 0;
         if (password.length >= 8) strength++;
         if (/[A-Z]/.test(password)) strength++;
         if (/\d/.test(password)) strength++;
         if (/[^A-Za-z0-9]/.test(password)) strength++;
         
         // Update UI
         strengthBars.forEach((bar, index) => {
             bar.className = 'strength-bar';
             if (index < strength) {
                 bar.classList.add(`strength-${strength}`);
             }
         });
         
         const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong'];
         strengthText.textContent = strengthLabels[strength - 1] || 'Weak';
     });
});