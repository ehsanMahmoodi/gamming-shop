import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useStyle } from "./GameCard.style";
import { Skeleton } from "@mui/material";

const GameCard = ({
  cardImg,
  gameName,
  price,
  gameXp,
  platform,
  imgAlt,
  released,
  updated,
}) => {
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
        {platform?.map((platformItem) => {
          return (
            <Typography key={platformItem.id}>
              {platformItem.platform}
            </Typography>
          );
        })}
        {released && updated ? (
          <>
            <Typography>released : {released}</Typography>
            <Typography>updated : {updated}</Typography>
          </>
        ) : (
          ""
        )}
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Typography>{price}</Typography>
        {gameXp ? (
          <Typography>{gameXp}xp</Typography>
        ) : (
          <button>Add to Cart</button>
        )}
      </CardActions>
    </Card>
  );
};
export default GameCard;
