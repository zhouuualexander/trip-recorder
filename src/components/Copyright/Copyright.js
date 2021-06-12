import React from "react";
import { Typography, Link } from "@material-ui/core";

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '4vh' }}>
            {"Copyright © "}
            <Link color="inherit" href="https://www.linkedin.cn/in/zijian-zhou/">
                {"Zijian Zhou"}
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
};

export default Copyright;