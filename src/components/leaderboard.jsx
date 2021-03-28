import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { useContainedCardHeaderStyles } from "@mui-treasury/styles/cardHeader/contained";
import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles(({ spacing }) => ({
  card: {
    marginTop: 40,
    borderRadius: spacing(0.5),
    transition: "0.3s",
    width: "90%",
    overflow: "initial",
    background: "#ffffff",
  },
  content: {
    paddingTop: 0,
    textAlign: "left",
    overflowX: "auto",
    "& table": {
      marginBottom: 0,
    },
  },
  margin: {
    margin: spacing.unit,
  },
  withoutLabel: {
    marginTop: spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
}));

let id = 0;
function createData(name, languages, score) {
  id += 1;
  return { id, name, languages, score };
}

const rows = [
  // comment
  createData("John Doe", "C++, Java, Python", 4.0),
  createData("Tarun Vishal", "C++, Python", 4.3),
  createData("Ankur Yadav", "Java, Javascript", 6.0),
  createData("Praguna Singh", "C++", 4.3),
  createData("Meet Mehta", "PHP", 3.9),
];

export const Leaderboard = React.memo(function Leaderboard() {
  const classes = useStyles();
  const cardHeaderStyles = useContainedCardHeaderStyles();
  const cardShadowStyles = useSoftRiseShadowStyles({ inactive: true });
  const cardHeaderShadowStyles = useFadedShadowStyles();

  const [state, setState] = React.useState({
    records: rows,
  });
  const handleChange = (event) => {
    const language = event.target.value;
    if (language) {
      let filteredRecords = state.records.filter((record) =>
        record.languages.toLowerCase().includes(language.toLowerCase())
      );
      setState({ records: filteredRecords });
    } else {
      setState({ records: rows });
    }
  };

  return (
    <Card className={cx(classes.card, cardShadowStyles.root)}>
      <CardHeader
        className={cardHeaderShadowStyles.root}
        classes={cardHeaderStyles}
        title={"Leaderboard"}
      />
      <CardContent className={classes.content}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell align="right">
                <TextField
                  label="Languages"
                  className={cx(classes.margin, classes.textField)}
                  value={state.language}
                  onChange={handleChange}
                  InputProps={{
                    name: "languages",
                    endAdornment: <Search />,
                  }}
                />
              </TableCell>
              <TableCell align="right">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.records.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.languages}</TableCell>
                <TableCell align="right">{row.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
});

export default Leaderboard;
