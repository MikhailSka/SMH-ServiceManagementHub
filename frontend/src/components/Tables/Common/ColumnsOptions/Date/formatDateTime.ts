import moment from 'moment';

export const formatDateTime = (value: Date | string): string =>
  moment(value).format('MMMM Do YYYY, HH:mm:ss');
