import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import big_slider_1 from "../../assets/images/big-slider.jpg";
import { useStyle } from "./BigSlider.style";
import {Avatar, Box} from "@mui/material";

const BigSlider = () => {
  //  get css style
  const classes = useStyle();
  return (
   <Box className={classes.sliderWrraper}>
       <Splide
           options={{
               rewind: true,
               type: "loop",
               gap: "5rem",
               autoplay: true,
               pauseOnHover: false,
               resetProgress: false,
               arrows: "slider",
           }}
       >
           <SplideSlide>
               <Avatar src={big_slider_1} alt="Image 1"/>
           </SplideSlide>
           <SplideSlide>
               <Avatar src={big_slider_1} alt="Image 2"/>
           </SplideSlide>
       </Splide>
   </Box>
  );
};
export default BigSlider;
