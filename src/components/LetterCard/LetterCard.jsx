import React, { Component } from 'react';
import { CardHeader, CardContent, Typography, Card, CardActions, IconButton, Collapse } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";

const ExpandIcon = ({ expanded }) =>
      !expanded ? <ExpandLess /> : <ExpandMore />;

export default class LetterCard extends Component {

    constructor(props) {
	super(props);
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

    createMarkup = (html) => ( { __html: html });

    toggleExpanded = () => {
	this.setState({ expanded: !this.state.expanded });
    };
    

    render() {
	return (
	    <Card>
	      <CardHeader title={this.state.demoData.title}/>
	      <CardContent>
		<Typography dangerouslySetInnerHTML={this.createMarkup(this.state.demoData.problem)}>
		</Typography>
	      </CardContent>
	      <CardActions>
		<IconButton onClick={this.toggleExpanded}>
		  <ExpandIcon expanded={this.state.expanded} />
		</IconButton>
	      </CardActions>
	      <Collapse in={this.state.expanded}>
		<CardContent>
		  <Typography dangerouslySetInnerHTML={this.createMarkup(this.state.demoData.solution)}>
		  </Typography>
		</CardContent>
	      </Collapse>
	    </Card>

	)
    }

}
