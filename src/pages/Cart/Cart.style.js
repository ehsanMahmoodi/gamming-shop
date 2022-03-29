import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  cartList: {
    minHeight: "calc(100vh - 26.76rem)",
    "& li:hover": {
      backgroundColor: "#3c3c3c7d",
    },
    "& .cart-avatar": {
      marginRight: "1rem",
      width: "3.12rem",
      height: "3.12rem",
    },
    "& .card-btn": {
      cursor: "pointer",
      padding: "0.31rem",
      borderRadius: "3.12rem",
      "& svg": {
        fill: "#ff2e2ec4",
      },
    },
  },
  clearCart: {
    marginTop: "0.75rem",
    display: "flex",
    justifyContent: "space-around",
    "& button": {
      height: "1.75rem",
    },
  },
});
