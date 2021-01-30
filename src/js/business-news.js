export function getBusinessNews(){
    const businessUrl = 'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=3ab8892677804ed0bfdd40ef9adae2a0';

    fetch(businessUrl).then((res) => {
        return res.json()
    }).then((data) => {
        const businessHeadings = document.querySelectorAll('.business-heading');
        const businessImages = document.querySelectorAll('.business-image');
        const businessDates = document.querySelectorAll('.business-date');
        console.log(data);
        for(let i = 0; i < businessHeadings.length; i++){
        businessHeadings[i].innerHTML = data.articles[i].title;
        }
        for(let i = 0; i < businessImages.length; i++){
        businessImages[i].src = data.articles[i].urlToImage;
        }
        for(let i = 0; i < businessDates.length; i++){
        businessDates[i].innerHTML = data.articles[i].publishedAt;
        }
    })
}
