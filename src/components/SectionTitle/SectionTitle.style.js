import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  sectionTitleWrraper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textTransform: "capitalize",
    fontSize: "0.93rem",
    marginTop: "1.43rem",
    "& p": {
      background: "#4c4c4c",
      padding: "0.37rem 0.62rem",
      display: "flex",
    },
    "& a": {
      background: "#4c4c4c",
      padding: "0.37rem 0.62rem",
      display: "flex",
    },
  },
});
