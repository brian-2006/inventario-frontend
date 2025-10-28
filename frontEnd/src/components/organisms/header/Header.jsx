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
import {User3DIcon, UserIcon} from '../../protons/Icon'
import {UserButton} from '../../atoms/Button'
import MuiSideBar from '../sidebar/react-mui-sidebar'

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
                    <UserButton size = "large" color/>
                </Box>
            </Toolbar>
            <Drawer 
            open = {open} 
            onClose = {handleOpen}
            anchor="left"
            variant="tempory"
            sx = {{
                "& .MuiDrawer-paper": {
                    width: 300,
                    boxSizing: "border-box",
                    backgroundColor: "#fafafa",
                    borderRight: "1px solid #ddd",
                },
            }}
            >
                <MuiSideBar/>
            </Drawer>
        </AppBar>
        
    )
}

export default Header;