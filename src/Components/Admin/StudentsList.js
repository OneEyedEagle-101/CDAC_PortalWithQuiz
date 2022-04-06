import { Grid, Paper } from "@mui/material"
import { Table } from "react-bootstrap"

export default function StudentsList() {

    let student = [
        {
            id: "1", name: 'sagar', email: 'sagar@gmail.com', surname: 'sss', quiz: '20'
        },
        {
            id: "2", name: 'vishal', email: 'vishal@gmail.com', surname: 'sss', quiz: '10'
        },
        {
            id: "3", name: 'ganesh', email: 'ganesh@gmail.com', surname: 'sss', quiz: '10'
        }
    ]

    return (
        <>
            <Grid align="center">
                <Paper elevation={10} style={{ width: '90vw', height: '500px', margin: '20px' }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>SurName</th>
                                <th>Quiz Attempted</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.map((row) => (
                                <tr>
                                    <td>{row.id}</td>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.surname}</td>
                                    <td>{row.quiz}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Paper>
            </Grid>
        </>
    )
}