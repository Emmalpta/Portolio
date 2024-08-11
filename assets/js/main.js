// JavaScript pour contrôler la pop-up
document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('popup');
    var popupBtn = document.getElementById('popupBtn');
    var closeBtn = document.querySelector('.close-btn');

    // Ouvrir la pop-up
    popupBtn.onclick = function() {
        popup.style.display = 'flex';
    };

    // Fermer la pop-up en cliquant sur le bouton de fermeture
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    };

    // Fermer la pop-up en cliquant à l'extérieur de la zone de contenu
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    };
});