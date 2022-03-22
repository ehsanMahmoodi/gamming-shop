import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  sliderWrraper: {
    height: "100% !important",
    "& .splide": {
      height: "100% !important",
    },
    "& div.splide__track": {
      height: "100% !important",
    },
    "& div.MuiAvatar-circular": {
      height: "100%",
      width: "100%",
      borderRadius: "1.25rem !important",
      cursor: "grabbing",
    },
    "& button.splide__arrow": {
      backgroundColor: "#3a3232",
      "& svg": {
        fill: "#fff",
      },
    },
  },
});
