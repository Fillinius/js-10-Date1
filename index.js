const nextBirthdayDate = new Date(2023, 9, 28)
console.log(nextBirthdayDate);
const birthday = new Date (1982, 9, 28)
console.log(birthday);

function getDaysBeforeBirthday (nextBirthdayDate, birthday){
  let n = nextBirthdayDate.getTime()
  let b = birthday.getTime()
  return n-b
}
const day = getDaysBeforeBirthday (nextBirthdayDate, birthday)
console.log(day);

function convertMsToDays(day){
  day=Math.round(day/1000/60/600/24)
  return day
}
const convertDay = convertMsToDays(day)
console.log(convertDay);