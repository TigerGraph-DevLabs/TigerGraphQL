export function beautifyDate(datetime) {
  const month = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const dt = new Date(datetime.split(' ')[0]);
  return `${month[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()}`;
}

export function beautifyNumber(num) {
  return `${num}`.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ','
  );
}
