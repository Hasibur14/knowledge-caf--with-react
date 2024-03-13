import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark ,  handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);
   useEffect(() =>{
    fetch('blogs.json')
     .then(res => res.json())
     .then(data => setBlogs(data))
   },[])
  
   

    return (
        <div className="md:w-2/3">
            <h3 className="text-4xl">Blogs: {blogs.length}</h3>
          {
            blogs.map(item => <Blog
              key={item.id} 
              blog={item}
              handleAddToBookmark={handleAddToBookmark}
              handleMarkAsRead ={ handleMarkAsRead}
           ></Blog> )
          }
        </div>
    );
};


Blogs.prototype+{
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
}


export default Blogs;
