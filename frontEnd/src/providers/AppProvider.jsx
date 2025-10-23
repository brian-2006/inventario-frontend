import { BrowserRouter, Router } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import NotificationsProviderComponent from './NotificationsProvider'
import ThemeProvider from "./ThemeProvider"


const AppProviders = ({children}) =>{
    return(
        <BrowserRouter>
            <ThemeProvider>
                <CssBaseline/>
                <NotificationsProviderComponent>
                    {children}
                </NotificationsProviderComponent>
            </ThemeProvider>
        </BrowserRouter>
        
    )
}

export default AppProviders