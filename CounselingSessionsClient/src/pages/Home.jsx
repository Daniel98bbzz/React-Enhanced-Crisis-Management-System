import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Header from "../components/Header";
import Table from "../components/Table";

import Form from "../components/Form";
import Buttons from "../components/Buttons";
import { SessionContext } from "../context/SessionContext";
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const Home = () => {
  const [newSessionModal, setNewSessionModal] = useState(false);
  const [editSessionModal, setEditSessionModal] = useState(false);

  return (
    <Box width={"100%"}>
      <Header title="Crisis Counseling Management" />
      <Buttons
        setNewSessionModal={setNewSessionModal}
        setEditSessionModal={setEditSessionModal}
      />

      <Table />
      <div>
        <Modal
          open={newSessionModal}
          onClose={() => setNewSessionModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add new session form
            </Typography>
            <Form closeModal={() => setNewSessionModal(false)} />
          </Box>
        </Modal>
        <Modal
          open={editSessionModal}
          onClose={() => setEditSessionModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit Session
            </Typography>
            <Form closeModal={() => setEditSessionModal(false)} edit />
          </Box>
        </Modal>
      </div>
    </Box>
  );
};
export default Home;
