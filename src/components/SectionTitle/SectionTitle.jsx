import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useStyle } from "./SectionTitle.style";
import { ChevronRight, KeyboardArrowDown } from "@mui/icons-material";

const SectionTitle = ({ title, textNavigate,pathName }) => {
  // get css style
  const classes = useStyle();
  return (
    <Box className={classes.sectionTitleWrraper}>
      <Typography varient={"h6"}>
        {title}
        <KeyboardArrowDown />
      </Typography>
      {textNavigate ? (
        <Link to={pathName}>
          {textNavigate}
          <ChevronRight />
        </Link>
      ) : (
        ""
      )}
    </Box>
  );
};
export default SectionTitle;
