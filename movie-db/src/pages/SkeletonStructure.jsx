import { Grid, Skeleton } from "@mui/material";
import React from "react";

const SkeletonStructure = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item lg={4} md={6} xs={12}>
                    <Skeleton
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                    />
                    <Skeleton />
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                    <Skeleton
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                    />
                    <Skeleton />
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                    <Skeleton
                        variant="rectangular"
                        width={"100%"}
                        height={118}
                    />
                    <Skeleton />
                </Grid>
            </Grid>
        </div>
    );
};

export default SkeletonStructure;
