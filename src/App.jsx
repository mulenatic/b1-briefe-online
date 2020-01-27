import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import 'typeface-roboto';
import MenuIcon from "@material-ui/icons/Menu";
import LetterCard from './components/LetterCard/LetterCard';

function App() {
  return (
      <div >
	<AppBar position="static">
	  <Toolbar>
	    <IconButton edge="start"  color="inherit" aria-label="menu">
	      <MenuIcon />
	    </IconButton>
	    <Typography variant="h6" >
	      B1 Briefe Online
	    </Typography>
	  </Toolbar>
	</AppBar>
	<LetterCard />
      </div>
  );
}

export default App;
