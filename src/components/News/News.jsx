import axios from 'axios';
import { useEffect, useState } from 'react';

export default function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function getNews() {
      const newsResponse = await axios.get(
        'https://newsapi.org/v2/everything?q=Weather AND India&from=2024-05-21&to=2024-05-22&sortBy=popularity&apiKey=2b59bf804b8a48f5b490c24ce6f904ac'
      );
      setNews(newsResponse.data.articles);
    }
    getNews();
  }, []);

  return (
    <div className='max-w-[1100px] mx-auto p-5 flex flex-col gap-3 text-[#ffffffdd]'>
    <h2 className='text-4xl font-bold mb-3 '>Latest news related to the Weather in this region:</h2>
      {news
        .filter((item) => item.urlToImage != null && (item.description.toLowerCase().includes('rain') || item.description.toLowerCase().includes('heat')))
        .map((newsItem) => (
          <a href={newsItem.url} target='_blank' className=" flex gap-8 rounded-md bg-[#ffffff2b] p-3 items-center xsm:flex-row flex-col">
            <div className="news_image_box xsm:min-w-[280px] xsm:max-w-[280px] max-h-[200px]  overflow-hidden rounded-l-md ">
              <img className="w-full h-full" src={newsItem.urlToImage} />
            </div>
            <div className="news_text_box flex flex-col">
              <p className='mb-2 text-[#ffffff81]'>Published at: {newsItem.publishedAt.substring(0,10)}</p>
              <div >
                <h3 className='text-3xl font-bold mb-3'>{newsItem.title}</h3>
                <p>{newsItem.description}</p>
              </div>
            </div>
          </a>
        ))}
    </div>
  );
}
