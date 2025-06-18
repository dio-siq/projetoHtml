function loadDogs(size) {
    let url = 'main-page-dogs.html'; // Default to all dogs (current page)
    if (size === 'big') url = 'big-dogs.html';
    else if (size === 'medium') url = 'medium-dogs.html';
    else if (size === 'small') url = 'small-dogs.html';

    fetch(url)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const cards = doc.querySelector('#dog-cards-container')?.innerHTML || '';
            document.getElementById('dog-cards-container').innerHTML = cards;
        })
        .catch(error => console.error('Error loading dogs:', error));
}

// Load all dogs by default on page load
window.onload = function() {
    loadDogs('all');
};