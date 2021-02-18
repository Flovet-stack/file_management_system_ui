// CREATING THE SEARCH BAR
const searchInput = document.getElementById('search-field');
const searchForm = document.querySelector('.search');

searchInput.addEventListener('focusin', () => {
    searchForm.classList.add('expand');
});
searchInput.addEventListener('focusout', () => {
    searchForm.classList.remove('expand');
});