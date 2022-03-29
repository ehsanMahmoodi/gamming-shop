import Layout from "../../Layout/Layout";
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Container,
  Divider,
  Grid,
  ListItem,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import gameCartSlice, {
    buyGameAction,
    gameListAction,
} from "../../Redux/Slices/gameCartSlice";
import { DeleteOutline } from "@mui/icons-material";
import List from "@mui/material/List";
import { useStyle } from "./Cart.style";
import {Fragment, useEffect} from "react";
import NotingData from "../../components/NotingData/NotingData";
const Cart = () => {
  //  get css style
  const classes = useStyle();
  // get cart items
  const cartList = useSelector((store) => store.gameCartSlice);
  //  handel to remove single cart item
  const dispath = useDispatch();
  const removeCartItem = (gameItem) => {
    let filterGames = cartList.list.filter((game) => {
      return game.id !== gameItem;
    });
    dispath(gameListAction(filterGames));
      dispath(buyGameAction(filterGames.length))
  };
    //  handel to remove all cart items
    const clearCartItems = ()=>{
        dispath(gameListAction([]))
        dispath(buyGameAction(0))
    }
    useEffect(()=>{
        window.scroll(0,0)
    },[])
  return (
    <Layout>
      <Container maxWidth={false}>
        <Grid container justifyContent={"center"}>
          <Grid item xs={10} md={6}>
            {
              (cartList.list.length > 0 )? <>
                <List className={classes.cartList}>
                  {cartList.list?.map((listItem) => {
                    return (
                        <Fragment key={listItem.id}>
                          <ListItem>
                            <Avatar
                                className={"cart-avatar"}
                                src={listItem.background_image}
                            />
                            <ListItemText primary={listItem.name} />
                            <ButtonBase className={"card-btn"}>
                              <DeleteOutline
                                  onClick={(e) => removeCartItem(listItem.id)}
                              />
                            </ButtonBase>
                          </ListItem>
                          <Divider />
                        </Fragment>
                    );
                  })}
                </List>
                <Box className={classes.clearCart}>
                  <Button
                      variant="outlined"
                      onClick={clearCartItems}
                  >
                    Clear All
                  </Button>
                  <Button variant="contained">Buy</Button>
                </Box>
              </> : <NotingData/>
            }

          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
export default Cart;
