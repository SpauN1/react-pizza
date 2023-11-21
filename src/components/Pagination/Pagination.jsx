import React from 'react';
import ReactPaginate from 'react-paginate';

import './Pagination.scss';

function Pagination({currentPage, onChangePage }) {
  return (
    <section className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </section>
  );
}

export default Pagination;
