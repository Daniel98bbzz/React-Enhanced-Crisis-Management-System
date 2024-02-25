import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import { deleteSession, readSessions } from "../api/apifunctions";

const Buttons = ({ setNewSessionModal, setEditSessionModal }) => {
  const { state, dispatch } = useContext(SessionContext);
  const readAll = async () => {
    const data = await readSessions();
    dispatch({ type: "SET", payload: data });
  };
  const deleteSelected = () => {
    const res = deleteSession(state?.selected?._id);
    if (res) dispatch({ type: "REMOVE", payload: state?.selected?._id });
  };

  return (
    <Box display="flex" gap={2} m={4}>
      <Button
        variant="contained"
        sx={{ textTransform: "none" }}
        onClick={readAll}>
        Read All Sessions
      </Button>
      <Button
        variant="contained"
        sx={{ textTransform: "none" }}
        onClick={() => setNewSessionModal(true)}>
        Create New Session
      </Button>
      <Button
        variant="contained"
        sx={{ textTransform: "none" }}
        disabled={!state?.selected._id}
        color="success"
        onClick={() => setEditSessionModal(true)}>
        Update Session
      </Button>
      <Button
        variant="contained"
        sx={{ textTransform: "none" }}
        disabled={!state?.selected._id}
        color="error"
        onClick={deleteSelected}>
        Delete Session
      </Button>
    </Box>
  );
};
export default Buttons;
