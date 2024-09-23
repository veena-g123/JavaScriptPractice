function loadLinks(language) {
    const linkContainer = document.getElementById('linkContainer');
    linkContainer.innerHTML = '';  // Clear existing links
    
    fetch('links.json')  // Fetching from the external JSON file
      .then(response => response.json())
      .then(data => {
          const languageLinks = data[language];
          languageLinks.forEach(url => {
              const anchor = document.createElement('a');
              anchor.href = url;
              anchor.textContent = url;  // Display the URL as the text
              anchor.target = '_blank';  // Open link in a new tab
              linkContainer.appendChild(anchor);
          });
      })
      .catch(error => {
          console.error('Error loading the links:', error);
          linkContainer.textContent = 'Failed to load links.';
      });
}
