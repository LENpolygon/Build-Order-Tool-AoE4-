import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import React, { useState, useRef } from 'react';
import { Button, Container, TextField, Box } from '@mui/material';
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore'
import Recaptcha from "react-recaptcha";
import Script from 'next/script'

export default function uploadBuildOrderPage({ data }) {
    const router = useRouter()
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [isVerified, setisVerified] = useState(false);
    const [description, setDescription] = useState('');
    const recaptchaRef = useRef(null)
    const { c, s } = router.query;

    const uploadBuildOrder = async () => {
        const db = getFirestore()
        if (!isVerified) {
            alert("Please verify that you are a human!");
            return;
        };


        const buildOrder = {
            name: name,
            description: description,
            author: author,
            civ: c,
            url: s,
            likers: [],
            like_count: 0,
            timestamp: serverTimestamp(),
        }
        await addDoc(collection(db, 'aoe4_build_order'), buildOrder)

        Router.push('/buildOrderTable');
    }

    const verifyCallback = (response) => {
        if (response) {
            setisVerified(true);
        }
    };


    return (
        <Container maxWidth="lg">
            <script
                src="https://www.google.com/recaptcha/api.js?&render=explicit"
                async
                defer
            />
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
                    <div>
                        <Recaptcha
                            ref={recaptchaRef}
                            size="big"
                            render="explicit"
                            sitekey="6Lf0vd0fAAAAALqE0QAT8yOZeZWYhjs41PvXzJLN"
                            verifyCallback={verifyCallback}
                        />
                    </div>
                </Box>
                <Button variant="contained" disabled={!isVerified} onClick={() => uploadBuildOrder()}>
                    {isVerified ?  'Upload!': 'Please verify that you are a human!'}</Button>

            </main>
        </Container>

    )
}

