/*"title": "Бійці ССО знищили танк і БМП окупантів у «сірій зоні» — відео - НВ",
"description": "У Донецькій області бійці Сил спецоперацій знищили танк і БМП російських окупантів у «сірій зоні».",
"url": "https://nv.ua/ukr/ukraine/events/yak-biyci-sso-znishchili-tank-i-bmp-okupantiv-z-yavilosya-video-50320017.html",
"urlToImage": "https://static.nv.ua/shared/system/Article/posters/002/673/429/original/eea5fc5ab3662dba6d2374d03ae636ee.jpg?q=85&stamp=20230425090341"*/
import { NewsCard, NewsLink } from "./NewsItem.styled";

export const NewsItem = ({ title, description, imageUrl, itemUrl }) => {
  return (
    <NewsCard>
      <NewsLink href={itemUrl} target="_blank" rel="noreferrer noopener">
        <p>{title}</p>
        <img src={imageUrl} alt="News" width="330px" />
        <p>{description}</p>
      </NewsLink>
    </NewsCard>
  );
};
