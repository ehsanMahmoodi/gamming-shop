import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  searchForm: {
    background: "#616161",
    height: "2.5rem",
    borderRadius: "1.75rem",
    "& .formItem": {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0 0.37rem",
      "& svg": {
        cursor: "pointer",
        width: "1.62rem",
      },
      "& input": {
        width: "100%",
        height: "100%",
        border: "none",
        outline: "none",
        background: "transparent",
        fontSize: "0.87rem",
        letterSpacing: "0.06rem",
        padding: "0 0.62rem",
        "&::placeholder": {
          color: "#d2d2d2",
        },
      },
      "& button": {
        border: "none",
        outline: "none",
        background: "transparent",
        height: "100%",
        padding: "0 0.5rem",
        cursor: "pointer",
        fontSize: "0.93rem",
      },
    },
  },
  subMenu: {
    position: "absolute !important",
    background: "#7e7e7e",
    width: "96%",
    top: "2.62rem",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "0.62rem",
  },
});
