// Function to load pages dynamically with fade-in effect
function loadPage(page, title) {
    fetch(page)
      .then(response => response.text())
      .then(data => {
        let content = document.getElementById('content');
  
        // Apply fade-out effect
        content.style.opacity = 0;
  
        setTimeout(() => {
          content.innerHTML = data;
          document.title = title + " - Ankit Dash";
  
          // Apply fade-in effect
          content.style.opacity = 1;
  
          // Update URL without reloading
          history.pushState({ page: page, title: title }, title, page);
  
          // Highlight active link
          highlightActiveLink(page);
        }, 300); // Wait for fade-out before changing content
      })
      .catch(error => console.error("Error loading page:", error));
  }
  
  // Handle browser back/forward navigation
  window.onpopstate = function (event) {
    if (event.state) {
      document.getElementById('content').innerHTML = "";
      loadPage(event.state.page, event.state.title);
    }
  };
  
  // Auto-load content if URL is accessed directly
  document.addEventListener("DOMContentLoaded", function () {
    let path = window.location.pathname.split("/").pop();
    if (path === "projects.html" || path === "about.html" || path === "contact.html") {
      loadPage(path, document.title);
    }
  });
  
  // Function to highlight active navigation link
  function highlightActiveLink(page) {
    let links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("onclick").includes(page)) {
        link.classList.add("active");
      }
    });
  }
  