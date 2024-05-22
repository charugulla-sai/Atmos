import axios from 'axios';
import { useEffect, useState } from 'react';

export default function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    // async function getNews() {
    //   const newsResponse = await axios.get(
    //     'https://newsapi.org/v2/everything?q=Weather AND India&from=2024-05-21&to=2024-05-22&sortBy=popularity&apiKey=2b59bf804b8a48f5b490c24ce6f904ac'
    //   );
    //   setNews(newsResponse.data.articles);
    // }
    // getNews();
    setNews([
      {
        source: {
          id: null,
          name: 'Phys.Org',
        },
        author: 'Science X',
        title: 'India shuts schools as temperatures soar',
        description:
          'Indian authorities in the capital have ordered schools shut early for the summer holiday, after temperatures hit 47.4 degrees Celsius (117 degrees Fahrenheit) with Delhi gripped by a "severe heat wave".',
        url: 'https://phys.org/news/2024-05-india-schools-temperatures-soar.html',
        urlToImage:
          'https://scx2.b-cdn.net/gfx/news/2024/a-volunteer-distribute.jpg',
        publishedAt: '2024-05-21T07:37:48Z',
        content:
          'Indian authorities in the capital have ordered schools shut early for the summer holiday, after temperatures hit 47.4 degrees Celsius (117 degrees Fahrenheit) with Delhi gripped by a "severe heat wav… [+2188 chars]',
      },
      {
        source: {
          id: null,
          name: 'CNA',
        },
        author: null,
        title: 'India shuts schools as temperatures soar',
        description:
          'NEW DELHI: Indian authorities in the capital have ordered schools shut early for the summer holiday after temperatures hit 47.4 degrees Celsius with Delhi gripped by a "severe heatwave". Delhi city officials asked schools to shut with "immediate effect" due t…',
        url: 'https://www.channelnewsasia.com/asia/india-new-delhi-shuts-school-early-summer-holiday-temperatures-soar-4351506',
        urlToImage:
          'https://onecms-res.cloudinary.com/image/upload/s--8CsFEFnk--/fl_relative,g_south_east,l_mediacorp:cna:watermark:2023-11:afp_watermark_14112023,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/90c5441dffd1672a868904cbee6f98b848fe0bdc.jpg?itok=qtbL2s0r',
        publishedAt: '2024-05-21T07:08:03Z',
        content:
          'NEW DELHI: Indian authorities in the capital have ordered schools shut early for the summer holiday after temperatures hit 47.4 degrees Celsius with Delhi gripped by a "severe heatwave".\r\nDelhi city … [+1002 chars]',
      },
      {
        source: {
          id: 'time',
          name: 'Time',
        },
        author: 'Chad de Guzman',
        title: 'As India Votes, Modi’s Party Misleads Online',
        description:
          'A social media campaign poster touting the BJP’s expansion of transit services features a stock image of Singapore’s metro system.',
        url: 'https://time.com/6980491/india-election-social-media-misinformation-disinformation-modi-bjp-singapore-poster/',
        urlToImage:
          'https://api.time.com/wp-content/uploads/2024/05/Modi.jpg?quality=85&w=839&h=497&crop=1',
        publishedAt: '2024-05-21T07:55:00Z',
        content:
          'Amid Indias weekslong election, the ruling Bharatiya Janata Party (BJP) of Prime Minister Narendra Modi wants voters to know that its about action, not talk.\r\nCongress will say, BJP will do, a poster… [+2515 chars]',
      },
      {
        source: {
          id: null,
          name: 'Globalsecurity.org',
        },
        author: 'John Pike',
        title: 'Iran mourns President Raisi after tragic helicopter crash',
        description:
          "Iranian President Ebrahim Raisi was confirmed dead on Monday after his helicopter crashed in the country's mountainous northwestern region on Sunday.",
        url: 'https://www.globalsecurity.org/wmd/library/news/iran/2024/iran-240521-pdo01.htm',
        urlToImage: null,
        publishedAt: '2024-05-21T07:55:11Z',
        content:
          "People's Daily Online\r\n(Xinhua) 08:13, May 21, 2024\r\nTEHRAN, May 20 (Xinhua) -- Iranian President Ebrahim Raisi was confirmed dead on Monday after his helicopter crashed in the country's mountainous … [+5501 chars]",
      },
      {
        source: {
          id: null,
          name: 'Globalsecurity.org',
        },
        author: 'John Pike',
        title:
          "'Saddened and shocked': World leaders extend condolences after President Raeisi's martyrdom",
        description:
          "World leaders have extended condolences to the Iranian government and nation over the martyrdom of President Ebrahim Raeisi in a helicopter crash in the country's northwest.",
        url: 'https://www.globalsecurity.org/wmd/library/news/iran/2024/iran-240520-presstv08.htm',
        urlToImage: null,
        publishedAt: '2024-05-21T07:55:11Z',
        content:
          'Iran Press TV\r\nMonday, 20 May 2024 6:51 AM\r\nWorld leaders have extended condolences to the Iranian government and nation over the martyrdom of President Ebrahim Raeisi in a helicopter crash in the co… [+9422 chars]',
      },
      {
        source: {
          id: null,
          name: 'Tistory.com',
        },
        author: 'T.B',
        title: '윤석열, 김건희 "사살이다."',
        description:
          'Scripture says, “The prayers of a righteous man availeth much.”A righteous man.A good man.A Morehouse man. pic.twitter.com/qXpVU2octX— President Biden (@POTUS) May 20, 2024  \'짜증\'나게 뭘 어쩌자는 건지? 그냥 "쏴 죽여야" 끝나는 \'천성\'이 셀 수도 없이 드러났죠. "P융신 푼수대기가 낄 자리가 아니다"라고 말하였습니다. …',
        url: 'https://ryueyes11.tistory.com/18115',
        urlToImage:
          'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1SVfy%2FbtsHwafnirE%2FeWFNUIYfP2XgSH7iPpra7k%2Fimg.jpg',
        publishedAt: '2024-05-21T02:56:30Z',
        content:
          'Scripture says, “The prayers of a righteous man availeth much.”\r\nA righteous man.A good man.A Morehouse man. pic.twitter.com/qXpVU2octX\r\n— President Biden (@POTUS) May 20, 2024\r\n\'\'   ?  " " \'\' . "P "… [+4584 chars]',
      },
      {
        source: {
          id: null,
          name: 'BusinessLine',
        },
        author: 'BL Mangaluru Bureau',
        title:
          'SEA asks Govt not to extend ban on de-oiled ricebran beyond July 31',
        description:
          'Solvent Extractors’ Association of India urges Government to lift export ban on de-oiled ricebran, citing market conditions.',
        url: 'https://www.thehindubusinessline.com/economy/agri-business/sea-asks-govt-not-to-extend-ban-on-de-oiled-ricebran-beyond-july-31/article68198962.ece',
        urlToImage:
          'https://bl-i.thgim.com/public/incoming/qs6qlo/article67903931.ece/alternates/LANDSCAPE_1200/IMG_bl11_Rice_bran_2_1_MA962E8B.jpg',
        publishedAt: '2024-05-21T08:45:59Z',
        content:
          'The Solvent Extractors Association of India (SEA), has appealed to the Government, not to extend ban on the export of de-oiled ricebran beyond July, 31. \r\nIn his monthly letter to the members of SEA … [+2888 chars]',
      },
      {
        source: {
          id: 'the-times-of-india',
          name: 'The Times of India',
        },
        author: 'Team TOI',
        title:
          'Lok Sabha Elections 2024: Elders defy extremeweather to cast vote',
        description:
          'Braving hot and humid weather and other odds, elderly citizens set an example on Monday by coming out of their house to exercise the right of franchis.',
        url: 'https://timesofindia.indiatimes.com/city/lucknow/lok-sabha-elections-2024-elders-defy-extremeweather-to-cast-vote/articleshow/110295560.cms',
        urlToImage:
          'https://static.toiimg.com/thumb/msid-110295578,width-1070,height-580,imgsize-21214,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
        publishedAt: '2024-05-21T07:29:32Z',
        content: '10 flowering trees in India that bloom in summer',
      },
      {
        source: {
          id: 'the-times-of-india',
          name: 'The Times of India',
        },
        author: 'TNN',
        title:
          'Very heavy rainfall likely till May 24 in Kerala, IMD issues red alert in 3 districts',
        description:
          'IMD issues red alert for heavy rainfall in Kerala till May 24 due to three cyclonic circulation systems. Thunderstorm, squally weather, and strong westerly winds expected. Fishermen advised not to venture into the sea. Low-pressure area to form over Bay of Be…',
        url: 'https://timesofindia.indiatimes.com/city/kochi/very-heavy-rainfall-likely-till-may-24-in-kerala-imd-issues-red-alert-in-3-districts/articleshow/110289538.cms',
        urlToImage:
          'https://static.toiimg.com/thumb/msid-110290063,width-1070,height-580,imgsize-29062,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
        publishedAt: '2024-05-21T04:49:27Z',
        content: '10 flowering trees in India that bloom in summer',
      },
      {
        source: {
          id: 'the-times-of-india',
          name: 'The Times of India',
        },
        author: 'ET Online',
        title:
          "Delhi reels under severe heatwave: IMD issues 'red alert' as temperatures soar",
        description:
          "Delhi is experiencing an intense heatwave, with temperatures soaring above 47 degrees Celsius, prompting the India Meteorological Department (IMD) to issue a 'red alert' for the next five days. The scorching weather has led to record peak power demand and the…",
        url: 'https://economictimes.indiatimes.com/news/india/delhi-reels-under-severe-heatwave-imd-issues-red-alert-as-temperatures-soar/articleshow/110291568.cms',
        urlToImage:
          'https://img.etimg.com/thumb/msid-110291662,width-1200,height-630,imgsize-1562445,overlay-economictimes/photo.jpg',
        publishedAt: '2024-05-21T05:43:41Z',
        content:
          "Delhi is in the grip of an intense heatwave, with temperatures crossing 47 degrees Celsius, prompting the India Meteorological Department (IMD) to issue a 'red alert' for the next five days. This sco… [+3101 chars]",
      },
      {
        source: {
          id: 'the-times-of-india',
          name: 'The Times of India',
        },
        author: 'ET Online',
        title:
          'Depression forming over Bay of Bengal: IMD issues heavy rains and strong winds alert for Odisha and West Bengal',
        description:
          'A low-pressure system in the Southwest Bay of Bengal by May 22, 2024, will intensify into a depression by May 24, causing heavy rainfall in northern Odisha and Gangetic West Bengal, and light to moderate rain in Andhra Pradesh. Fishermen should avoid the Cent…',
        url: 'https://economictimes.indiatimes.com/news/india/depression-forming-over-bay-of-bengal-imd-issues-heavy-rains-and-strong-winds-alert-for-odisha-and-west-bengal/articleshow/110287677.cms',
        urlToImage:
          'https://img.etimg.com/thumb/msid-110288037,width-1200,height-630,imgsize-469492,overlay-economictimes/photo.jpg',
        publishedAt: '2024-05-21T03:39:45Z',
        content:
          'A low-pressure system is anticipated to develop over the Southwest Bay of Bengal around May 22, 2024, and is expected to move northeastwards, intensifying into a depression by the morning of May 24, … [+2819 chars]',
      },
      {
        source: {
          id: null,
          name: 'NDTV News',
        },
        author: null,
        title:
          "Delhi Records 47.4 Degrees Celsius, 'Red Alert' Issued For Next 5 Days",
        description:
          "Temperatures in several parts of Delhi again breached the 47 degrees Celsius mark on Monday, with the weather office issuing a 'red alert' for the next five days due to heatwave to severe heatwave conditions in the national capital.",
        url: 'https://www.ndtv.com/india-news/delhi-records-47-4-degrees-celsius-red-alert-issued-for-next-5-days-due-to-heatwave-5709427',
        urlToImage:
          'https://c.ndtvimg.com/2022-04/m589lcto_delhi-summer-delhi-heatwave-delhi-weather-ani-april-9-2022-650_625x300_09_April_22.jpg',
        publishedAt: '2024-05-21T00:56:21Z',
        content:
          'On Monday the national capital experienced the second-highest maximum temperature.\r\nNew Delhi:  Temperatures in several parts of Delhi again breached the 47 degrees Celsius mark on Monday, with the w… [+3792 chars]',
      },
      {
        source: {
          id: null,
          name: 'People.cn',
        },
        author: 'F_400991',
        title: 'Iran mourns President Raisi after tragic helicopter crash',
        description:
          'TEHRAN, May 20 (Xinhua) -- Iranian President Ebrahim Raisi was confirmed dead on Monday after his he',
        url: 'http://en.people.cn/n3/2024/0521/c90000-20171994.html',
        urlToImage: null,
        publishedAt: '2024-05-21T00:24:00Z',
        content:
          "TEHRAN, May 20 (Xinhua) -- Iranian President Ebrahim Raisi was confirmed dead on Monday after his helicopter crashed in the country's mountainous northwestern region on Sunday.\r\nIran's official news … [+5869 chars]",
      },
      {
        source: {
          id: null,
          name: 'Khabarhub.com',
        },
        author: 'Khabarhub',
        title:
          'Light rainfall forecasted in Koshi, Madhes, and Lumbini provinces',
        description:
          'KATHMANDU: The Department of Hydrology and Meteorology has predicted light rainfall accompanied by thunder and lightning in parts of Koshi, Madhes, and Lumbini provinces today. This weather pattern is attributed to the combined effects of local and westerly w…',
        url: 'https://english.khabarhub.com/2024/21/356865/',
        urlToImage:
          'https://english.khabarhub.com/wp-content/uploads/2020/07/Rainy-weather.jpg',
        publishedAt: '2024-05-21T03:35:53Z',
        content:
          'KATHMANDU: The Department of Hydrology and Meteorology has predicted light rainfall accompanied by thunder and lightning in parts of Koshi, Madhes, and Lumbini provinces today.\r\nThis weather pattern … [+362 chars]',
      },
      {
        source: {
          id: null,
          name: 'Statetimes.in',
        },
        author: 'statetimes_editor',
        title: 'Increasing Troubles in Burning Cities',
        description:
          'VIJAY GARG Some scientific evidence suggests that with rising temperatures, a situation called ‘Seasonal Affective Disorder’ occurs. This causes rapid changes in the neurotransmitters found in people’s brain. These changes motivate people to take suicidal ste…',
        url: 'https://statetimes.in/increasing-troubles-in-burning-cities/',
        urlToImage:
          'https://statetimes.in/wp-content/uploads/2023/03/319526318_5727891263973556_9016205861254904172_n-1024x1024.jpg',
        publishedAt: '2024-05-21T01:16:40Z',
        content:
          'VIJAY GARG \r\nSome scientific evidence suggests that with rising temperatures, a situation called ‘Seasonal Affective Disorder’ occurs. This causes rapid changes in the neurotransmitters found in peop… [+5858 chars]',
      },
    ]);
  }, []);

  return (
    <div className="max-w-[1100px] mx-auto p-5 flex flex-col gap-3 text-[#ffffffdd]">
      <h2 className="text-4xl font-bold mb-3 ">
        Latest news related to the Weather in this region:
      </h2>
      {news
        .filter(
          (item) =>
            item.urlToImage != null &&
            (item.description.toLowerCase().includes('rain') ||
              item.description.toLowerCase().includes('heat'))
        )
        .map((newsItem) => (
          <a
            href={newsItem.url}
            target="_blank"
            className=" flex gap-8 rounded-md bg-[#ffffff2b] p-3 items-center xsm:flex-row flex-col"
          >
            <div className="news_image_box xsm:min-w-[280px] xsm:max-w-[280px] max-h-[200px]  overflow-hidden rounded-l-md ">
              <img className="w-full h-full" src={newsItem.urlToImage} />
            </div>
            <div className="news_text_box flex flex-col">
              <p className="mb-2 text-[#ffffff81]">
                Published at: {newsItem.publishedAt.substring(0, 10)}
              </p>
              <div>
                <h3 className="text-3xl font-bold mb-3">{newsItem.title}</h3>
                <p>{newsItem.description}</p>
              </div>
            </div>
          </a>
        ))}
    </div>
  );
}
