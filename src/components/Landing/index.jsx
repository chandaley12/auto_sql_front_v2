import React from 'react'

// material-ui
import {Container} from "@material-ui/core";

import {makeStyles} from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import {Typography} from "@material-ui/core";

// components
import Account from "./Account";

// style

const useStyles = makeStyles((theme) => ({
    background: {
        background: 'linear-gradient(45deg, #8C8CF9 30%, #74C7E3 90%)'
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    card: {
        width: 500,
        borderRadius: 15,
        boxShadow: '-8px 8px 25px 10px #73FAF8',
    },
    media: {
        width:300,
        height:257,
        marginTop: 16,
        marginBottom: 16,
        margin: 'auto',
    },
    heading: {
        marginTop: 10
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
    loginButton: {
        width: 200,
    },
}));

// https://preview.themeforest.net/item/dimon-react-next-app-landing-page-template/full_screen_preview/26271180?_ga=2.102474565.578745029.1614430241-1591077733.1609319700
export default function Landing(props)
{
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Container>
                <div className={classes.root}>
                    <Card
                        
                        className={classes.card}
                    >
                        <CardContent>

                        </CardContent>
                        <CardMedia
                            className={classes.media}
                            image="images/auto_sql_logo.png"
                            title="AutoSQL"
                        />
                        <CardContent className={classes.center}>
                            <Typography variant="h6" display="block" gutterBottom
                                className={classes.heading}
                            >
                                수많은 DBMS를 위한 단 하나의 도구
                            </Typography>
                            
                        </CardContent>
                        <CardContent className={classes.center}>
                            <Typography variant="caption" display="block" gutterBottom
                                    className={classes.heading}
                                >
                                로그인하여 사용하기
                            </Typography>
                        </CardContent>
                        <CardContent className={classes.loginButton, classes.center}>
                            <Account {...props} />
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </div>
    );
}