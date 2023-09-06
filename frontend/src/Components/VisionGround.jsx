import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Preview from "../assets/preview.png";
import Star from "@mui/icons-material/Star";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

import { GetRandomPrompt } from "../utils";
import { downloadImg } from "../utils";
import { InputField, Loader } from "../Components/index.js";
import { Box, Button, Stack } from "@mui/material";
import TextArea from "./TextArea";
import Message from "./Message";

const VisionGround = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        prompt: "",
        photo: "",
    });

    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState();
    const [severity, setSeverity] = useState();

    const DataChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


    const LetsSurpriseYou = () => {
        const randomPrompt = GetRandomPrompt(form.prompt);
        setForm({ ...form, prompt: randomPrompt });
    };

    const GenerateImg = async () => {
        if (form.prompt) {
            try {
                setGeneratingImg(true);
                const response = await fetch('http://localhost:8080/api/v1/vision', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        prompt: form.prompt,
                    }),
                });

                const data = await response.json();
                setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
                setSeverity('success')
                setMessage('Image generation successful!')
            } catch (err) {
                setSeverity('error')
                setMessage('Please try again');
            } finally {
                setGeneratingImg(false);
            }
        } else {
            setSeverity('warning')
            setMessage('Please provide proper prompt')
        }
    };

    const PromptSumbit = async (e) => {
        e.preventDefault();

        if (form.prompt && form.photo) {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:8080/api/v1/post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ ...form }),
                });

                await response.json();

                setSeverity('success');
                setMessage('Success');
                navigate('/');
            } catch (err) {
                setSeverity('error');
                setMessage('Connection Error');

            } finally {
                setLoading(false);
            }
        } else {
            setSeverity('warning');
            setMessage('Please generate an image with proper details')
        }
    };

    return (
        <Stack p={"3% 5%"} height={"-webkit-fill-available"}>
            {message && <Message message={message} severity={severity} />}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { sm: "column", md: "row" },
                    border: "2px solid gray",
                    borderRadius: "1em",
                    height: "-webkit-fill-available",
                }}
            >
                <form
                    onSubmit={PromptSumbit}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: "35%",
                        borderRight: "0.5px solid gray",
                        padding: "1em",
                        gap: "2em",
                    }}
                >

                    <InputField
                        labelName="Give Name"
                        type="text"
                        name="name"
                        placeholder="Beautiful Nature"
                        value={form.name}
                        DataChange={DataChange}
                    />
                    <TextArea
                        labelName="Enter Prompt"
                        type="text"
                        name="prompt"
                        placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
                        value={form.prompt}
                        DataChange={DataChange}
                    />

                    <Box display={'flex'} justifyContent={'space-between'} margin={'auto 0.5em'}>
                        <Button
                            type="button"
                            variant="contained"
                            size="small"
                            color="primary"
                            onClick={LetsSurpriseYou}
                            endIcon={<Star />}
                        >
                            Let's Magic
                        </Button>
                        <Button
                            type="button"
                            variant="contained"
                            size="small"
                            color="success"
                            onClick={GenerateImg}
                            endIcon={<CreateOutlinedIcon />}
                        >
                            {generatingImg ? "Genetaing" : "Generate"}
                        </Button>
                    </Box>
                </form>
                <div
                    style={{
                        width: "75%",
                        // width:'-webkit-fill-available',
                        borderLeft: "0.5px solid gray",
                        // padding: "1em",
                        display: 'grid',
                        placeItems: 'center',
                        position: 'relative'
                    }}
                >
                    {generatingImg && (
                        <Box
                            sx={{
                                width: "-webkit-fill-available",
                                height: "-webkit-fill-available",
                                position: "absolute",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                background: "rgba(0,0,0,0.5)",
                                borderRadius: "0 1em 1em 0",
                            }}
                        >
                            <Loader />
                        </Box>
                    )}
                    {form.photo ? (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width: '-webkit-fill-available',
                            height: '100%',

                        }}>
                            <img
                                style={{
                                    width: "25em",
                                    borderRadius: "0.4em",
                                    border: "1px solid gray",
                                    objectFit: "contain",
                                    margin: 'auto'
                                }}
                                src={form.photo}
                                alt={form.prompt}
                            />
                            <Box sx={{
                                padding: '1em 2em',
                                height: '4vh',
                                width: '-webkit-fill-available',
                                background: '#343434',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                                <ShareOutlinedIcon sx={{ cursor: 'pointer' }} />
                                <span style={{ fontSize: '1.3rem', fontWeight: '400', letterSpacing: '0.5px', cursor: 'default' }}>{form.name ? form.name : 'VisionArt Image'}</span>
                                <span onClick={() => downloadImg(form.photo, form.name)}><FileDownloadOutlinedIcon sx={{ cursor: 'pointer' }} /></span>
                            </Box>
                        </Box>
                    ) : (
                        <img
                            style={{
                                width: "10em",
                                objectFit: "contain",
                            }}
                            src={Preview}
                            alt="Preview"
                        />
                    )}
                </div>
            </Box>
        </Stack >
    );
};

export default VisionGround;
