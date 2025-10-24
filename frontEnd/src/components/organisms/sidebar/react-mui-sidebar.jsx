import { Sidebar, Menu, MenuItem, Submenu, Logo } from "react-mui-sidebar";
import {Link} from 'react-router-dom'
import {BorderColor, Inventory} from '@mui/icons-material'
import {useState} from 'react'

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
        <Sidebar width={"300px"} style={{overflowX: "scroll", maxHeight: "100%"}}>
            <Logo
                component = {Link}
                href="/"
                img = "../../assets/AngelesLogo.jpeg"

            >
            Panel administrativo
            </Logo>
            <Menu subHeading= "Inventarios">
                <Submenu title = "Medicamentos" icon = {<FolderIcon/>}>
                    <MenuItem
                        icon = {<MedicamentosIcon/>}
                        component = {Link} 
                        link = "/test/InventarioMedicamentos"
                        
                        
                    >
                        Medicamentos
                    </MenuItem>
                    
                    <MenuItem
                        icon = {<ControlEspecialIcon/>}
                        component = {Link} link = "/test/InventarioControlEspecial"
                       
                    >
                        Control Especial
                    </MenuItem>

                    
                </Submenu>
                <Submenu title= "Dispositivos Medicos" icon = {<FolderIcon/>}>
                    <MenuItem
                        icon = {<DmIcon/>}
                        component = {Link} link = "/test/InventarioDispositivosMedicos"
                        
                    >
                       Dispositivos medicos
                    </MenuItem>
                    <MenuItem
                        icon = {<RespiratorioIcon/>}
                        component = {Link} link = "/test/InventarioRespiratorio"
                        
                    >
                        Respiratorio
                    </MenuItem>
                    <MenuItem
                        icon = {<BioseguridadIcon/>}
                        component = {Link} 
                        link = "/test/InventarioBioseguridad"
                    >
                        Bioseguridad
                    </MenuItem>
                    
                    <MenuItem
                        icon = {<AseoIcon/>}
                        component = {Link}
                        href = "/test/InventarioAseo"
                    >
                        Aseo
                    </MenuItem>
                    <MenuItem
                        icon = {<ReactivoIcon/>}
                        component = {Link}
                        href = "/"
                    >
                        Reactivos
                    </MenuItem>
    
                    <MenuItem
                        icon = {<BioMedicoIcon/>}
                        component = {Link}
                        href = "/"
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
                link = "/test/RecepcionMedicamentoTest"
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
    )
}

export default MuiSideBar;