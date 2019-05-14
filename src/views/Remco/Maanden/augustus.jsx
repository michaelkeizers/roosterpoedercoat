import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'hidden',
  },
  table: {
    width: '100%',
  },
});

let id = 0;
function createData(dag, datum, feestdag, dienst) {
  id += 1;
  return { id, dag, datum, feestdag, dienst };
}

const rows = [
  createData('do', '1 aug', '', 'nacht'),
  createData('vr', '2 aug', '', 'nacht'),
  createData('za', '3 aug', '', ''),
  createData('zo', '4 aug', '', ''),
  createData('ma', '5 aug', '', 'ochtend'),
  createData('di', '6 aug', '', 'ochtend'),
  createData('wo', '7 aug', '', 'ochtend'),
  createData('do', '8 aug', '', 'middag'),
  createData('vr', '9 aug', '', 'middag'),
  createData('za', '10 aug', '', ''),
  createData('zo', '11 aug', '', ''),
  createData('ma', '12 aug', '', 'middag'),
  createData('di', '13 aug', '', 'nacht'),
  createData('wo', '14 aug', '', 'nacht'),
  createData('do', '15 aug', '', ''),
  createData('vr', '16 aug', '', ''),
  createData('za', '17 aug', '', 'middag'),
  createData('zo', '18 aug', '', 'nacht'),
  createData('ma', '19 aug', '', 'nacht'),
  createData('di', '20 aug', '', ''),
  createData('wo', '21 aug', '', ''),
  createData('do', '22 aug', '', 'ochtend'),
  createData('vr', '23 aug', '', 'ochtend'),
  createData('za', '24 aug', '', 'ochtend'),
  createData('zo', '25 aug', '', ''),
  createData('ma', '26 aug', '', ''),
  createData('di', '27 aug', '', 'middag'),
  createData('wo', '28 aug', '', 'middag'),
  createData('do', '29 aug', '', 'nacht'),
  createData('vr', '30 aug', '', 'nacht'),
  createData('za', '31 aug', '', ''),
];

function AugustusMaand(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell padding="dense" align="left">Dag</TableCell>
            <TableCell padding="dense" align="left">Datum</TableCell>
            <TableCell padding="dense" align="left">ATV</TableCell>
            <TableCell padding="dense" align="left">Dienst</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell padding="dense" align="left" component="th" scope="row">
                {row.dag}
              </TableCell>
              <TableCell padding="dense" align="left">{row.datum}</TableCell>
              <TableCell padding="none" align="left"><Typography variant="caption">{row.feestdag}</Typography></TableCell>
              <TableCell padding="dense" align="left">{row.dienst}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

AugustusMaand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AugustusMaand);
