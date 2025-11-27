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
import { useNavigate } from 'react-router-dom';
import {UserButton, NotificationButton} from '../../atoms/Button'
import MuiSideBar from '../sidebar/react-mui-sidebar'

import { useAuth } from '../../../providers/AuthProvider'

const Header = () =>{
    //estados para cerrar sesion
    const [open, SetOpen] = useState(false)
    //funcion para cerrar sesion
    const { logout } = useAuth()

    //datos de usuario autenticado
    const { user, isAuthenticated, token } = useAuth();
    const navigate = useNavigate()


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
                    { user.permissions == 2?(
                        <NotificationButton size = "large" onClick = {()=> navigate('/request/admin')}/>
                    ): null}
                    <UserButton size = "large" onClick ={logout}/>
                    
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