import React from 'react';

import './Pagination.scss';

function Pagination() {
  return (
    <section className="pagination">
      <ul className="pagination__list">
        <li className="pagination__list-item ">
          <a className="pagination__link previous" href="#">
            &lt;
          </a>
        </li>
        <li className="pagination__list-item ">
          <a className="pagination__link selected" href="#">
            1
          </a>
        </li>
        <li className="pagination__list-item">
          <a className="pagination__link" href="#">
            2
          </a>
        </li>
        <li className="pagination__list-item">
          <a className="pagination__link" href="#">
            3
          </a>
        </li>
        <li className="pagination__list-item ">
          <a className="pagination__link next" href="#">
            &gt;
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Pagination;
