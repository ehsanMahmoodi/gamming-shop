export const Base_Url = 'https://api.rawg.io/api/'
export const Api_Key= 'd9dde6185dd94dcba49b3849fb6e1463'
export const All_Games_Url =(page=1) => `${Base_Url}games?key=${Api_Key}&dates=2019-01-01,2019-12-31&ordering=-added&page=${page}&platforms=18,1,7`
