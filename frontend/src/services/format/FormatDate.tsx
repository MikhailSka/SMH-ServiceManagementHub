import moment from "moment"

export function FormatDate(value: any) {
    return moment(value).format('MMMM Do YYYY HH:mm:ss')
  };