import React from "react";

const PageButtons = ({ pages, setPages }) => {
  return (
    <div>
      <div className="pagination-container flex justify-between mt-5 ">
        <button
          disabled={pages == 1}
          onClick={() => {
            setPages((prev) => prev - 1);
          }}
          className="p-2 bg-gray-700 text-white rounded px-4"
        >
          Prev
        </button>
        <button className="text-2xl text-blue-900">{pages}</button>
        <button
          onClick={() => {
            setPages((prev) => prev + 1);
          }}
          className="p-2 bg-gray-700 text-white rounded px-4"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PageButtons;
