import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  gamecardWrraper: {
    margin: "0 auto",
    position: "relative",
    height: "100% !important",
    backgroundColor: "#212121 !important",
    "@media(min-width:900px)": {
      height: "100% !important",
      maxHeight: "25.5rem !important",
    },
  },
  gameImg: {
    height: "11rem",
  },
  gameName: {
    padding: "0.18rem 0.62rem !important",
    textTransform: "capitalize",
  },
  gamePlatforms: {
    padding: "0.18rem 0.62rem !important",
    marginBottom: "4rem",
  },
  cardActions: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    "& p:nth-child(2)": {
      backgroundColor: "#1a7a33",
      padding: "0 0.62rem",
      borderRadius: "1.37rem",
      color: "#fff",
      fontSize: "0.87rem",
    },
    "& button": {
      border: "none",
      backgroundColor: "#114a78",
      padding: "0.31rem 0.62rem",
      textAlign: "center",
      borderRadius: "3.12rem",
      fontSize: "0.93rem",
      cursor: "pointer",
    },
  },
});
