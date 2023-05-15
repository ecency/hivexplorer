import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";

interface Props {
  dataLength: number;
  pageSize: number;
  maxItems: number;
  page?: number;
  onPageChange: (num: number) => void;
  className?: string;
  showLastNo?: boolean;
}

const MyPagination = ({
  dataLength,
  maxItems,
  onPageChange,
  pageSize,
  className,
  page: pageFromProps,
  showLastNo = true,
}: Props) => {
  const [page, setPage] = useState<number>(pageFromProps || 1);

  const changePage = (num: number) => {
    setPage(num);
    onPageChange(num);
  };

  useEffect(() => {
    if (pageFromProps) {
      setPage(pageFromProps);
    }
  }, [pageFromProps]);

  const pages = Math.ceil(dataLength / pageSize);
  const records = [...Array(pages).keys()];

  let responsiveMaxItems = maxItems;
  let sliceStart = 0;
  let sliceEnd = pages;

  if (pages > maxItems) {
    responsiveMaxItems = 3;
    if (page <= 2) {
      sliceEnd = maxItems;
    } else if (page >= pages - 1) {
      sliceStart = pages - maxItems;
    } else {
      sliceStart = page - 2;
      sliceEnd = page + 1;
    }
  }

  const allItems = records.map((i, x) => {
    const num = i + 1;
    return (
      <Pagination.Item
        active={num === page}
        onClick={() => {
          changePage(num);
        }}
        key={num}
      >
        {num}
      </Pagination.Item>
    );
  });

  const items = allItems.slice(sliceStart, sliceEnd);

  return (
    <Pagination className={className}>
      <Pagination.First
        disabled={!(sliceStart > 0)}
        onClick={() => {
          changePage(1);
        }}
      />
      <Pagination.Prev
        disabled={!(page > 1)}
        onClick={() => {
          changePage(page - 1);
        }}
      />
      {sliceStart > 0 && (
        <>
          <Pagination.Item onClick={() => changePage(1)}>{1}</Pagination.Item>
          {sliceStart === 2 && (
            <Pagination.Item onClick={() => changePage(2)}>{2}</Pagination.Item>
          )}
          <Pagination.Ellipsis disabled />
        </>
      )}
      {items}
      {sliceEnd < pages && (
        <>
          <Pagination.Ellipsis disabled />
          {sliceEnd === pages - 2 && (
            <Pagination.Item onClick={() => changePage(pages - 1)}>
              {pages - 1}
            </Pagination.Item>
          )}
          <Pagination.Item onClick={() => changePage(pages)}>
            {pages}
          </Pagination.Item>
        </>
      )}
      <Pagination.Next
        disabled={page >= pages}
        onClick={() => {
          changePage(page + 1);
        }}
      />
      {showLastNo && (
        <Pagination.Last
          disabled={page >= pages}
          onClick={() => {
            changePage(pages);
          }}
        />
      )}
    </Pagination>
  );
};

export default MyPagination;
