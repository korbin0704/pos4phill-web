import axios from "axios";

export const API_URL =
  "ec2-15-164-100-237.ap-northeast-2.compute.amazonaws.com:8033";

export const TOKEN = "A3b7kR9p2QcL8oE6X1iY0vN4jH5xU2J9tP1wZ3gD7qF4uM0yB6sK8nV2rO1I5"

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "x-access-token": TOKEN
  },
  onUploadProgress: () => { },
  onDownloadProgress: (progressEvent) => { },
});
