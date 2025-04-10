import dgram from 'dgram';
import WebSocket, { WebSocketServer } from 'ws';

const udpServer = dgram.createSocket('udp4');
const wsServer = new WebSocketServer({ port: 8084 });

let clients = [];

wsServer.on('connection', (ws) => {
  console.log('WebSocket 연결됨');
  clients.push(ws);

  ws.on('close', () => {
    clients = clients.filter(c => c !== ws);
  });

  ws.on('message', (msg) => {
    console.log('WebSocket 메시지:', msg.toString());
  });
});


udpServer.on('message', (msg) => {
  const data = msg.toString().trim();
  const jsonData = JSON.parse(data);
  // console.log('UDP 수신:', jsonData);
    // console.log(data)

  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
});

udpServer.bind(5005, () => {
  console.log('UDP 서버가 5005 포트에서 실행 중');
});


 