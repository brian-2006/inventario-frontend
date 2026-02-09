import { BrowserRouter, Router } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import NotificationsProviderComponent from './NotificationsProvider'
import ThemeProvider from "./ThemeProvider"
import AuthProvider from "./AuthProvider"


const AppProviders = ({children}) =>{
    return(
        <BrowserRouter>
            <AuthProvider>
                <ThemeProvider>
                    <CssBaseline/>
                    <NotificationsProviderComponent>
                        {children}
                    </NotificationsProviderComponent>
                </ThemeProvider>
            </AuthProvider>
        </BrowserRouter>
        
    )
}

export default AppProviders