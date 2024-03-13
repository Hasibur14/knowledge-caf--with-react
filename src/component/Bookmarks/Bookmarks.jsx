
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime}) => {
    return (

        <div className="md:w-1/3 bg-gray-200 ml-4 mt-2 p-2">
            <div>
                <h3 className="text-4xl ">Reading Time: {readingTime}</h3>
            </div>
            <h3 className='text-3xl text-center bg-gray-200 '>Bookmarked Blog: {bookmarks.length}</h3>
            {
                bookmarks.map(item => <Bookmark key={item.id} bookmark={item}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;