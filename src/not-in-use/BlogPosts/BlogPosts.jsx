import { Routes, Route,  Link } from 'react-router-dom';
import { Blog1, Blog2 } from '../index';


function BlogPosts() {
    return (
        <div className='about-list'>
      <div>Posts</div>
      <Routes>
      <Route path="/book/1"  element={<Blog1 />}>book 1</Route>
      <Route path="/book/2"  element={<Blog2 />}>book 2</Route>

      {/* <Link to="/about/2">About 2</Link> */}
      </Routes>
      {/* <Link to="/about/1">About 1</Link> */}
      </div>
    )
  }
  export default BlogPosts