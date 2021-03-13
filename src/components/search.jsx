import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Box, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "80%",
    marginLeft: "8%",
  },
  buttonStyle: {
    marginTop: "1.1%",
    marginLeft: "2%",
  },
});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Search props inside handleSubmit", this.props);
    this.props.onLoad();
  }

  render() {
    console.log("Search props", this.props);
    const { classes } = this.props;
    return (
      <div>
        <Box component="div" display="flex">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              className={classes.root}
              id="outlined-basic"
              label="Enter github username"
              variant="outlined"
              value={this.state.value}
              onChange={this.handleChange}
            />

            <Button
              className={classes.buttonStyle}
              variant="outlined"
              color="primary"
              onClick={this.handleSubmit}
            >
              Get Score
            </Button>
          </form>
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(Search);
