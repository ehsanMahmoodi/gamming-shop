import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useStyle } from "./Footer.style";
import { Instagram, Telegram, Twitter } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  // get css style
  const classes = useStyle();
  return (
    <Grid container spacing={5} className={classes.footerSection}>
      <Grid item xs={12} md={4}>
        <Typography className={classes.sectionTitle} variant={"h6"}>
          gamming master
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est
          in recusandae sint veritatis. Culpa delectus, deserunt dolore eaque
          ipsum labore minima, molestias nemo quidem quis ratione repellendus
          similique voluptate.
        </Typography>
      </Grid>
      <Grid item xs={6} md={4}>
        <Typography className={classes.sectionTitle} variant={"h6"}>
          quick access
        </Typography>
        <nav className={classes.navLinks}>
          <Link to={"/"}>weblog</Link>
          <Link to={"/"}>about us</Link>
          <Link to={"/"}>faq</Link>
          <Link to={"/"}>contact us</Link>
        </nav>
      </Grid>
      <Grid item xs={6} md={4}>
        <Typography className={classes.sectionTitle} variant={"h6"}>
          Communication Bridges
        </Typography>
        <nav className={classes.navLinks}>
          <Link to={"https://en-gb.facebook.com/"}>
            <FacebookIcon />
            facebook
          </Link>
          <Link to={"https://twitter.com/?lang=en"}>
            <Twitter />
            Twitter
          </Link>
          <Link to={"https://www.instagram.com"}>
            <Instagram />
            Instagram
          </Link>
          <Link to={"https://telegram.org/"}>
            <Telegram />
            Telegram
          </Link>
        </nav>
      </Grid>
      <Grid item xs={12} className={classes.siteAddress}>
        <Typography>mahmoodie24m@gmail.com</Typography>
        <Typography>© copyright by Gamming Master</Typography>
      </Grid>
    </Grid>
  );
};
export default Footer;
