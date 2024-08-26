import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p: 3,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        textAlign: "center",
      }}
    >
      <Typography variant="body1">
        MyApp © {new Date().getFullYear()}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Home
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          About
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Contact
        </Link>
      </Box>
    </Box>
  );
}
