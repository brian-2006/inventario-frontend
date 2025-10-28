import { Sidebar, Menu, MenuItem, Submenu, Logo } from "react-mui-sidebar";
import {Link} from 'react-router-dom'
import {useState} from 'react'
import{Container, Button, Box} from '@mui/material'
import {BorderColor, Inventory} from '@mui/icons-material'
import LogoFoto from './logo'
//import LogoFoto from './logo'

import {
    BoxIcon, 
    MaletaIcon, 
    AmbulanceIcon,
    TAMIcon,
    Botiquin3DIcon,
    CarroConsultaIcon,
    RespiratorioIcon,
    MedicamentosIcon,
    BioMedicoIcon,
    BioseguridadIcon,
    AseoIcon,
    ControlEspecialIcon,
    DmIcon,
    ReactivoIcon,
    FolderIcon,
    DocIcon
} from '../../protons/Icon'



const MuiSideBar = ()=>{

    const [open, setOpen] = useState(false)

    return (
        <Box style={{ display: "flex", height: "100vh", width: "auto"}} sx = {{overflowY: "auto", overflowX: "hidden"}}>
            <Sidebar width={"300px"} showProfile = {false} >
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    px: 1,
                    py: 1,
                }}>
                    <LogoFoto width='100%'/>
                </Box>
                {/* <Logo/> */}
                
                <Menu subHeading= "Inventarios">
                    <Submenu title = "Medicamentos" icon = {<FolderIcon/>} >
                        <MenuItem
                            icon = {<MedicamentosIcon/>}
                            component = {Link} 
                            link = "/inventario/medicamentos"
                            
                            
                        >
                            Medicamentos
                        </MenuItem>
                        
                        <MenuItem
                            icon = {<ControlEspecialIcon/>}
                            component = {Link} link = "/inventario/control-especial"
                        
                        >
                            Control Especial
                        </MenuItem>

                        
                    </Submenu>
                    <Submenu title= "Dispositivos Medicos" icon = {<FolderIcon/>}>
                        <MenuItem
                            icon = {<DmIcon/>}
                            component = {Link} link = "/inventario/dispositivos-medicos"
                            
                        >
                        Dispositivos medicos
                        </MenuItem>
                        <MenuItem
                            icon = {<RespiratorioIcon/>}
                            component = {Link} link = "/inventario/respiratorio"
                            
                        >
                            Respiratorio
                        </MenuItem>
                        <MenuItem
                            icon = {<BioseguridadIcon/>}
                            component = {Link} 
                            link = "/inventario/bioseguridad"
                        >
                            Bioseguridad
                        </MenuItem>
                        
                        <MenuItem
                            icon = {<AseoIcon/>}
                            component = {Link}
                            link = "/inventario/aseo"
                        >
                            Aseo
                        </MenuItem>
                        <MenuItem
                            icon = {<ReactivoIcon/>}
                            component = {Link}
                            link = "/inventario/reactivo"
                        >
                            Reactivos
                        </MenuItem>
        
                        <MenuItem
                            icon = {<BioMedicoIcon/>}
                            component = {Link}
                            link = "/inventario/equipos-biomedicos"
                        >
                            Equipos biomedicos
                        </MenuItem>
                    </Submenu>

                </Menu>
                <Menu subHeading = "Moviles">
                    
                    

                    <Submenu title = "TAB" icon = {<FolderIcon/>}>
                        <MenuItem
                        icon ={<AmbulanceIcon/>}
                        component = {Link}
                        href = "/"
                        >
                        TAB 01
                        </MenuItem>


                        <MenuItem
                        icon ={<AmbulanceIcon/>}
                        component = {Link}
                        href = "/"
                        >
                        TAB 02
                        </MenuItem>

                        <MenuItem
                        icon ={<AmbulanceIcon/>}
                        component = {Link}
                        href = "/"
                        >
                        TAB 03
                        </MenuItem>
                        
                    </Submenu>

                    <Submenu title = "TAM" icon = {<FolderIcon/>}>
                        <MenuItem
                        icon = {<TAMIcon/>}
                        component = {Link}
                        href = "/"
                        >
                        TAM 01
                        </MenuItem>

                        <MenuItem
                        icon = {<TAMIcon/>}
                        component = {Link}
                        href = "/"
                        >
                        TAM 02
                        </MenuItem>
                        <MenuItem
                        icon = {<TAMIcon/>}
                        component = {Link}
                        href = "/"
                        >
                        TAM 02
                        </MenuItem>

                    </Submenu>

                    <Submenu title = "Carro de consulta" icon = {<FolderIcon/>}>
                        <MenuItem
                        icon = {<CarroConsultaIcon/>}
                        component = {Link}
                        href = "/"
                        >
                        Carro 01
                        </MenuItem>

                        <MenuItem
                        icon = {<CarroConsultaIcon/>}
                        component = {Link}
                        href = "/"
                        >
                        Carro 02
                        </MenuItem>

                        <MenuItem
                        icon = {<CarroConsultaIcon/>}
                        component = {Link}
                        href = "/"
                        >
                        Carro 03
                        </MenuItem>
                    </Submenu>


                </Menu>

                <Menu subHeading = "Botiquines">
                    <Submenu title = "Maletas" icon = {<FolderIcon/>}>
                        <MenuItem
                        icon = {<MaletaIcon/>}
                        component = {Link}
                        href = "/"
                        >
                        Maleta 01
                        </MenuItem>

                        <MenuItem
                        icon = {<MaletaIcon/>}
                        component = {Link}
                        href = "/"
                        >
                        Maleta 02
                        </MenuItem>
                        <MenuItem
                        icon = {<MaletaIcon/>}
                        component = {Link}
                        href = "/"
                        >
                        Maleta 03
                        </MenuItem>

                    </Submenu>
                    <Submenu title = "Botiquines" icon = {<FolderIcon/>}>
                        <MenuItem
                        icon = {<Botiquin3DIcon/>}
                        component = {Link}
                        href = "/"
                        >
                        Botiquin 01
                        </MenuItem>

                        <MenuItem
                        icon = {<Botiquin3DIcon/>}
                        component = {Link}
                        href = "/"
                        >
                        Botiquin 02
                        </MenuItem>
                        <MenuItem
                        icon = {<Botiquin3DIcon/>}
                        component = {Link}
                        href = "/"
                        >
                        Botiquin 03
                        </MenuItem>

                    </Submenu>

                </Menu>
                <Menu subHeading="Recepcion Tenica Administrativa">
                    <MenuItem 
                    icon = {<DocIcon/>}
                    component = {Link}
                    link = "/recepcion-tecnica/medicamentos"
                    >
                    Recepcion Medicamentos
                    </MenuItem>

                    <MenuItem 
                    icon = {<DocIcon/>}
                    component = {Link}
                    link = "/test/RecepcionDmTest"
                    >
                    Recepcion Dispositivos medicos
                    </MenuItem>

                </Menu>
            </Sidebar>
        </Box>
    )
}

export default MuiSideBar;