import React from 'react'

function RowFormate2(props) {
    const {title,time,photo} = props.rf2;
    return (
        <div className='main_left_third_grid'>
            <div>
                {
                    <div>
                        <h1 className='title'><a href="/">{title}</a></h1>
                        <time>{time}</time>
                    </div>
                }
            </div>
            <div>
                {
                    <div>
                        <img src={photo} className='news_img RowFormate2_img' alt="" />
                    </div>
                }
            </div>
        </div>
    )
}

export default RowFormate2