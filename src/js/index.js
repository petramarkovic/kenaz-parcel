import {showSearchBar} from './search';
import {dropMenu} from './dropdown-menu';
import { reset, startSlide, slideLeft, slideRight } from './slider';
import { resetSlider, startSlides, slideLeftNews, slideRightNews } from './news-slider';
import {resetEditorialSlider, startEditorialSlides, slideLeftEditorialNews, slideRightEditorialNews} from './editorial-news-slider';
import {resetLocalSlider, startLocalSlides, slideLeftLocalNews, slideRightLocalNews} from './local-news-slider';
import {startCarouselSlide, resetCarousel, slideLeftCarousel, slideRightCarousel} from './thumbnail-slider';
import {getNews} from './news';
import {getBusinessNews} from './business-news';
import {getSportNews} from './sport-news';
import {getEditorialNews} from './editorial-news';


getNews();
getBusinessNews();
getSportNews();
getEditorialNews();



