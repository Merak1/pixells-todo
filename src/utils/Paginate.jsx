export const Paginate = (data, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;

  if (data.status === 500) {
    return null;
  }
  return data.slice(startIndex, startIndex + pageSize);
};

export const pageSize = 10;
