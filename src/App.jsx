import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import 'typeface-roboto';
import MenuIcon from "@material-ui/icons/Menu";


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
      </div>
  );
}

export default App;
