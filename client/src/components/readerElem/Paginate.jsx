import React from "react";

const Paginate = ({
  recsPerPage,
  totalRecs,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecs / recsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container mt-2">
      <ul className="pagination">
        <li onClick={previousPage} className="page-number">
          <a className="page-link" onClick={previousPage} href="#">
            Prev
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className="page-number"
          >
            <a onClick={() => paginate(number)} className="page-link" href="#">
              {number}
            </a>
          </li>
        ))}
        <li onClick={nextPage} className="page-number">
          <a className="page-link" onClick={nextPage} href="#">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
