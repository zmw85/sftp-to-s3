import { Server } from 'ssh2';

new Server(
  {
    hostKeys: [fs.readFileSync('host.key')]
  },
  function(client) {}
);

new Server();
