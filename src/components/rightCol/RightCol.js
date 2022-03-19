import React from 'react'

function RightCol(props) {
    const {photo} = props.rc;
    return (
        <div>
            {
                <div>
                    <img src={photo} className="news_img" alt="" />
                </div>
            }
        </div>
    )
}

export default RightCol