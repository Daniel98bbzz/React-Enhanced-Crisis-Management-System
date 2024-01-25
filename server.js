//Daniel Buzaglo - 208745836
const http = require('http');
const url = require('url');
const counselingSession = require('./counselingSession');

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    //THESE ARE THE CRUD OPS:
    // Add Session
    if (reqUrl.pathname === '/addSession' && req.method === 'POST') {
        counselingSession.createSession(req, res);
    }
    // Read Sessions
    else if (reqUrl.pathname === '/getSessions' && req.method === 'GET') {
        counselingSession.readSessions(res);
    }
    // Update Session
    else if (reqUrl.pathname.startsWith('/updateSession/') && req.method === 'PUT') {
        const id = reqUrl.pathname.split('/')[2];
        counselingSession.updateSession(req, res, id);
    }
    // Delete Session
    else if (reqUrl.pathname.startsWith('/deleteSession/') && req.method === 'DELETE') {
        const id = reqUrl.pathname.split('/')[2];
        counselingSession.deleteSession(req, res, id);
    }
    else if (reqUrl.pathname.startsWith('/getSession/') && req.method === 'GET') {
        const id = reqUrl.pathname.split('/')[2];
        counselingSession.getSession(req, res, id);
    }
    // Route Not Found
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
