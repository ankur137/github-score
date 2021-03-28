import logo from "./logo.svg";
import "./App.css";
import Search from "./components/search";
import { Component } from "react";
import Loader from "./components/loader";
import Results from "./components/results";
import ButtonAppBar from "./components/appBar";
import {
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import theme from "./theme";
import "typeface-roboto";
import palette from "./theme/palette";
import LineChart from "./components/chart";
import Repos from "./components/repoTile";
import LeaderBoard from "./components/leaderboard";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: "-8px",
    backgroundColor: palette.primary.light,
  },
});

const AppLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <App />
        ``
        <div>{children}</div>
      </div>
    </ThemeProvider>
  );
};

class App extends Component {
  state = {
    showLoader: false,
    searchCompleted: false,
    repos: [
      {
        title: "Github Repo 1",
        stars: 21,
        forks: 10,
        watchers: 120,
      },
      {
        title: "Github Repo 2",
        stars: 50,
        forks: 3,
        watchers: 1,
      },
      {
        title: "Github Repo 3",
        stars: 0,
        forks: 0,
        watchers: 0,
      },
      {
        title: "Github Repo 4",
        stars: 200,
        forks: 30,
        watchers: 400,
      },
      {
        title: "Github Repo 5",
        stars: 2,
        forks: 10,
        watchers: 3,
      },
    ],
  };
  onLoad = () => {
    var showLoader = false;
    this.setState({ showLoader });
    showLoader = true;
    this.setState({ showLoader });
  };
  onSearchComplete = () => {
    const searchCompleted = true;
    console.log("Search Completed App");
    this.setState({ searchCompleted });
  };
  render() {
    return (
      <div>
        <ButtonAppBar />
        <Search onLoad={this.onLoad} />
        {this.state.showLoader && (
          <Loader
            onSearchCompleted={this.onSearchComplete}
            isSearchComplete={this.state.searchCompleted}
          />
        )}
        {this.state.searchCompleted && <LineChart />}
        {this.state.searchCompleted && <Repos repos={this.state.repos} />}
        {this.state.searchCompleted && (
          <LeaderBoard repos={this.state.repos} margin={30} />
        )}
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
