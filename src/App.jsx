import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import 'typeface-roboto';
import MenuIcon from "@material-ui/icons/Menu";
import LetterCard from './components/LetterCard/LetterCard';

class App extends Component {

    constructor() {
	super();
	this.state = {
	    expanded: false,
	    demoData: {
		title: "Heizungsproblem",
		problem: `In Ihrer Wohnung haben Sie seit einiger Zeit Probleme mit der Heizung. Der Vermieter soll die Heizung reparieren lassen. Leider k&ouml;nnen Sie Ihren Vermieter telefonisch nicht erreichen, deshalb schreiben Sie einen Brief.</p>
<p>Grund des Schreibens:</p>
<p>a - Problem: wie lange schon?<br/>b - Termin f&uuml;r Reparatur<br/>c - wie Sie erreichbar sind</p>`,
		solution: `<p><br/>Sehr geehrter Herr M&ouml;ller,</p>
<p>ich schreibe Ihnen, weil ich in meiner Wohnung ein Problem mit der Heizung habe. Ich habe Sie angerufen, aber leider konnte ich Sie nicht erreichen. Es ist sehr dringend, denn seit drei Tagen ist die Heizung kaputt. Seit gestern ist es drau&szlig;en kalt und in der Wohnung sind nur 16 Grad. Das ist zu kalt f&uuml;r mich und meine Familie - meine Tochter hat schon eine Erk&auml;ltung!<br/>Wann k&ouml;nnen Sie die Heizung reparieren oder einen Handwerker schicken? Mein Mann (meine Frau) ist jeden Nachmittag zu Hause, Sie k&ouml;nnen einfach anrufen und kommen. Oder Sie rufen mich an, meine Handynummer ist 0 1520 278494 ...</p>
<p>Mit freundlichen Gr&uuml;&szlig;en</p>
<p>(Ihr Vor- und Familienname)</p>`
	    }
	};
    }

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
	      <LetterCard letterData={ this.state.demoData } />
	    </div>
	);
    }
}

export default App;
