import {NotificationsProvider} from '@toolpad/core/useNotifications'

const NotificationsProviderComponent =({children}) =>{
    return(
        <NotificationsProvider slotProps={{
            snackbar: {
              anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
            },
          }}>
            {children}

          </NotificationsProvider>
    )
}   

export default NotificationsProviderComponent;