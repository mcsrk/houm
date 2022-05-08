import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://shazam.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    "X-RapidAPI-Key": "ca518ab6e6msh52114e5a0a9b06cp1ebbd1jsn48af2f6deaf2",
  },
  timeout: 2000,
});

export function getRequest(URL, payload) {
  return axiosClient.get(`/${URL}`, payload).then((response) => response);
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
