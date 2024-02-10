const Session = require('../models/sessionModel');
const customEmitter = require('../eventEmitter');

exports.createSession = async (req, res) => {
    try {
        const newSession = new Session(req.body);
        await newSession.save();
        res.status(201).json(newSession);
        customEmitter.emit('sessionCreated', newSession);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create session: ' + error.message });
    }
};

exports.readSessions = async (req, res) => {
    try {
        const sessions = await Session.find();
        console.log(sessions);
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ message: 'Failed to read sessions: ' + error.message });
    }
};

exports.getSession = async (req, res) => {
    try {
        const session = await Session.findById(req.params.id);
        if (session) {
            res.status(200).json(session);
        } else {
            res.status(404).json({ message: 'Session not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to get session: ' + error.message });
    }
};


exports.updateSession = async (req, res) => {
    try {
        const updatedSession = await Session.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedSession) {
            res.status(200).json(updatedSession);
            customEmitter.emit('sessionUpdated', updatedSession);
        } else {
            res.status(404).json({ message: 'Session not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update session: ' + error.message });
    }
};

exports.deleteSession = async (req, res) => {
    try {
        const session = await Session.findByIdAndDelete(req.params.id);
        if (session) {
            res.status(200).json({ message: 'Session deleted successfully' });
            customEmitter.emit('sessionDeleted', session);
        } else {
            res.status(404).json({ message: 'Session not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete session: ' + error.message });
    }
};
