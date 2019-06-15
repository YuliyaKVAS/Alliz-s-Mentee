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

export const debounce = (fn, ms = 1000) => {
  let timeoutId;
  return (...args) => {
    const callback = () => fn.apply(this, args);
    // eslint-disable-next-line no-unused-expressions
    timeoutId && clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback, ms);
  };
};
