import { Sidebar, Menu, MenuItem, Submenu, Logo } from "react-mui-sidebar";
import {Link} from 'react-router-dom'

const MuiSideBar = ()=>{
    return (
        <Sidebar width={"270px"}>
            <Logo
                component = {Link}
                href="/"
                img ="../../../src/assets/AngelesLogo.jpeg"
            >

            </Logo>
        </Sidebar>
    )
}

export default MuiSideBar;