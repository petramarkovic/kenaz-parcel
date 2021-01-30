export function getEditorialNews(){
    const editorialUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3ab8892677804ed0bfdd40ef9adae2a0';

    fetch(editorialUrl).then((res) => {
        return res.json()
    }).then((data) => {
        const editorialsHeadings = document.querySelectorAll('.editorial-heading');
        const editorialsImages = document.querySelectorAll('.editorial-image');
        const editorialsDates = document.querySelectorAll('.editorial-date');
        for(let i = 0; i < editorialsHeadings.length; i++){
        editorialsHeadings[i].innerHTML = data.articles[i].title;
        }
         for(let i = 0; i < editorialsImages.length; i++){
        editorialsImages[i].src = data.articles[i].urlToImage;
        }
        for(let i = 0; i < editorialsDates.length; i++){
        editorialsDates[i].innerHTML = data.articles[i].publishedAt;
        }
    })
}
