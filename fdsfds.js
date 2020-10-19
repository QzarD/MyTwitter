import { Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles=makeStyles(theme=>({
    wrapper:{
        display: 'flex',
        height:'100vh'
    },
    blueSide:{
        backgroundColor:'#1DA1F2',
        flex: '0 0 50%',
    },
    loginSide:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flex: '0 0 50%',
    },
    loginSideTwitterIcon:{
        fontSide:50
    },
    loginSideWrapper:{
        width:380
    },
    loginSideTitle:{
        fontWeight:700,
        fontSize:32,
        marginBottom:45
    }
}))

function SignIn() {
    const classes=useStyles()
    
    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <ul>
                    <li><Typography>Читайте о том, что вам интересно.</Typography></li>
                    <li><Typography>Узнайте, о чем говорят в мире.</Typography></li>
                    <li><Typography>Присоединяйтесь к общению.</Typography></li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                <TwitterIcon color='primary' className={classes.loginSideTwitterIcon}/>
                <Typography variant="h4" className={classes.loginSideTitle} >Узнайте, что происходит в мире прямо сейчас</Typography>
                <Typography>Присоединяйтесь к Твиттеру прямо сейчас!</Typography>
                <Button variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
                <Button variant="outlined" color="primary" fullWidth>Войти</Button></div>
            </section>
        </div>
    )
}

export default SignIn
