
 const formatPrice = (number:number) => {
  number /= 100
  return new Intl.NumberFormat('en-US').format(number);
};

export default formatPrice
