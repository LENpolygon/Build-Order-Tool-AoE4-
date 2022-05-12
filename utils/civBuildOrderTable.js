import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link'

export default function CivBuildOrderTable(props) {
    const { rows } = props

    return (
        <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell sm align="right">Votes</TableCell>
                        {props.showCiv && <TableCell sm align="right">Civ</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Link href={`/editor.html?c=${row.civ}&s=${row.url}`}>{row.name}</Link>
                            </TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell sm align="right">{row.like_count}</TableCell>
                            {props.showCiv && <TableCell sm align="right">{row.civ}</TableCell>}

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

