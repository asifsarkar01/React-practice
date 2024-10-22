import PropTypes from 'prop-types';

const Blog = ({blog,handleMark , handleMarkAsRead}) => {
    const {title,cover,author,posted_date,author_img,reading_time,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full rounded-lg' src={cover} alt={`cover pictur of the title:${title}`} />

           <div className='flex justify-between'>

            <div className='flex gap-x-4 my-2'>
           <img className='w-16 rounded-full' src={author_img} alt="" />
           <div>
               <h3>{author}</h3>
               <p className='opacity-50'>{posted_date}</p>
           </div>  
            </div>  

            <div className='my-4 flex'>
            <p>0{reading_time} min read </p>
           <button onClick={()=>handleMark(blog)}><img className='w-8 ml-2' src="https://img.icons8.com/?size=100&id=25157&format=png" alt="" /></button> 
            </div>

           </div>

            <h2 className='text-2xl'>{title}</h2>
            <p className=' text-blue-500 '>
                {
                   hashtags.map((hash,idx) => <span key={idx}><a className='mr-2' href="">{hash}</a></span>) 
                }
            </p>
            <button
            onClick={() => handleMarkAsRead(reading_time)}
             className='underline text-blue-700 mt-4 font-bold'>Mark as Read</button>
        </div>
    );
};











Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleMark : PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;