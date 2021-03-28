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
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
