import React, { useState } from 'react'
import Header from '../header/Header';
import data from '../mockApi/data.json'
import RightCol from '../rightCol/RightCol';
import RowFormate1 from '../rowFormate1/RowFormate1';
import RowFormate2 from '../rowFormate2/RowFormate2';
function Home() {
    const [news] = useState(data);

    const news_one = news.find((item1) => {
        return item1.id === '27eb95f9';
    })

    const news_two = news.find((item1) => {
        return item1.id === '367da510';
    })

    const getFormattedDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('bn-BD');
    }


    return (
        <>
            <Header />
            {/* section2 */}
            <div className='container'>
                <div className='main'>
                    <div className='main_left'>
                        <div className='main_left_first'>

                            <div className='main_left_first_1'>
                                <div>
                                    {
                                        <div>
                                            <h1 className='title'><a href="/">{news_one.title}</a></h1>
                                            <p className='desc'>{news_one.description.slice(0, 100) + '...'}</p>
                                            <time>{getFormattedDate(news_one.time)}</time>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className='main_left_first_2'>
                                {
                                    <div>
                                        <img src={news_one.photo} className="news_img" alt="" />
                                    </div>
                                }
                            </div>
                            <div>
                                {
                                    <div>
                                        <h1 className='title'><a href="/">{news_two.title}</a></h1>
                                        <p className='desc'>{news_two.description.slice(0, 100) + '...'}</p>
                                        <time>{news_two.time}</time>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='main_left_second'>
                            {
                                news.map((rf1) => <RowFormate1 rf1={rf1} ></RowFormate1>)
                            }
                        </div>
                        <div className='main_left_third'>
                            {
                                news.map((rf2) =><RowFormate2 rf2={rf2} ></RowFormate2>)
                            }
                        </div>
                    </div>
                    <div className='main_right'>
                        {
                            news.map((rc) => <RightCol rc={rc} ></RightCol>)
                        }
                    </div>
                </div>
            </div>
            {/* section2 */}
        </>
    )
}

export default Home