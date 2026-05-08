// PASTE THIS AT THE VERY TOP OF script.js
document.addEventListener('DOMContentLoaded', function() {
    // Welcome pop-up message (only on home page)
    if (window.location.pathname.includes("index.html") || window.location.pathname === "/" || window.location.pathname.endsWith("/")) {
        setTimeout(function() {
            alert("🎓 Welcome to the NWU Student Survival Guide!");
        }, 100);
    }
    
    // Initialize back to top button
    let topButton = document.getElementById("topBtn");
    
    if (topButton) {
        topButton.style.display = "none";
        
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                topButton.style.display = "block";
            } else {
                topButton.style.display = "none";
            }
        });
    }
});

// THEN YOUR EXISTING CODE BELOW...// ==========================================
// WAIT FOR DOM TO FULLY LOAD
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Welcome pop-up message
    setTimeout(function() {
        alert("🎓 Welcome to the NWU Student Survival Guide!");
    }, 100);
    
    // Initialize back to top button
    let topButton = document.getElementById("topBtn");
    
    // Make sure button exists
    if (topButton) {
        // Initially hide the button
        topButton.style.display = "none";
        
        // Scroll event listener for back to top button
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                topButton.style.display = "block";
            } else {
                topButton.style.display = "none";
            }
        });
    }
});

// ==========================================
// SEARCH FUNCTIONALITY
// ==========================================
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function() {
        let filter = searchInput.value.toLowerCase();
        let items = document.querySelectorAll("#resourceList li");
        
        items.forEach(function(item) {
            let text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });
}

// ==========================================
// TOGGLE EMERGENCY CONTACTS TABLE
// ==========================================
function toggleContacts() {
    let table = document.getElementById("contactTable");
    
    if (table) {
        if (table.style.display === "none") {
            table.style.display = "table";
        } else {
            table.style.display = "none";
        }
    }
}

// ==========================================
// CONTACT FORM VALIDATION
// ==========================================
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let feedback = document.getElementById("formMessage");
        
        // Email validation regex
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (name === "" || email === "" || message === "") {
            feedback.innerHTML = "❌ Please fill in all fields.";
            feedback.style.color = "red";
            feedback.style.fontWeight = "bold";
        } else if (!emailPattern.test(email)) {
            feedback.innerHTML = "❌ Please enter a valid email address.";
            feedback.style.color = "red";
            feedback.style.fontWeight = "bold";
        } else {
            feedback.innerHTML = "✅ Form submitted successfully! Thank you, " + name + ".";
            feedback.style.color = "green";
            feedback.style.fontWeight = "bold";
            
            // Clear form after successful submission
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        }
        
        // Auto-hide message after 5 seconds
        setTimeout(function() {
            feedback.innerHTML = "";
        }, 5000);
    });
}

// ==========================================
// DARK MODE TOGGLE
// ==========================================
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    
    // Save preference to localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

// ==========================================
// BACK TO TOP FUNCTION - FIXED
// ==========================================
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ==========================================
// LOAD DARK MODE PREFERENCE
// ==========================================
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// ==========================================
// ADD KEYBOARD SHORTCUT (Press 'D' for Dark Mode)
// ==========================================
document.addEventListener("keydown", function(event) {
    if (event.key === "d" || event.key === "D") {
        toggleDarkMode();
    }
});

// ==========================================
// CONSOLE LOG FOR DEVELOPER
// ==========================================
console.log("✅ NWU Student Survival Guide - All features loaded successfully!");
console.log("💡 Tip: Press 'D' key to toggle Dark Mode!");
console.log("⬆ Scroll down to see the Back to Top button appear!");