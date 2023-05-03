import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Paper,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [fetchButton, setFetchButton] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3001/users")
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, [fetchButton]);
  const rowStyle = {
    border: "1px solid black",
  };
  return (
    <div>
      <h1>Users</h1>
      <TableContainer component={Paper}>
        <Table aria-label="users table">
          <TableHead style={{ background: "grey" }}>
            <TableRow>
              <TableCell style={rowStyle}>Username</TableCell>
              <TableCell style={rowStyle}>Email</TableCell>
              <TableCell style={rowStyle}>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell style={rowStyle}>{user.username}</TableCell>
                <TableCell style={rowStyle}>{user.email}</TableCell>
                <TableCell style={rowStyle}>{user.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={()=>{setFetchButton(true)}}>Fetch</Button>
      <Button variant="contained" style={{margin:'15px'}} onClick={()=>{navigate('signup')}}>Add user</Button>
    </div>
  );
};
