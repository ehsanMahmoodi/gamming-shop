import { Avatar } from "@mui/material";
import small_baner from "../../assets/images/small-slider.jpg";
import { useStyle } from "./SmallBaner.style";
const SmallBaner = () => {
  //   get css style
  const classes = useStyle();
  return <Avatar className={classes.smallBanerImg} src={small_baner} />;
};
export default SmallBaner;
