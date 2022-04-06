import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Avatar, Button, Grid, IconButton, TextField } from "@mui/material";
import { Form, Stack } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function TabTest() {
  let id;
  let user = sessionStorage.getItem("user");
  let [rows, setRows] = React.useState([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (user === "null" || user === null || user === undefined) {
      toast.error("Login First!!");
      navigate("/");
    }
  }, []);

  if (user !== "null" && user !== null && user !== undefined) {
    user = JSON.parse(sessionStorage.getItem("user"));
    id = user.portalId;
  }

  const deleteMaterial = async (e) => {
    console.log(e.target.value);
    let baseId = e.target.value;
    await axios.post("http://localhost:8080/Faculty/deleteMaterial", null, {
      params: { baseId },
    });
  };
  React.useEffect(async () => {
    let response = await axios.get(
      "http://localhost:8080/Faculty/getStudyMaterial"
    );
    rows = response.data;
    console.log(rows);
    setRows(rows);
  }, []);
  let [disable, setDisable] = React.useState(false);

  const upload = async (e) => {
    let file = document.getElementById("file").files[0];
    let moduleName = document.getElementById("moduleName").value;
    let topicName = document.getElementById("topicName").value;
    setDisable(true);
    console.log(file);
    let formdata = new FormData();
    formdata.append("file", file);

    let resp = await axios.post(
      "http://localhost:8080/Faculty/addStudyMaterial",
      formdata,
      {
        params: {
          id,
          moduleName,
          topicName,
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (resp.data) {
      toast.success("File Uploaded Successfullly");
      return;
    } else {
      toast.error("File upload Error !!");
    }
  };
  return (
    <>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={4} align="center">
          <Paper
            elevation={4}
            style={{ width: "450px", height: "65vh", marginTop: "100px" }}
          >
            <div style={{ width: "400px" }}>
              <div className="pt-50">
                <Avatar style={{ background: "#1bbd7e" }}>
                  <LibraryBooksIcon />
                </Avatar>
                <h4 style={{ color: "#1bbd7e" }}>Upload StudyMaterial</h4>
              </div>
              <TextField
                id="moduleName"
                label="Subject "
                variant="outlined"
                style={{ marginTop: "30px" }}
                fullWidth
              />
              <div>
                <TextField
                  id="topicName"
                  label="Topic"
                  variant="outlined"
                  style={{ marginTop: "20px" }}
                  fullWidth
                />
              </div>
              <label htmlFor="contained-button-file">
                <div>
                  <label className="text-dark m-3 fw-bold" for="file">
                    Select Material
                  </label>
                </div>
                <input
                  id="file"
                  className="btn btn-success opacity-75"
                  type="file"
                  accept=".pdf,.doc"
                />
              </label>
              <div>
                <Button
                  className="my-4"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={disable}
                  onClick={upload}
                >
                  Upload
                </Button>
              </div>
            </div>
          </Paper>
          <Toaster position="top-center" reverseOrder={false} />
        </Grid>
        <Grid item xs={4} align="right">
          <Paper
            Paper
            elevation={4}
            style={{ width: "450px", height: "65vh", marginTop: "100px" }}
          >
            <TableContainer sx={{ maxHeight: "65vh" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell>Subject</TableCell>
                    <TableCell>Topic</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, i) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{rows[i].subjectName}</TableCell>
                      <TableCell>{rows[i].topicName}</TableCell>
                      <TableCell>{rows[i].uploadDate}</TableCell>

                      <TableCell>
                        {/* <Stack direction="row" alignItems="center" spacing={1}> */}
                        <button value={rows[i].baseId} onClick={deleteMaterial}>
                          Delete
                        </button>
                        {/* </Stack> */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
