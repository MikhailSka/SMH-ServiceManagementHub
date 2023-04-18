const colors = ['#fde4e4', '#fde9d1', '#e0fde6', '#e6f1fd', '#e6dbfd'];

export const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
