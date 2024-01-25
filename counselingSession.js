//Daniel Buzaglo - 208745836
const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, 'counselingSessions.json');


function readSessions(res) {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: 'Error reading data' }));
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
    });
}

function getSession(req, res, id) {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: 'Error reading data' }));
        }

        const sessions = JSON.parse(data);
        const session = sessions.find(s => s.id === parseInt(id));

        if (session) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(session));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Session not found' }));
        }
    });
}

function createSession(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const session = JSON.parse(body);

        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ message: 'Error reading data' }));
            }
            const sessions = JSON.parse(data);
            sessions.push(session);

            fs.writeFile(dataPath, JSON.stringify(sessions), err => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Error writing data' }));
                }
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(session));
            });
        });
    });
}

function updateSession(req, res, id) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const updateData = JSON.parse(body);

        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ message: 'Error reading data' }));
            }
            let sessions = JSON.parse(data);

            const sessionIndex = sessions.findIndex(session => session.id === parseInt(id));
            if (sessionIndex !== -1) {
                sessions[sessionIndex] = { ...sessions[sessionIndex], ...updateData };

                fs.writeFile(dataPath, JSON.stringify(sessions), err => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        return res.end(JSON.stringify({ message: 'Error writing data' }));
                    }
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(sessions[sessionIndex]));
                });
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Session not found' }));
            }
        });
    });
}

function deleteSession(req, res, id) {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: 'Error reading data' }));
        }
        let sessions = JSON.parse(data);

        const newSessions = sessions.filter(session => session.id !== parseInt(id));
        if (sessions.length !== newSessions.length) {
            fs.writeFile(dataPath, JSON.stringify(newSessions), err => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Error writing data' }));
                }
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Session deleted' }));
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Session not found' }));
        }
    });
}

module.exports = {
    readSessions,
    createSession,
    updateSession,
    deleteSession,
    getSession
};
