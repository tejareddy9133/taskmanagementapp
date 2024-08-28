import React, { useState, useContext } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Login, isAuth, Logout } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    const credintials = { email, password };
    console.log(credintials);
    axios
      .post("http://localhost:4000/users/login", credintials)

      .then((data) => {
        console.log(data.data);
        if (data.data.token) {
          Login();
        } else {
          Logout();
        }
      })
      .catch((err) => {
        console.log(err.message);
        Logout();
      });
    console.log("ufcufufvux2fvqtucftdtf2fxy2t");
    console.log(isAuth);
  };
  console.log(isAuth);
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
