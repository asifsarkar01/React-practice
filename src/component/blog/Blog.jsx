import PropTypes from 'prop-types';

const blog = ({blog}) => {
    console.log(blog)
    return (
        <div>
            
        </div>
    );
};


blog.PropTypes = {
    Blog:PropTypes.object.isRequired
}

export default blog;