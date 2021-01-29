import React from 'react';

const Pages = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div class='bg-white lg:px-8 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
      <nav
        class='relative z-0 inline-flex shadow-sm -space-x-px max-w-7xl mx-auto'
        aria-label='Pagination'
      >
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => paginate(page)}
            class='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'
          >
            {page}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Pages;
