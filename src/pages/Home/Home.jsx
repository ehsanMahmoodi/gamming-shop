import Layout from "../../Layout/Layout";
import { Container, Grid } from "@mui/material";
import BigSlider from "../../components/BigSlider/BigSlider";
import small_slider from "../../assets/images/small-slider.jpg";
import { useStyle } from "./Home.style";
import SmallBaner from "../../components/SmallBaner/SmallBaner";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GameCard from "../../components/GameCard/GameCard";
import call_of_duty from "../../assets/images/call of duty black ops 3.jpg";
import call_of_duty2 from "../../assets/images/gta v.png";
import hitman from "../../assets/images/hitman-agent-47.jpg";
import test from "../../assets/images/murdereo.jpg";
import dishonored from "../../assets/images/dishonored-death-of-the-outsider.jpg";
import Tom_Clancys_Rainbow_Six_Siege from "../../assets/images/Tom-Clancys-Rainbow-Six-Siege.jpg";
import { top_selling_games } from "../../data/top_selling_games";
const Home = () => {
  // get css style
  const classes = useStyle();
  return (
    <Layout>
      <Container maxWidth={false}>
        {/*Slider*/}
        <Grid container my={1} spacing={5} className={classes.sliderWrapper}>
          <Grid item xs={12} sm={9}>
            <BigSlider />
          </Grid>
          <Grid item xs={8} sm={3}>
            <SmallBaner />
          </Grid>
        </Grid>
        {/*Top Selling Games*/}
        <Grid container spacing={5} className={classes.topSellingGameSection}>
          <Grid item xs={12}>
            <SectionTitle
              title={"top selling games"}
              textNavigate={"all games"}
            />
          </Grid>
          {top_selling_games.map((games) => {
            return (
              <Grid key={games.id} item xs={12} sm={6} md={3} lg={2}>
                <GameCard
                  cardImg={games.gameImg}
                  imgAlt={games.alt}
                  gameName={games.gameName}
                  platform={games.gamePlatform}
                  gameXp={games.gameXp}
                  price={games.gamePrice}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
};
export default Home;
