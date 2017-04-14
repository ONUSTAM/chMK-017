import moment from 'moment'

export function config () {
  return [
    'moneyform',
    'dateFormat'
  ]
}

//金
export function moneyform (val) {
  return Number(val).toLocaleString();
}

export function dateFormat (time, frm) {
  var format = 'YYYY/MM/DD hh:mm:ss';
  if (frm) {
    format = frm;
  }
  return moment(time).format(format);
}
