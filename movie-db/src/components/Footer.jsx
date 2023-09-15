import React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
    const footer = {
        display: "flex",
        gap: "3rem",
        margin:'1rem',
    };
    return (
        <Box className="footer">
            <div>
                <IconButton>
                    <FacebookIcon />
                </IconButton>

                <IconButton>
                    <InstagramIcon />
                </IconButton>

                <IconButton>
                    <TwitterIcon />
                </IconButton>
                <IconButton>
                    <YouTubeIcon />
                </IconButton>
            </div>

            <Box sx={footer}>
                <Typography>Conditions of Use</Typography>
                <Typography>Privacy & policy</Typography>
                <Typography>Press Room</Typography>
            </Box>

            <Typography sx={{color:'gray', fontWeight:'700', fontSize:'small'}}>
                &copy;
                {` ${new Date().getFullYear()} MovieBox By Julius Njeru`}
            </Typography>
        </Box>
    );
};

export default Footer;
