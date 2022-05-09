import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import React, { useState } from 'react';
import { Button, Container, TextField, Box } from '@mui/material';
import { getFirestore,addDoc,collection,serverTimestamp } from 'firebase/firestore'

export default function uploadBuildOrderPage({ data }) {
    const router = useRouter()
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');


    const { c, s } = router.query;

    const uploadBuildOrder = async () => {
        const db = getFirestore()

        const buildOrder = {
            name: name,
            description: description,
            author: author,
            civ: c,
            url: s,
            like_count: 0,
            timestamp: serverTimestamp(),
        }
        await addDoc(collection(db, 'aoe4_build_order'), buildOrder)

        Router.push('/buildOrderTable');
    }

    return (
        <Container maxWidth="lg">
            <Head>
                <title>Upload Your Build Orders</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Name of the build"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <TextField
                            multiline
                            id="outlined"
                            label="Author"
                            value={author}
                            onChange={e => setAuthor(e.target.value)}

                        />
                        <TextField
                            multiline
                            id="outlined"
                            label="Description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}

                        />

                    </div>
                </Box>
                <Button variant="contained" onClick={() => uploadBuildOrder()}>Upload!</Button>
            </main>
        </Container>

    )
}

