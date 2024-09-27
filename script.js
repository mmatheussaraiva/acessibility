function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    document.body.scrollTop = 0; // For Chrome, Firefox, IE and Opera   
    document.documentElement.scrollTop = 0; // For Safari
    history.pushState({}, '', '#' + id);
    // Prevent default behavior of the link
    return false;
}