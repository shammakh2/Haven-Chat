import http from "node:http";

const hello: string = "Hello Haven chat";
console.log(hello);

const port = Number(process.env.PORT) || 3000; // ← use the platform's port, fall back to 3000 local

const server = http.createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello from haven");
});

server.listen(port, () => console.log(`listening on ${port}`));
