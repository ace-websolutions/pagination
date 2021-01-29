import React from 'react';

const PaginationItems = ({ posts, loading }) => {
  if (loading) return <h3>Loading...</h3>;

  return (
    <div class='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 '>
      {posts.map((post) => (
        <p
          key={post.id}
          class='relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'
        >
          {post.title}
        </p>
      ))}
    </div>
  );
};

export default PaginationItems;
