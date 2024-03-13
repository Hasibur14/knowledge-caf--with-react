import React from 'react';
const Bookmark = ({ bookmark }) => {

    const { title } = bookmark;
    return (
        <div className=''>
            <h3  className='bg-white p-4 m-4 rounded-xl'> {title}</h3>
        </div>
    );
};

export default Bookmark;