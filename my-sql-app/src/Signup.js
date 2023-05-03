import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router";
import axios from "axios";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  useEffect(() => {});
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = () => {
    try {
      const config = {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      };
      axios
        .post(
          "http://localhost:3001/add",
          { name, email, phone, password },
          config
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };
  console.log(name, email, password, phone);
  return (
    <div>
      <form>
        <Card
          style={{
            border: "1.5px solid black",
            width: "450px",
            background: "white",
            marginTop: "30px",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "15px",
            height: "550px",
          }}
        >
          <Typography
            variant="h4"
            style={{
              margin: "8px",
              color: "#0a061d",
              borderRadius: "5px",
              padding: "4px",
              fontFamily: "Segoe UI",
            }}
          >
            Add you Entry
          </Typography>
          <CardContent>
            <TextField
              label="Name"
              value={name}
              onChange={handleName}
              required={true}
              fullWidth
            />
          </CardContent>
          <CardContent>
            <TextField
              label="Email"
              type="email"
              value={email}
              required={true}
              fullWidth
              onChange={handleEmail}
            />
          </CardContent>
          <CardContent>
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={handlePassword}
              required={true}
              fullWidth
            />
          </CardContent>
          <CardContent>
            <TextField
              label="Phone"
              type="number"
              value={phone}
              onChange={handlePhone}
              required={true}
              fullWidth
            />
          </CardContent>
          <Button
            style={{ margin: "20px", width: "150px" }}
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            style={{ color: "black" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Go Back
          </Button>
        </Card>
      </form>
    </div>
  );
};
