var searchInputs = document.getElementById('search-inputs');
var searchIcon = document.getElementById('search-icon');

searchIcon.addEventListener('click', showSearchBar);

export function showSearchBar(e){
    e.preventDefault();
    if(searchInputs.style.display === 'block'){
        searchInputs.style.display = 'none';
    } else {
        searchInputs.style.display = 'block';
    }
}

