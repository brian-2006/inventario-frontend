import { BrowserRouter, Router } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import NotificationsProviderComponent from './NotificationsProvider'


const AppProviders = ({children}) =>{
    return(
        <BrowserRouter>
            <CssBaseline/>
            <NotificationsProviderComponent>
                {children}
            </NotificationsProviderComponent>
        </BrowserRouter>
        
    )
}

export default AppProviders