import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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
