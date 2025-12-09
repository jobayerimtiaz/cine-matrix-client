const isoTimeFormat = (isoString) => {
  const date = new Date(isoString);
  const options = { hour: "2-digit", minute: "2-digit" };
  return date.toLocaleTimeString([], options);
};
export default isoTimeFormat;
