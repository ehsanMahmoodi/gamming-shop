import { Badge, Box, Grid, Typography } from "@mui/material";
import { useStyle } from "./Header.style";
import { Search, ShoppingBasket, SportsEsports } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useContext } from "react";
import { PublicContext } from "../../context";
import SearchBox from "./components/SearchBox/SearchBox";
import { useSelector } from "react-redux";
import gameCartSlice from "../../Redux/Slices/gameCartSlice";
import {Link} from "react-router-dom";

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
  // get number of cart
  const cartCount = useSelector((store) => store.gameCartSlice);
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
          {cartCount.count ? (
            <Badge
              badgeContent={cartCount?.count ? cartCount.count : ""}
              color="secondary"
            >
              <Link to={'/cart'}> cart
              <ShoppingBasket />
              </Link>
            </Badge>
          ) : (
              <Link to={'/cart'}> cart
                <ShoppingBasket />
              </Link>
          )}
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
