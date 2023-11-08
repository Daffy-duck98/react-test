import React from 'react';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArray.map((n) => (
        <span
          key={n}
          onClick={() => changePage(n)}
          className={page === n ? 'page page__current' : 'page'}
        >
          {n}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
