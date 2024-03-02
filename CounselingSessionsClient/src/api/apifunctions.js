import axios from "axios";

const URL = "https://enhanced-counseling-sessions-management.onrender.com/sessions/";

export const readSessions = async () => {
  try {
    const sessions = await axios.get(URL);
    return sessions.data;
  } catch (error) {
    console.log(error);
  }
};

export const createSession = async (session) => {
  try {
    const newSession = await axios.post(URL, session);
    return newSession.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteSession = async (id) => {
  try {
    const deletedSession = await axios.delete(URL + id);
    return deletedSession.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateSession = async (id, session) => {
  try {
    const updatedSession = await axios.put(URL + id, session);
    return updatedSession.data;
  } catch (error) {
    console.log(error);
  }
};
