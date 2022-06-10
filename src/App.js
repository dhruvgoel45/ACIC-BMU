import "./App.css";
import Tourcard from "./components/tourcard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "./components/Appbar";
import { Typography } from "@mui/material";
import Startups from "./Startups.json";
import Footer from "./components/footer";
import Slideshow from "./components/slideshow";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Slideshow></Slideshow>
      <Container>
        {Startups.map((Startup) => (
          <>
            <Typography
              variant="h4"
              component={"h2"}
              marginTop={5}
              marginBottom={3}
              align="center"
            >
              {Startup.name}
            </Typography>
            <Grid container spacing={5}>
              {Startup.company.map((compan, index) => (
                <Tourcard compan={compan} key={index} />
              ))}
            </Grid>
          </>
        ))}
        <p>
          The white swamphen (Porphyrio albus) was a rail found on Lord Howe
          Island, east of the Australian mainland. All contemporary accounts and
          illustrations were produced between 1788 and 1790, when the bird was
          first encountered by British ship crews. Today, two specimens exist:
          one in World Museum (pictured) in Liverpool, England, and the holotype
          in the Natural History Museum of Vienna. It is thought to have been
          most similar to the Australasian swamphen. The white swamphen was 36
          to 55 cm (14 to 22 in) long. Contemporary accounts indicate that
          individual bird plumage was white, blue, or mixed blue-and-white. The
          bird's bill, frontal shield and legs were red, and it had a claw (or
          spur) on its wing. It was probably either flightless or a poor flier;
          this and its docility made the bird easy prey for visiting humans, who
          killed it with sticks. Reportedly once common, the species may have
          been hunted to extinction before 1834, when Lord Howe Island was
          settled. (Full article...) Recently featured: Lake EstanciaDavid
          ScottFour Freedoms (Rockwell) ArchiveBy emailMore featured articles
          Did you know ... Garden Gate, Bulandshahr Garden Gate, Bulandshahr ...
          that Bulandshahr's ornate Garden Gate (pictured) was built on the site
          of a "filthy" drainage ravine? ... that Philadelphia Eagles wide
          receiver Britain Covey played quarterback in high school and led his
          team to 26 consecutive wins? ... that the temptation of Christ has
          been associated with Jebel Quruntul in the West Bank since at least
          the 4th century? ... that Luigi Gaggero conducted the Kyiv Symphony
          Orchestra in Germany in April 2022, restoring Lyatoshynsky's Symphony
          No. 3 to its 1951 version, with the last movement themed "Peace will
          conquer war"? ... that the Louis M. Martini Winery began selling wine
          on December 5, 1933 – the day on which Prohibition in the United
          States was repealed? ... that a former member of the French Senate
          ended up being exiled to the northern Central African Republic by the
          future emperor? ... that the documentary comedy films Being Canadian
          and When Jews Were Funny explore the filmmakers' cultural identity
          through interviews with dozens of comedians? ... that copies of the
          underground anti-war publication Liberated Barracks were found on
          ships carrying US troops to Vietnam? ArchiveStart a new
          articleNominate a The white swamphen (Porphyrio albus) was a rail
          found on Lord Howe Island, east of the Australian mainland. All
          contemporary accounts and illustrations were produced between 1788 and
          1790, when the bird was first encountered by British ship crews.
          Today, two specimens exist: one in World Museum (pictured) in
          Liverpool, England, and the holotype in the Natural History Museum of
          Vienna. It is thought to have been most similar to the Australasian
          swamphen. The white swamphen was 36 to 55 cm (14 to 22 in) long.
          Contemporary accounts indicate that individual bird plumage was white,
          blue, or mixed blue-and-white. The bird's bill, frontal shield and
          legs were red, and it had a claw (or spur) on its wing. It was
          probably either flightless or a poor flier; this and its docility made
          the bird easy prey for visiting humans, who killed it with sticks.
          Reportedly once common, the species may have been hunted to extinction
          before 1834, when Lord Howe Island was settled. (Full article...)
          Recently featured: Lake EstanciaDavid ScottFour Freedoms (Rockwell)
          ArchiveBy emailMore featured articles Did you know ... Garden Gate,
          Bulandshahr Garden Gate, Bulandshahr ... that Bulandshahr's ornate
          Garden Gate (pictured) was built on the site of a "filthy" drainage
          ravine? ... that Philadelphia Eagles wide receiver Britain Covey
          played quarterback in high school and led his team to 26 consecutive
          wins? ... that the temptation of Christ has been associated with Jebel
          Quruntul in the West Bank since at least the 4th century? ... that
          Luigi Gaggero conducted the Kyiv Symphony Orchestra in Germany in
          April 2022, restoring Lyatoshynsky's Symphony No. 3 to its 1951
          version, with the last movement themed "Peace will conquer war"? ...
          that the Louis M. Martini Winery began selling wine on December 5,
          1933 – the day on which Prohibition in the United States was repealed?
          ... that a former member of the French Senate ended up being exiled to
          the northern Central African Republic by the future emperor? ... that
          the documentary comedy films Being Canadian and When Jews Were Funny
          explore the filmmakers' cultural identity through interviews with
          dozens of comedians? ... that copies of the underground anti-war
          publication Liberated Barracks were found on ships carrying US troops
          to Vietnam? ArchiveStart a new articleNominate a
        </p>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
