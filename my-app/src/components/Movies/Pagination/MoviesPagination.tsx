import React from 'react';
import { useSelector } from 'react-redux';
import { totalPages } from '../store';
import { StyledPagination } from './styles';

interface Pagination {
  changePage: (page: number) => void;
}

export const MoviesPagination: React.FC<Pagination> = ({ changePage }) => {
  const pages = useSelector(totalPages);
  return <StyledPagination count={pages} size="large" shape="rounded" onChange={(e, page) => changePage(page)} />;
};
