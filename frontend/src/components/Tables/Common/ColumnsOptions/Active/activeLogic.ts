export const activeLogic = (prop: string, filterValue: any[], row?: any[] | undefined) => {
  const filterVal = filterValue[0];
  const active = JSON.parse(prop);
  return filterVal === 'No' ? active : !active;
};