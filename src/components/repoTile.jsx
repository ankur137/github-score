import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import { Box, Divider, withStyles } from "@material-ui/core";
import CallSplit from "@material-ui/icons/CallSplit";
import Grid from "@material-ui/core/Grid";
import Visibility from "@material-ui/icons/Visibility";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";

const styles = (theme) => ({
  root: {
    margin: theme.spacing(1),
    textAlign: "center",
  },
  content: {
    spacing: 10,
  },
  header: {
    textAlign: "center",
    spacing: 10,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  repoInfo: {
    textAlign: "center",
    display: "flex",
  },
  repoInfoElement: {},
});

class RepoTiles extends Component {
  constructor(props) {
    super(props);
    this.state = { repos: props.repos };
  }
  render() {
    const { classes } = this.props;
    console.log(classes);
    let key = -1;
    return (
      <div className={classes.root}>
        <Divider />
        <Grid container direction="row" justify="left">
          {this.state.repos.map((repo) => {
            key++;
            return (
              <Grid item xs={4}>
                <Card
                  key={`card_ + ${key}`}
                  className={classes.root}
                  variant="outlined"
                >
                  <Divider />
                  <CardContent className={classes.content}>
                    <BrandCardHeader
                      image={
                        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      }
                      extra={repo.title}
                    />
                    <Grid container direction="column" justify="center">
                      <Grid item xs>
                        <StarIcon
                          display="inline"
                          className={classes.repoInfoElement}
                          margin={12}
                        ></StarIcon>
                        <Typography variant="h4" display="inline">
                          {repo.stars}
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <CallSplit
                          display="inline"
                          className={classes.repoInfoElement}
                        ></CallSplit>
                        <Typography variant="h4" display="inline">
                          {repo.forks}
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <Visibility
                          display="inline"
                          className={classes.repoInfoElement}
                        ></Visibility>
                        <Typography variant="h4" display="inline">
                          {repo.watchers}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(RepoTiles);
