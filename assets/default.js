function openNav() {
    document.getElementById("nav-close").classList.remove('hidden');
    document.getElementById("nav-links").classList.remove('hidden');
    document.getElementById("nav-open").classList.add('hidden');
}

function closeNav() {
    document.getElementById("nav-open").classList.remove('hidden');
    document.getElementById("nav-links").classList.add('hidden');
    document.getElementById("nav-close").classList.add('hidden');
}