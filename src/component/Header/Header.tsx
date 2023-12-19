import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Banner = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export function Header() {
  return (
    <Banner
      component="div"
      sx={{ p: 3, my: 10, height: "100%" }}
      flexDirection="column"
    >
      <Box sx={{ maxWidth: "800px" }}>
        <Typography
          variant="h1"
          component="h1"
          align="center"
          sx={{ fontWeight: 700 }}
        >
          We make visions become reality
        </Typography>
        <Typography variant="h5" align="center" sx={{ fontWeight: 100, mt: 4 }}>
          We engineer web applications tailored to meet your business needs,
          providing effective solutions for your success.
        </Typography>
      </Box>
      <Box sx={{mt: 4 }}>
        <Button variant="outlined" sx={{color: '#000', borderColor: '#000', '&:hover': {
            bgcolor: '#000',
            color: '#fff',
            borderColor: '#000'
        }}}>Request a Consultation</Button>
      </Box>
    </Banner>
  );
}
