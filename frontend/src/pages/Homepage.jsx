import * as React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

export default function LandingPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          py: 8,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "60vh",
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Manage Your Tasks Efficiently
          </Typography>
          <Typography variant="h5" component="h2" paragraph>
            Keep track of your projects and tasks with ease. Organize your work,
            collaborate with teams, and get things done faster.
          </Typography>
          <Button variant="contained" color="primary" href="/signup">
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  Task Management
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Organize your tasks with ease using our intuitive interface.
                  Set deadlines, priorities, and track progress.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  Collaboration
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Work together with your team in real-time. Share tasks, assign
                  responsibilities, and communicate seamlessly.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  Analytics
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get insights into your productivity. Track completed tasks,
                  measure performance, and improve your workflow.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
