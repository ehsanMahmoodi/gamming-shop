import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  sliderWrapper: {
    "& > div:nth-child(2)": {
      "@media(max-width:600px)": {
        margin: "0 auto",
      },
    },
  },
  topSellingGameSection:{
    "& >div":{
      "@media(min-width:900px) and (max-width:1200px)":{
        "&:nth-child(3)":{
          display:"none"
        },
        "&:nth-child(5)":{
          display:"none"
        }
      }
    }
  }
});
