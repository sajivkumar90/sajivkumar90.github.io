// LinkedIn Profile Connection Implementation
// This script adds enhanced LinkedIn integration to the personal website

// LinkedIn Share Button Functionality
function createLinkedInShareButton() {
  // Create a LinkedIn share button that allows visitors to share the profile
  const shareScript = document.createElement('script');
  shareScript.src = 'https://platform.linkedin.com/in.js';
  shareScript.type = 'text/javascript';
  document.head.appendChild(shareScript);
  
  // Add LinkedIn share button to appropriate sections
  const contactSection = document.querySelector('#contact .contact-info');
  if (contactSection) {
    const shareButtonContainer = document.createElement('div');
    shareButtonContainer.className = 'linkedin-share';
    shareButtonContainer.innerHTML = `
      <h3>Share My Profile</h3>
      <script type="IN/Share" data-url="https://www.linkedin.com/in/sajivkumar-menon"></script>
    `;
    contactSection.appendChild(shareButtonContainer);
  }
}

// LinkedIn Profile Badge Integration
function addLinkedInProfileBadge() {
  // Add LinkedIn profile badge script
  const badgeScript = document.createElement('script');
  badgeScript.src = 'https://platform.linkedin.com/badges/js/profile.js';
  badgeScript.type = 'text/javascript';
  badgeScript.async = true;
  badgeScript.defer = true;
  document.head.appendChild(badgeScript);
  
  // Create a container for the LinkedIn badge in the about section
  const aboutSection = document.querySelector('#about .about-text');
  if (aboutSection) {
    const badgeContainer = document.createElement('div');
    badgeContainer.className = 'linkedin-badge-container';
    badgeContainer.innerHTML = `
      <div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" 
           data-type="horizontal" data-theme="light" data-vanity="sajivkumar-menon">
        <a class="LI-simple-link" href="https://www.linkedin.com/in/sajivkumar-menon">
          View Sajiv Kumar Menon's LinkedIn Profile
        </a>
      </div>
    `;
    aboutSection.appendChild(badgeContainer);
  }
}

// LinkedIn "Connect With Me" Button
function enhanceLinkedInConnectButton() {
  // Enhance the existing LinkedIn connect button with tracking
  const linkedInLinks = document.querySelectorAll('a[href*="linkedin.com"]');
  linkedInLinks.forEach(link => {
    // Add tracking class
    link.classList.add('linkedin-connect-tracked');
    
    // Add click event for analytics (in a real implementation)
    link.addEventListener('click', function(e) {
      console.log('LinkedIn profile connection clicked');
      // In a real implementation, you would track this event
      // gtag('event', 'click', {'event_category': 'LinkedIn', 'event_label': 'Profile Connection'});
    });
    
    // Update text and styling for better visibility
    if (link.textContent.includes('Connect')) {
      link.innerHTML = `<i class="fab fa-linkedin"></i> Connect on LinkedIn`;
      link.classList.add('linkedin-enhanced-button');
    }
  });
  
  // Add custom styling for the enhanced LinkedIn buttons
  const style = document.createElement('style');
  style.textContent = `
    .linkedin-enhanced-button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background-color: #0077b5;
      color: white !important;
      padding: 10px 15px;
      border-radius: 5px;
      transition: all 0.3s ease;
    }
    
    .linkedin-enhanced-button:hover {
      background-color: #005e93;
      transform: translateY(-2px);
    }
    
    .linkedin-badge-container {
      margin-top: 20px;
    }
    
    .linkedin-share {
      text-align: center;
      margin-top: 20px;
    }
  `;
  document.head.appendChild(style);
}

// Initialize LinkedIn integrations when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add a small delay to ensure the main script has run first
  setTimeout(() => {
    createLinkedInShareButton();
    addLinkedInProfileBadge();
    enhanceLinkedInConnectButton();
    
    console.log('LinkedIn profile connection features implemented');
  }, 1000);
});
