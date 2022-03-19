import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  sliderWrapper: {
    "& > div:nth-child(2)": {
      textAlign: "end",
      "& img": {
        borderRadius: "1.25rem",
        maxWidth: "100%",
        height: "100%",
      },
    },
  },
});
