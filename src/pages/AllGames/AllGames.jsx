import Layout from "../../Layout/Layout";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import allGamesSlice, {
    allGamesAction,
} from "../../Redux/Slices/allGamesSlice";
import {Container, Grid} from "@mui/material";
import GameCard from "../../components/GameCard/GameCard";
import Pagination from "@mui/material/Pagination";
import {useStyle} from "./AllGames.style";

const AllGames = () => {
    // get css style
    const classes = useStyle();
    const gameList = useSelector((store) => store.allGamesSlice);
    const dispath = useDispatch();
    // console.log(gameList);
    useEffect(() => {
        dispath(allGamesAction());
    }, []);
    // handel pagination
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        dispath(allGamesAction(value));
        window.scroll(0, 0);
    };
    return (
        <Layout>
            <Container maxWidth={false}>
                <Grid container mt={1} spacing={5}>
                    {gameList?.games?.results?.map((gameItem) => {
                        return (
                            <Grid key={gameItem.id} item xs={12} sm={6} md={3}>
                                <GameCard
                                    imgAlt={gameItem.name}
                                    gameName={gameItem.name}
                                    price={"100 $"}
                                    cardImg={gameItem.background_image}
                                    released={gameItem.released}
                                    updated={gameItem.updated}
                                />
                            </Grid>
                        );
                    })}
                    {
                        (gameList.games.results) ? <Grid item xs={12} className={classes.paginationWrapper}>
                            <Pagination
                                count={70}
                                page={page}
                                siblingCount={4}
                                onChange={handleChange}
                            />
                        </Grid> : ''
                    }
                </Grid>
            </Container>
        </Layout>
    );
};
export default AllGames;
