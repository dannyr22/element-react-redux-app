//BASE URL
const base_url = "https://api.rawg.io/api/";

//GETTING THE DATE
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 0) {
    return `0 ${month}`
  } else {
    return month
  }
}

//GET CURRENT DATE
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 0) {
    return `0 ${day}`
  } else {
    return day
  }
}

//CURRENT/DAY/MONTH/YEAR
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`
console.log(currentDate, lastYear, nextYear)



//POPULAR GAMES
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

const popularGamesUrl = () => `${base_url}${popular_games}`;

console.log(popularGamesUrl())