import { Grid, Paper } from "@mui/material"
import { Table } from "react-bootstrap"

export default function FacultyList() {


    let faculty = [
        {
            name: 'sagar', email: 'sagar@gmail.com', surname: 'sss', activity: 'Java'
        },
        {
            name: 'vishal', email: 'vishal@gmail.com', surname: 'sss', activity: 'Project'
        },
        {
            name: 'ganesh', email: 'ganesh@gmail.com', surname: 'sss', activity: 'Python'
        }
    ]

    return (
        <>
            <Grid align="center">
                <Paper elevation={10} style={{ width: '90vw', height: '500px', margin: '20px' }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>SurName</th>
                                <th>Activity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faculty.map((row) => (
                                <tr>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.surname}</td>
                                    <td>{row.activity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Paper>
            </Grid>
        </>
    )
}