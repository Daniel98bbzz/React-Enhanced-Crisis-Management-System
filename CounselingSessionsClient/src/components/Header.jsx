import { Box, Typography } from "@mui/material"

const Header = ({title}) => {
  return (
    <Box
    sx={
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f1f1f1',
        color: 'white',
        p: 1,
        width: '100%',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Typography variant="h6" color={'black'} fontFamily={'monospace'}>
        {title}
      </Typography>
    </Box>
  )
}
export default Header