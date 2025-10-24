import {
AppBar,
IconButton,
Box,
Drawer,
Typography,
Toolbar,
} from "@mui/material"
import {MenuButton} from '../../atoms/Button'
import {useState} from 'react'
import {User3DIcon} from '../../protons/Icon'

const Header = () =>{
    const [open, SetOpen] = useState(false)

    const handleOpen = () =>{
        SetOpen(!open)
    }
    return(
        <AppBar variant = "outlined" position = "static">
            <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <MenuButton onClick={handleOpen}/>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <User3DIcon size={80} />
                </Box>
            </Toolbar>
            <Drawer open = {open} onClose = {handleOpen}/>
        </AppBar>
        
    )
}

export default Header;