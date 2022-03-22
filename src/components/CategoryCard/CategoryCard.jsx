import { Box, Typography } from "@mui/material";
import { useStyle } from "./CategoryCard.style";

const CategoryCard = ({ categoryItem }) => {
  //  get css style
  const classes = useStyle();
  return (
    <Box className={classes.CategoryCard}>
      <Typography>{categoryItem}</Typography>
    </Box>
  );
};
export default CategoryCard;
