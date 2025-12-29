loadNavbar('navbar-placeholder', 'navbar.html');

function loadNavbar(id, url) {
    fetch(url)
        .then(res => res.ok ? res.text() : Promise.reject('Failed to load navbar'))
        .then(html => {
            const container = document.getElementById(id);
            container.innerHTML = html;

            const navbar = container.querySelector('.navbar');
            const hideBtn = container.querySelector('#navHideBtn');

            if (hideBtn && navbar) {
                hideBtn.addEventListener('click', () => {
                    navbar.classList.toggle('collapsed');
                    hideBtn.textContent = navbar.classList.contains('collapsed')
                        ? '▶'
                        : '◀◀◀';
                });
            }
        })
        .catch(err => console.error(err));
}