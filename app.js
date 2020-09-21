const Express = require('express');
const server = new Express();

server.use('/', (req, res) => {
	res.send("Hello World!!!");
});

server.listen(3000, () => {
	console.log("server is started on port 3000");
});
