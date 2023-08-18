import { Routes, Route,  Link } from 'react-router-dom';
import { Blog1, Blog2 } from '../index';

// import { useParams } from 'react-router-dom'
// const { id } = useParams()


export default function Blog() {
    return (
        <div className='about-list'>
      {/* <h2>Blogs { id } 📚</h2> */}
      <Routes>
      <Route path="/blog/1"  element={<Blog1 />}>blog 1</Route>
      <Route path="/blog/2"  element={<Blog2 />}>blog 2</Route>

      </Routes>
      <div className="blog_container">
        {/* <Link to={`/blog/${id}`}>Blog 1</Link> */}
        <Link to="/blog/1">Blog 1</Link>
        <Link to="/blog/2">Blog 2</Link>
      </div>
      
      </div>
    )
  }
