import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useStyle } from "./GameCard.style";
import { Skeleton } from "@mui/material";
const GameCard = ({ cardImg, gameName, price, gameXp, platform, imgAlt }) => {
  // get css style
  const classes = useStyle();
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.gamecardWrraper}>
      {cardImg ? (
        <CardMedia
          className={classes.gameImg}
          component="img"
          image={cardImg}
          alt={imgAlt}
        />
      ) : (
        <Skeleton variant="rectangular" width={"100%"} height={200} />
      )}
      <CardContent className={classes.gameName}>
        <Typography gutterBottom variant="h5" component="div">
          {gameName}
        </Typography>
      </CardContent>
      <CardContent className={classes.gamePlatforms}>
        {platform.map((platformItem) => {
          return (
            <Typography key={platformItem.id}>
              {platformItem.platform}
            </Typography>
          );
        })}
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Typography>{price}</Typography>
        <Typography>{gameXp}xp</Typography>
      </CardActions>
    </Card>
  );
};
export default GameCard;
