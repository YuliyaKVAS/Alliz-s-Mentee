export const parseSecToMinutes = (sec) => {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  return minutes ? `${minutes}m ${seconds}s` : `${sec}s`;
};

export const parseDate = date => new Date(date).toDateString().slice(3);

export default { parseSecToMinutes, parseDate };
