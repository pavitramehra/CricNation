const API_KEY = "88TVECZnlnXoZQP9gz1dlO6lUp43";
const NEWS_API_KEY = "9ef233c2e3f24814b01694783c6f31bc";
const news_key="c7434accda478ec93a0ef0f679724f22"


export const getMatchesInfo = () => {
  const url = `https://cricapi.com/api/matches/${API_KEY}`;

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log("ERROR: ", err));
};

export const getMatchScore = (id) => {
  const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log("Error: ", err));
};

export const getPlayerStat = (name) => {
  const url = `https://cricapi.com/api/playerFinder?apikey=${API_KEY}&name=${name}`;

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getPlayerDesc = (id) => {
  const url = `https://cricapi.com/api/playerStats?apikey=${API_KEY}&pid=${id}`;

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getNews = () => {
  const url = 'https://gnews.io/api/v4/search?q=cricket&token=c7434accda478ec93a0ef0f679724f22'

  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};