import {Tab, Box, Typography, Tabs} from '@mui/material'
import {TabContext, TabPanel, TabList } from '@mui/lab'
import {useState} from 'react'

const TabRequest = ({tabsData, tabSData}) => {
    const data = tabsData ?? tabSData ?? []
    const [value, setValue] = useState(data[0]?.value ?? '')

    const handleChange = (e, newValue) =>{
        setValue(newValue)
    }

    return(
        <>
        {data.length > 0 && (
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value = {value}>
                    <Box sx={{  borderColor: 'divider' }}>
                        <TabList onChange={handleChange} centered>
                            {data.map((tab, index) =>
                            <Tab key ={index} label = {<strong>{tab.label}</strong>} value = {tab.value}/>
                            )}

                        </TabList>
                    </Box>

                    {data.map((tab, index) =>
                    <TabPanel key = {index} value = {tab.value}>
                        {tab.toolbar?? ""} 
                        <Box sx = {{p: 3, mx: 1, my: 1}}>
                            {tab.content?? "no hay contenido para mostrar"}
                        </Box>
                    </TabPanel>
                    )}

                </TabContext>
            </Box>
        )}
        
        </>
    )
}

export default TabRequest;