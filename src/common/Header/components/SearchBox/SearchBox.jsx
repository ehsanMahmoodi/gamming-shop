import { Box } from "@mui/material";
import { Search } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useRef, useState } from "react";
import { useStyle } from "./SearchBox.style";

const SearchBox = () => {
  //  get css style
  const classes = useStyle();
  // handel to toggler sublist
  const [open, setOpen] = useState(false);
  const categoryBtn = useRef();
  document.addEventListener("click", (e) => {
    if (e.composedPath().includes(categoryBtn.current)) {
      return null;
    } else {
      setOpen(false);
    }
  });
  return (
    <>
      <Box
        component={"form"}
        className={classes.searchForm}
        onSubmit={(e) => e.preventDefault()}
      >
        <Box className="formItem">
          <Search />
          <input type="search" placeholder={"search games..."} />
          <button ref={categoryBtn} onClick={() => setOpen(!open)}>
            category
          </button>
        </Box>
      </Box>
      <List
        component="nav"
        className={classes.subMenu}
        sx={{
          display: open ? "block" : "none",
        }}
      >
        <ListItemButton>
          <ListItemText primary="Strategic Game" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Action Game" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="horror Game" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Adventure Game" />
        </ListItemButton>
      </List>
    </>
  );
};
export default SearchBox;
