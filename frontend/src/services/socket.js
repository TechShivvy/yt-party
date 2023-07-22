require("dotenv").config();
import io from "socket.io-client";

// const SOCKET_URL = "https://yt-party-server.onrender.com";
const SOCKET_URL = process.env.SERVER_URL || "http://localhost:8080";
// const SOCKET_URL = "http://192.168.0.108:8080";
const socket = io(SOCKET_URL);
// const socket=io();
export default socket;
