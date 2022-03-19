import React from 'react'

function RowFormate1(props) {
    const  data =props.rf1;

    const getFormattedDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('bn-BD');
    }
    return (
        <div>
            <div>
                {
                    <div>
                        <h1 className='title'><a href="/">{data.title}</a></h1>
                        <p className='desc'>{data.description.slice(0, 100) + '...'}</p>
                        <time>{getFormattedDate(data.time)}</time>
                    </div>
                }
            </div>
        </div>
    )
}

export default RowFormate1