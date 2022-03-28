import Layout from "../../Layout/Layout";
import { Container, Grid } from "@mui/material";
import BigSlider from "../../components/BigSlider/BigSlider";
import { useStyle } from "./Home.style";
import SmallBaner from "../../components/SmallBaner/SmallBaner";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GameCard from "../../components/GameCard/GameCard";
import { top_selling_games } from "../../data/top_selling_games";
import { game_category_items } from "../../data/game_category_items";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Faq from "../../components/Faq/Faq";
import { useEffect } from "react";

const Home = () => {
  // get css style
  const classes = useStyle();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
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
        <Grid
          container
          mb={2}
          spacing={5}
          className={classes.topSellingGameSection}
        >
          <Grid item xs={12}>
            <SectionTitle
              title={"top selling games"}
              textNavigate={"all games"}
              pathName={"/all-games"}
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
        {/*Game Category*/}
        <Grid
          container
          mb={2}
          spacing={4}
          className={classes.gameCategorySection}
        >
          <Grid item xs={12}>
            <SectionTitle title={"game category"} />
          </Grid>
          {game_category_items.map((cateItem) => {
            return (
              <Grid key={cateItem.id} item xs={4} sm={4} md={2}>
                <CategoryCard categoryItem={cateItem.text} />
              </Grid>
            );
          })}
        </Grid>
        {/*Faq*/}
        <Grid container mb={2} spacing={4} className={classes.faqSection}>
          <Grid item xs={12}>
            <SectionTitle title={"faq"} />
          </Grid>
          <Grid item xs={12}>
            <Faq />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
export default Home;
