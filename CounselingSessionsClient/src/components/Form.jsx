import { Box, Button, FormControl, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { createSession, updateSession } from "../api/apifunctions";
import { SessionContext } from "../context/SessionContext";

const Form = ({ closeModal, edit = false }) => {
  const { state, dispatch } = useContext(SessionContext);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [clientName, setClientName] = useState("");
  const [topic, setTopic] = useState("");
  const [notes, setNotes] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (edit && state?.selected?._id) {
      const { _id, date, time, clientName, topic, notes } = state?.selected;
      setId(_id);
      setDate(new Date(date).toISOString().split("T")[0]);
      setTime(time);
      setClientName(clientName);
      setTopic(topic);
      setNotes(notes);
    }
  }, [edit, state?.selected._id]);

  const createNewSession = async () => {
    const data = {
      clientName,
      date,
      time,
      topic,
      notes,
    };
    const res = await createSession(data);
    if (res) {
      dispatch({ type: "ADD", payload: res });
      setDate("");
      setTime("");
      setClientName("");
      setTopic("");
      setNotes("");
    }
    closeModal();
  };

  const updateSelectedSession = async () => {
    const data = {
      clientName,
      date,
      time,
      topic,
      notes,
    };
    const res = await updateSession(id, data);
    if (res) {
      dispatch({ type: "UPDATE", payload: res });
      setDate("");
      setTime("");
      setClientName("");
      setTopic("");
      setNotes("");
    }
    closeModal();
  };

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 120,
        gap: 2,
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "start",
        height: "100%",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 2,
          height: "230px",
        }}>
        <TextField
          value={clientName}
          size="small"
          label="Client Name"
          variant="outlined"
          onChange={(e) => setClientName(e.target.value)}
        />
        <TextField
          value={topic}
          size="small"
          label="Topic"
          variant="outlined"
          onChange={(e) => setTopic(e.target.value)}
        />
        <TextField
          value={notes}
          size="small"
          label="Note"
          variant="outlined"
          multiline
          rows={4}
          onChange={(e) => setNotes(e.target.value)}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 2,
          height: "230px",
        }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            value={date}
            size="small"
            type="date"
            variant="outlined"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <TextField
            value={time}
            size="small"
            type="time"
            variant="outlined"
            onChange={(e) => setTime(e.target.value)}
          />
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            if (edit) {
              updateSelectedSession();
            } else {
              createNewSession();
            }
          }}
          disabled={!date || !time || !clientName || !topic || !notes}>
          Submit
        </Button>
      </Box>
    </FormControl>
  );
};
export default Form;
