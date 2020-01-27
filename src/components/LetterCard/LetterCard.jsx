import React, { Component } from 'react';
import { CardHeader, CardContent, Typography, Card, CardActions, IconButton, Collapse, Link } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";

const ExpandIcon = ({ expanded }) =>
      expanded ? <ExpandLess /> : <ExpandMore />;

export default class LetterCard extends Component {

    constructor(props) {
	super(props);
	this.state = {
	    expanded: false,
	};
	
    }

    createMarkup = (html) => ( { __html: html });

    toggleExpanded = () => {
	this.setState({ expanded: !this.state.expanded });
    };

    generateSubheader = (letterData) => {
	const source = letterData.source ? letterData.source : '?';
	const date = letterData.date ? letterData.date : '?';
	
	return `${source} - ${date}`;

    };
					  

    render() {
	return (
	    <Card variant="outlined">
	      <CardHeader title={this.props.letterData.title} subheader={ this.generateSubheader(this.props.letterData) } />
	      <CardContent>
		<Typography dangerouslySetInnerHTML={this.createMarkup(this.props.letterData.problem)}>
		</Typography>
	      </CardContent>
	      <CardActions>
		<IconButton onClick={this.toggleExpanded}>
		  <ExpandIcon expanded={this.state.expanded} />
		</IconButton>
	      </CardActions>
	      <Collapse in={this.state.expanded}>
		<CardContent>
		  <Typography dangerouslySetInnerHTML={this.createMarkup(this.props.letterData.solution)}>
		  </Typography>
		</CardContent>
	      </Collapse>
	    </Card>
	)
    }

}
