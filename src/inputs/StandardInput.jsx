import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function StandardInput() {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

    const classes = useStyles();

    return (
        // <div>Hello Worlds</div>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
    )
}

export default StandardInput;