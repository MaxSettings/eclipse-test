export type PageChangeType = (page: number, pageSize: number) => void;

export type Props = {
  className?: string;
  currentPage: number;
  setCurrentPage: (current: number) => void;
  onPageChange: PageChangeType;
  onPageSizeChange: PageChangeType;
  total: number;
  currentPageSize: number;
};
