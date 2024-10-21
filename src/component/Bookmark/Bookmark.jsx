import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark ;
    return (
        <div className="bg-white rounded-lg p-4 text-center mb-2 mt-2">
            <h3 className="text-xl">{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object
}

export default Bookmark;