// Put your application javascript here

// Dropdown Menu Handler
document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const dropdownId = this.dataset.dropdown;
      const dropdown = document.getElementById(dropdownId);
      const content = dropdown.querySelector('.dropdown-content');
      
      // Toggle visibility
      content.classList.toggle('hidden');
    });
  });
  
  // Close dropdown when clicking away
  document.addEventListener('click', function(e) {
    dropdownToggles.forEach(toggle => {
      const dropdownId = toggle.dataset.dropdown;
      const dropdown = document.getElementById(dropdownId);
      const content = dropdown.querySelector('.dropdown-content');
      
      if (!dropdown.contains(e.target)) {
        content.classList.add('hidden');
      }
    });
  });
});
