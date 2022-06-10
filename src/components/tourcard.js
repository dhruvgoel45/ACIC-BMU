import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material";

const Tourcard = ({ compan }) => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAACWlpYwMDBXV1cLCwtycnLx8fG5ubn09PSnp6fo6Oj4+PhlZWXGxsZTU1OJiYne3t7T09N5eXk7Ozujo6NDQ0OwsLDMzMwmJiYqKioTExNOTk6bm5ulpaVJSUl/f39qamocD3BiAAACUUlEQVR4nO3Zy47aQBRFUQfcbeNXYzdgCBDI//9kIkWROo0fVY6Dz63sPb6DWhKDIxNFREREREREREREZLnstH7stF/6WbPVfP3S2Wrph81UUnb7ghGu+nyBCKtzPzAEYX4Z8IUg3A767AvTEZ91Yb0bBZoWFu/jPtPCzMVnWNic3IBWhf0TJhDh1dlnU1i9eAANCvM3H59B4diEsS4cnzC2hfXBH2hJ6DZhDAsdJ4xZYd9XmFCEG/cJY1PoM2EsCge/wgQgzOO/8ukLvSeMMeGECWNKOGnCGBJOnDB2hFMnjBVhs54LqCn0+ApjUzjbD1RWOPxPSwjCsRWz2xceQ86c8PAt/3niDjQmPGTJr5MwhbffvChI4aVNPp6EJnxrN59OghLGbfF4Eo4wTjt4UTDCsocXhSEs06ET48LbCC8yL2zGT4wLHUKIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q/ih69Jv9W6TH9O9hzDOqiZf+tEu5U2abV8vZw/bH63j+6qt6mRpx6eKpKna1Xu8nurq6Lwr79f2WG+WhCX1Mb3ey92Mrk7r7ft2nx7z4unAfwx7rHy28OXZwleECBEiRIgQIcL/UfgDbG8zF85LRN4AAAAASUVORK5CYII="
          alt=""
          ClassName="img"
        />
        <box paddingX={1}>
          <Typography component="h2" variant="h4">
            {" "}
            Event 1{" "}
          </Typography>{" "}
          <Box
            SX={{
              display: "flex",
              alignments: "center",
            }}
          >
            <Typography variant="body2" component="p">
              {" "}
              ACIC - BMU{" "}
            </Typography>{" "}
          </Box>{" "}
        </box>{" "}
      </Paper>{" "}
    </Grid>
  );
};

export default Tourcard;
