import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Table } from "react-bootstrap";
import { Grid } from "@mui/material";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal(props) {
  const [open, setOpen] = React.useState(false);
  let [videoId, setId] = React.useState("");

  const handleOpen = () => {
    setId(props.videoId);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  console.log(props.videoId);
  return (
    <React.Fragment>
      <Button className="text-center" onClick={handleOpen}>
        Click to Play Recording
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 700, radius: 10 }}>
          <video
            src={`http://localhost:8080/Student/videoView?id=` + videoId}
            controls
            width="400"
          ></video>
          <Button onClick={handleClose}>Close Video</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function RecordingsList() {
  const [open, setOpen] = React.useState(false);
  let [recordList, setRecordList] = React.useState([]);

  const handleOpen = (e) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(async () => {
    let response = await axios.get("http://localhost:8080/Student/VideoList");
    console.log(response.data);
    let record = response.data;
    recordList = [...recordList, record];
    setRecordList(recordList);
  }, []);
  console.log(recordList);
  console.log("*********************************");
  return (
    <>
      <Grid container spacing={4} justifyContent="right">
        <Grid item>
          <Table striped bordered hover style={{ width: "500px" }}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Date</th>
                <th>Topic</th>
                <th>Videos</th>
              </tr>
            </thead>
            <tbody>
              {recordList.map((item,i) => (
                <tr>
                  <td>{item[i].moduleName}</td>
                  <td>{item[i].uploadDate}</td>
                  <td>{item[i].topicName}</td>
                  <td>
                    <Button value={item[i].objectId} onClick={handleOpen}>
                      Open modal
                    </Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="parent-modal-title"
                      aria-describedby="parent-modal-description"
                    >
                      <Box sx={{ ...style, width: 400 }}>
                        <p
                          className="display-6 text-center"
                          id="parent-modal-description"
                        >
                          Topic Name {item[i].moduleName}
                        </p>
                        <ChildModal videoId={item[i].objectId} />
                      </Box>
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Grid>
      </Grid>
    </>
  );
}
