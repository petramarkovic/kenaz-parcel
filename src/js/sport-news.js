export function getSportNews(){
    const sportUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=3ab8892677804ed0bfdd40ef9adae2a0';

    fetch(sportUrl).then((res) => {
        return res.json()
    }).then((data) => {
        const sportHeadings = document.querySelectorAll('.sport-heading');
        const sportImages = document.querySelectorAll('.sport-image');
        const sportDates = document.querySelectorAll('.sport-date');
        console.log(data);
        for(let i = 0; i < sportHeadings.length; i++){
            sportHeadings[i].innerHTML = data.articles[i].title;
        }
        for(let i = 0; i < sportImages.length; i++){
            sportImages[i].src = data.articles[i].urlToImage;
        }
        for(let i = 0; i < sportDates.length; i++){
            sportDates[i].innerHTML = data.articles[i].publishedAt;
        }
    })
}
