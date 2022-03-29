import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  header: {
    zIndex: "2",
    backgroundColor: "#212121",
    minHeight: "4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.12rem 0",
    position: "sticky",
    top: "0",
    "& div.row": {
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 2rem",
    },
  },
  siteLogo: {
    marginLeft: "1rem",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    "& a": {
      marginRight: "0.43rem",
      fontSize: "1.5rem",
    },
    "@media(max-width:512px)": {
      "& svg": {
        display: "none",
      },
      "& a": {
        fontSize: "0.93rem",
      },
    },
  },
  headerSearchBox: {
    position: "relative",
    "@media(max-width:900px)": {
      display: "none",
    },
  },
  cart: {
    display: "flex",
    justifyContent: "flex-end",
    "& a": {
      display: "flex",
      alignItems: "center",
      "& svg": {
        marginLeft: "0.5rem",
      },
      "&:hover": {
        color: "#ffc41e",
        "& svg": {
          fill: "#ffc41e",
        },
      },
    },
    "@media(max-width:900px)": {
      display: "none",
    },
  },
  collapsedMenu: {
    "& nav": {
      display: "flex",
      justifyContent: "flex-end",
      "& svg": {
        marginLeft: "0.62rem",
        cursor: "pointer",
      },
    },
    "@media(min-width:900px)": {
      display: "none",
    },
  },
  collapsedSubMenu: {
    "& nav": {
      "& > div:hover": {
        backgroundColor: "#363636ab",
      },
    },
  },
  collapsedSearchBox: {
    position: "relative",
    marginTop: "0.62rem !important",
  },
});
