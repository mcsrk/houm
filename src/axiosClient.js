import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "https://shazam.p.rapidapi.com";

axiosClient.defaults.headers = {
  "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  "X-RapidAPI-Key": "ca518ab6e6msh52114e5a0a9b06cp1ebbd1jsn48af2f6deaf2",
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;

export function getRequest(URL, term, offset, limit) {
  const args = { term: term, locale: "en-US", offset: offset, limit: limit };
  return axiosClient.get(`/${URL}`, args).then((response) => response);
}

export function postRequest(URL, payload) {
  return axiosClient.post(`/${URL}`, payload).then((response) => response);
}

export function patchRequest(URL, payload) {
  return axiosClient.patch(`/${URL}`, payload).then((response) => response);
}

export function deleteRequest(URL) {
  return axiosClient.delete(`/${URL}`).then((response) => response);
}
