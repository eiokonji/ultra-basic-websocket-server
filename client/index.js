// use ws from client side
let socket = new WebSocket("ws://localhost:80");

socket.onopen = (e) => {
  console.log("Handshake Completed!");
  socket.send("Hello from the client!");
};

// handling receiving server mssgs
socket.onmessage = (e) => {
  console.log(`Message from server: ${e.data}`);
};

socket.onclose = () => {
  console.log("Connection closed!");
};
