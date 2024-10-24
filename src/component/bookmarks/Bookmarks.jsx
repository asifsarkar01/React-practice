import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks , readingTime}) => {
    return (
       
        <div className="md:w-1/3 bg-gray-100 ml-4">

            <div className="text-center m-4 border border-2 p-4 rounded-xl bg-white">
                <h3 className="text-2xl">Reading Spend Time : {readingTime}</h3>
            </div>
            <h1 className="text-3xl text-center ">Bookmarked Blog: {bookmarks.length}</h1>
            {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
        }
        </div>

       
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;