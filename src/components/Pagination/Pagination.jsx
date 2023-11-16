import React from 'react';
import ReactPaginate from 'react-paginate';

import './Pagination.scss';

function Pagination({ onChangePage }) {
  return (
    <section className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </section>
  );
}

export default Pagination;
