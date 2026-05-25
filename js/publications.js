// Load publications from JSON and display them
document.addEventListener('DOMContentLoaded', function() {
  const publicationListContainer = document.getElementById('publication-list-container');
  
  if (!publicationListContainer) {
    console.warn('Publication list container not found');
    return;
  }

  // Fetch the publications JSON
  fetch('publications.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load publications');
      }
      return response.json();
    })
    .then(data => {
      // Sort publications by year (newest first)
      const publications = data.publications.sort((a, b) => b.year - a.year);
      
      // Create HTML for each publication
      let html = '';
      publications.forEach(pub => {
        html += `
          <article>
            <h2>${pub.year}</h2>
            <p><strong>${pub.authors}</strong></p>
            <p><strong>Title:</strong> ${pub.title}</p>
            <p><strong>Journal:</strong> ${pub.journal}, ${pub.volume}${pub.issue ? `(${pub.issue})` : ''}, ${pub.pages}</p>
            <p style="margin-top: 1rem; color: var(--gray-med);">Citations: ${pub.citations}</p>
            <p style="margin-top: 0.5rem;">
              <a href="https://doi.org/${pub.doi}" target="_blank">DOI</a> · 
              <a href="${pub.scholar_link}" target="_blank">Google Scholar</a>
            </p>
          </article>
        `;
      });
      
      publicationListContainer.innerHTML = html;
    })
    .catch(error => {
      console.error('Error loading publications:', error);
      publicationListContainer.innerHTML = '<p>Error loading publications. Please try again later.</p>';
    });
});
