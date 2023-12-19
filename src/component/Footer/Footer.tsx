import Box from "@mui/material/Box"
export function Footer() {
     
    return (
        <Box component={"footer"} sx={{ position: 'fixed', bottom: 0, width: '100%', bgcolor: '#000', color: '#fff', padding: '20px', textAlign: 'center'}}>
            &copy; 2023
        </Box>
    )
}

