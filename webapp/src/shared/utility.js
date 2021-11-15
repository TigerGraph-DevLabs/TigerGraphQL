export function beautifyDate(datetime) {
  const month = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const dt = new Date(datetime);
  return `${month[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()}`;
}
