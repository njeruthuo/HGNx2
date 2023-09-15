import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { Button } from "@mui/material";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
    const iconButton = {
        backgroundColor: "red",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "48px",
        borderRadius: "50%",
    };
    return (
        <Drawer
            sx={{
                borderTopRightRadius: "90px",
                borderBottomRightRadius: "90px",
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon
                        sx={iconButton}
                        style={{
                            marginRight: "10px",
                        }}
                    >
                        <LiveTvIcon
                            style={{ color: "white", background: "red" }}
                        />
                    </ListItemIcon>
                    <ListItemText primary={"MovieBox"} />
                </ListItemButton>
            </ListItem>
            <Divider />
            <List>
                {[
                    {
                        name: "Home",
                        icon: <HomeOutlinedIcon />,
                    },
                    {
                        name: "Movies",
                        icon: <MovieCreationOutlinedIcon />,
                    },
                    {
                        name: "TV Series",
                        icon: <OndemandVideoOutlinedIcon />,
                    },
                    {
                        name: "Upcoming",
                        icon: <CalendarMonthOutlinedIcon />,
                    },
                ].map((item, index) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ marginTop: ".4rem" }}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}

                <Box
                    sx={{
                        padding: "1rem",
                        border: "1px solid #F5DADF",
                        margin: "1rem",
                        borderRadius: "10px",
                    }}
                >
                    <Typography variant="h6" sx={{ fontSize: "12px" }}>
                        Play movie quizzes and earn free tickets
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{
                            fontSize: "10px",
                            marginTop: "1rem",
                            marginBottom: "1rem",
                        }}
                    >
                        50% of the people are playing now
                    </Typography>
                    <Button
                        sx={{
                            color: "pink",
                            border: "1px solid pink",
                            background: "#F5DADF",
                            marginTop: "1rem",
                        }}
                        variant="outlined"
                    >
                        Start playing
                    </Button>
                </Box>
                <ListItem disablePadding>
                    <ListItemButton sx={{ marginTop: "1rem" }}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Log out"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
}
