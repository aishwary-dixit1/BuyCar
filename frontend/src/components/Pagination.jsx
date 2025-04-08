import React from 'react';

const Pagination = ({ page, setPage, total }) => {
  return (
    <div className="flex justify-center mt-8">
      <div className="join">
        <button
          className="join-item btn"
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          « Prev
        </button>
        <button className="join-item btn btn-ghost">Page {page}</button>
        <button
          className="join-item btn"
          disabled={page >= total}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next »
        </button>
      </div>
    </div>
  );
};

export default Pagination;