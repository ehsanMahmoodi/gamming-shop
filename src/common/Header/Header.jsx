import { Box, Grid, Typography } from "@mui/material";
import { useStyle } from "./Header.style";
import { Search, ShoppingBasket, SportsEsports } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useContext } from "react";
import { PublicContext } from "../../context";
import SearchBox from "./components/SearchBox/SearchBox";

const Header = () => {
  // get css style
  const classes = useStyle();
  // get state from context
  const {
    openCollapsedMenu,
    setOpenCollapsedMenu,
    openCollapsedSearchBox,
    setOpenCollapsedSearchBox,
  } = useContext(PublicContext);

  return (
    <Box component={"header"} className={classes.header}>
      <Grid container className={"row"}>
        <Grid item xs={6} md={4} className={classes.siteLogo}>
          <Typography variant={"h5"}>Gamming Master</Typography>
          <SportsEsports />
        </Grid>
        <Grid item xs={12} md={5} className={classes.headerSearchBox}>
          <SearchBox />
        </Grid>
        <Grid item xs={4} md={3} className={classes.cart}>
          <Typography> cart</Typography>
          <ShoppingBasket />
        </Grid>
        <Grid item xs={6} className={classes.collapsedMenu}>
          <nav>
            <MenuIcon
              onClick={() => {
                setOpenCollapsedMenu(!openCollapsedMenu);
                setOpenCollapsedSearchBox(false);
              }}
            />
            <Search
              onClick={() => {
                setOpenCollapsedSearchBox(!openCollapsedSearchBox);
                setOpenCollapsedMenu(false);
              }}
            />
            <ShoppingBasket />
          </nav>
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.collapsedSubMenu}
          sx={{
            display: openCollapsedMenu ? "block" : "none",
          }}
        >
          <List component="nav">
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="About Us" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Weblog" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Cantact Us" />
            </ListItemButton>
          </List>
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.collapsedSearchBox}
          sx={{
            display: openCollapsedSearchBox ? "block" : "none",
          }}
        >
          <SearchBox />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
