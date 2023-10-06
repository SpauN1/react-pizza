import React from 'react';

import './Pagination.scss';

function Pagination() {
  return (
    <section className="pagination">
      <ul className="pagination__list">
        <li className="previous">
          <a href="#">&lt;</a>
        </li>
        <li className="selected">
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li className="next">
          <a href="#">&gt;</a>
        </li>
      </ul>
    </section>
  );
}

export default Pagination;
