export function getNews(){
    const generalNewsUrl = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3ab8892677804ed0bfdd40ef9adae2a0';

    fetch(generalNewsUrl).then((res) => {
        return res.json()
    }).then((data) => {
        const newsHeadings = document.querySelectorAll('.news-heading');
        const newsImages = document.querySelectorAll('.news-image');
        const newsDates = document.querySelectorAll('.news-date');
        const newsAuthor = document.querySelectorAll('.news-author');
        const newsDescription = document.querySelectorAll('.news-description');
        console.log(data);
        for(let i = 0; i < newsHeadings.length; i++){
                    newsHeadings[i].innerHTML = data.articles[i].title;
        }
        for(let i = 0; i < newsImages.length; i++){
            newsImages[i].src = data.articles[i].urlToImage;
        }
        for(let i = 0; i < newsDates.length; i++){
            newsDates[i].innerHTML = data.articles[i].publishedAt;
        }
        for(let i = 0; i < newsAuthor.length; i++){
            newsAuthor[i].innerHTML = data.articles[i].author;
        }
        for(let i = 0; i < newsDescription.length; i++){
            newsDescription[i].innerHTML = data.articles[i].content;
        }
    })
}
