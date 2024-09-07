import React from "react";
import { useTheme } from "../hooks/useTheme";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
}) => {
  const theme = useTheme();

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(currentPage - 2, 1);
      let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

      if (endPage - startPage < maxPagesToShow - 1) {
        startPage = Math.max(endPage - maxPagesToShow + 1, 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  const buttonStyle = `
    px-2 py-1 rounded-md text-sm font-medium
    text-${theme.palette.text}
    bg-${theme.palette.background}
    hover:bg-${theme.palette.action.hover}
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const activeButtonStyle = `
    px-3 py-1 rounded-md text-sm font-medium
    bg-${theme.palette.primary}
    text-${theme.palette.background}
  `;

  return (
    <nav
      className="flex items-center justify-center space-x-1"
      aria-label="Pagination"
    >
      {showFirstLast && (
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={buttonStyle}
          style={{ borderRadius: `${theme.shape.borderRadius}px` }}
        >
          First
        </button>
      )}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={buttonStyle}
        style={{ borderRadius: `${theme.shape.borderRadius}px` }}
      >
        Previous
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? activeButtonStyle : buttonStyle}
          style={{ borderRadius: `${theme.shape.borderRadius}px` }}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={buttonStyle}
        style={{ borderRadius: `${theme.shape.borderRadius}px` }}
      >
        Next
      </button>
      {showFirstLast && (
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={buttonStyle}
          style={{ borderRadius: `${theme.shape.borderRadius}px` }}
        >
          Last
        </button>
      )}
    </nav>
  );
};

export default Pagination;
