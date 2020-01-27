import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container } from '@material-ui/core';
import 'typeface-roboto';
import MenuIcon from "@material-ui/icons/Menu";
import LetterCard from './components/LetterCard/LetterCard';

class App extends Component {

    constructor() {
	super();
	this.state = {
	    lettersData: [],
	    loading: true,
	};
	
    }

    async componentDidMount() {

	try {
	    const data = await fetch('Letters.json');
	    const dataJSON = await data.json();

	    if (dataJSON) {
		this.setState({lettersData: dataJSON, loading: false });
	    }
	    
	} catch (e) {
	    console.log(e);
	}
    }

    createLetterCards = (lettersData) => {
	return lettersData.map((letterData) => <LetterCard letterData={ letterData } />);
    };
    

    render() {
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
	      <Container maxWidth="sm">
		{this.state.loading && <div>Loading...</div>}
		{!this.state.loading && this.createLetterCards(this.state.lettersData)}
	      </Container>
	    </div>
	);
    }
}

export default App;
