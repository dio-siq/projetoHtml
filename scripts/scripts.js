 // Mobile dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.parentElement;
                dropdown.classList.toggle('active');
            }
        });
    });
});

function showModal(button) {
    const modal = document.getElementById('modal-sobre');
    const modalNome = document.getElementById('modal-nome');
    const modalSobreTexto = document.getElementById('modal-sobre-texto');
    const card = button.closest('.card');
    const nome = card.querySelector('h3').textContent;
    const sobreTexto = card.querySelector('.sobre-texto').dataset.sobre;

    modalNome.textContent = nome;
    modalSobreTexto.textContent = sobreTexto;
    modal.classList.add('mostrar');
    button.setAttribute('aria-expanded', 'true');
}

function closeModal() {
    const modal = document.getElementById('modal-sobre');
    modal.classList.remove('mostrar');
    const verMaisButtons = document.querySelectorAll('.ver-mais');
    verMaisButtons.forEach(button => button.setAttribute('aria-expanded', 'false'));
}

document.getElementById('modal-sobre').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

