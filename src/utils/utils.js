const formatMoney = (number) =>{
    return number.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      })
}

export default formatMoney

export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}