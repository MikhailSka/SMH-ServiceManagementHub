import moment from 'moment';

export const formatDate = (value: Date | string, type: string): string => {
  if (type == 'datetime') {
    return moment(value).format('MMMM Do YYYY, HH:mm:ss');

  } else {
    return moment(value).format('MMMM Do YYYY');
  }
}

