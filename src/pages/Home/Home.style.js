import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  sliderWrapper: {
    "& > div:nth-child(2)": {
      "@media(max-width:600px)": {
        margin: "0 auto",
      },
    },
  },
});
