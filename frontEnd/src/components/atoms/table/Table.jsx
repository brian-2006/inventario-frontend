import {Table} from '@mui/material'


const TableAtom = ({children, sx = {}, ...props}) => {
    return(
        <Table
        stickyHeader
            sx={{
                ...sx,
            }}
          {...props}
        >
            {children}
        </Table>
    )
}

export default TableAtom