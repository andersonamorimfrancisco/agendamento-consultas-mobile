const normalizeAvailabilityFilter = (filter: number) => {
  if (filter === 1) {
    return "Ocupados";
  }
  if (filter === 2) {
    return "Livres";
  }
  return "Todos";
};

export default normalizeAvailabilityFilter;
