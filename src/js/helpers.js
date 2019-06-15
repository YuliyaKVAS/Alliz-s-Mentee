export const parseTime = (sec) => {
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;

  const hDisplay = hours > 0 ? `${hours}h ` : '';
  const mDisplay = minutes > 0 ? `${minutes}m ` : '';
  const sDisplay = seconds > 0 ? `${seconds}s ` : '';

  return hDisplay + mDisplay + sDisplay;
};

export const parseDate = date => new Date(date).toDateString().slice(3);

export const isUserAuth = () => (!!localStorage.getItem('token'));

export const sortByField = (array, option, field) => {
  const sortingField = field;
  const sortedArray = [...array]
    .sort((a, b) => {
      if (option === 'asc') {
        return (a[sortingField] <= b[sortingField] ? -1 : 1);
      }
      return (a[sortingField] >= b[sortingField] ? -1 : 1);
    });

  return sortedArray;
};
