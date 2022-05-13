import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link'
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getFirestore, updateDoc, doc, collection, arrayUnion, arrayRemove, increment } from 'firebase/firestore'
import { useCookies } from "react-cookie"
import { useRouter } from 'next/router'

export default function CivBuildOrderTable(props) {
    const { rows, user } = props
    const router = useRouter()

    
    const upvote = async (id) => {
        const db = getFirestore()
        await updateDoc(doc(collection(db, 'aoe4_build_order'), id), "likers", arrayUnion(user));
        await updateDoc(doc(collection(db, 'aoe4_build_order'), id), "like_count", increment(1));
        router.reload(window.location.pathname)
    }

    const downvote = async (id) => {
        const db = getFirestore()
        await updateDoc(doc(collection(db, 'aoe4_build_order'), id), "likers", arrayRemove(user));
        await updateDoc(doc(collection(db, 'aoe4_build_order'), id), "like_count", increment(-1));
        router.reload(window.location.pathname)
    }

    const hasVoted = (row) => {
        return row.likers.includes(user)
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
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
                            <TableCell sm align="right">
                                <IconButton onClick={() => hasVoted(row) ? downvote(row.id) : upvote(row.id)} >
                                    {hasVoted(row) ? <FavoriteIcon sx={{ color: red[500] }} />
                                        : <FavoriteBorderIcon sx={{ color: red[500] }} />}
                                </IconButton>
                                {row.like_count}
                            </TableCell>
                            {props.showCiv && <TableCell sm align="right">{row.civ}</TableCell>}

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

