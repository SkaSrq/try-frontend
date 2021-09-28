import { AppBar, IconButton, Toolbar, Typography, Button} from '@mui/material';
import {createTheme} from '@mui/material/styles'
import { makeStyles, ThemeProvider} from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import Box  from '@mui/material/Box';


const useStyles = makeStyles((theme)=>({
        headerText:{
            color:"#000000",

        },
}));
const Header =()=> {
    const classes= useStyles();
    return (
        <Box>

            <AppBar position="static" sx={{backgroundColor:"#9575cd"}} >
                <Toolbar>
                    <IconButton 
                    size="large"
                    sx={{ mr:2, color:"#000000" }}
                    aria-label="open drawer"
                    >
                        <MenuIcon/>
                    </IconButton>
                          <Typography
                            className={classes.headerText}
                            sx={{ flexGrow:1, fontWeight:"bold" }}
                            nowrap
                            variant="h6" 
                            component="div">Try FrontEnd
                          </Typography>
                    <Button 
                    sx={{mr:5, fontWeight:"bold",color:"#000000"}}
                    >Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;
