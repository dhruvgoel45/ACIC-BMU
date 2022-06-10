import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material";
import Button from "@mui/material/Button";

const Tourcard = ({ compan }) => {
  return (
    <Grid item xs={3}>
      <Paper elevation={11}>
        <img src={compan.image} alt="" width={250} />
        <box paddingX={1}>
          <Typography component="h2" variant="h4" align="center">
            {compan.name}
          </Typography>
          <Typography component="h4" variant="body2">
            Founded By:
            {compan.founded}
          </Typography>
          <Box
            SX={{
              display: "flex",
              alignments: "center",
            }}
          >
            <Typography align="center">
              <Button variant="contained">KNOW MORE</Button>
            </Typography>
          </Box>{" "}
        </box>{" "}
      </Paper>{" "}
    </Grid>
  );
};

export default Tourcard;
