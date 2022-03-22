import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  footerSection: {
    padding: "0 1.37rem",
    marginTop: "1.37rem !important",
    background: "#212121",
  },
  sectionTitle: {
    color: "#0e950e",
    marginBottom: "1rem !important",
    textTransform: "capitalize",
  },
  navLinks: {
    display: "flex",
    flexDirection: "column",
    textTransform: "capitalize",
    alignItems: "flex-start",
    "& a": {
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0.25rem 0",
      "&:hover": {
        color: "#ffc41e",
      },
      "& svg": {
        marginRight: "5px",
        transition: "fill 0.2s ease-in-out",
      },
      "&:nth-child(1):hover svg": {
        fill: "#4980f3",
      },
      "&:nth-child(2):hover svg": {
        fill: "#00acee",
        borderRadius: "0.18rem",
      },
      "&:nth-child(3):hover svg": {
        borderRadius: "0.31rem",
        background:
          "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
      },
      "&:nth-child(4):hover svg": {
        fill: "#139ed8",
      },
    },
  },
  siteAddress: {
    display: "flex",
    justifyContent: "space-between",
    "@media(max-width:547px)": {
      flexDirection: "column !important",
      alignItems: "center",
    },
  },
});
