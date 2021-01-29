import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import PaginationItems from './components/PaginationItems';
import Pages from './components/Pages';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchTenMillionLinesOfData = async () => {
      setLoading(true);
      const { data } = await axios(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts(data);
      setLoading(false);
    };
    fetchTenMillionLinesOfData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); //slice does not include last index, so 10 = index 9

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='max-w-7xl mx-auto'>
      <Header />
      <PaginationItems posts={currentPosts} loading={loading} />
      <Pages
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
