import { io } from "socket.io-client";
const ENDPOINT = "https://shrouded-scrubland-11576.herokuapp.com";
export const socket = io(ENDPOINT);