import Layout from "../../Layout/Layout";
import { Container, Grid } from "@mui/material";
import BigSlider from "../../components/BigSlider/BigSlider";
import small_slider from "../../assets/images/small-slider.jpg";
import { useStyle } from "./Home.style";
import SmallBaner from "../../components/SmallBaner/SmallBaner";

const Home = () => {
  // get css style
  const classes = useStyle();
  return (
    <Layout>
      <Container maxWidth={false}>
        <Grid container my={1} spacing={5} className={classes.sliderWrapper}>
          <Grid item xs={12} sm={9}>
            <BigSlider />
          </Grid>
          <Grid item xs={8} sm={3}>
            <SmallBaner />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
export default Home;
