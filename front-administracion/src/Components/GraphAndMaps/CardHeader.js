import React from 'react';
import { Card, Container, Grid, Typography, CardContent } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import "../../css/reports.css"
function CardHeader (props){
    const useStyles = makeStyles(()=>({
        root:{
            textAlign: 'center',
            background: props.color,
            marginTop: "10px",
            position: "relative"
        },
        texto:{
            fontSize: 18,
            color: props.font,
        },
        titulo:{
            fontWeight: 'bold',
            fontSize: 22,
            color: props.font
        }
    }))

    const classes = useStyles();
    return(
        <>
            <Card className={classes.root}>
                <CardContent>
                    {props.icono}
                    <Typography className={classes.titulo}>
                        {props.titulo}
                    </Typography>

                    <Typography className={classes.texto}>
                        {props.texto}
                    </Typography>
                </CardContent>
                <div className="bolita1"></div>
                <div className="bolita2"></div>
            </Card>
        </>
    )
}

export default CardHeader;

