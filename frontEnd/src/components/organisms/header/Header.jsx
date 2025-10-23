import {
AppBar,
IconButton,
Box,
Drawer,
Typography,
} from "@mui/material"
import {MenuButton} from '../../atoms/Button'
import {useState} from 'react'

const Header = () =>{
    const [open, SetOpen] = useState(false)

    const handleOpen = () =>{
        SetOpen(!open)
    }
    return(
        <AppBar variant = "outlined" position = "static">
            <Box sx = {{alignItems: "right", display: "flex", width: "100%"}}>
                <Typography variant = "h6">
                    <strong>MENU</strong>
                </Typography>
            </Box>
            <Box sx ={{alignItems: "left", display: "flex"}}>
                <MenuButton onClick={handleOpen}/>
            </Box>
            
            <Drawer open = {open} onClose = {handleOpen}/>
        </AppBar>
    )
}

export default Header;