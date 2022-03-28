import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  paginationWrapper: {
    "& nav.MuiPagination-root": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& button.MuiButtonBase-root": {
        color: "#fff",
        "&.Mui-selected": {
          backgroundColor: "#7a28ff",
        },
        "&:hover": {
          backgroundColor: "#5c1dc9",
        },
      },
    },
  },
});
