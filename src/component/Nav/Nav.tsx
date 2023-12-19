import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/system/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useScrollTrigger from '@mui/material/useScrollTrigger';


import { styled } from "@mui/material/styles";


const drawerWidth = 240;
export const navItems = ["Who We Are", "Services", "Contact"];

const NavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100px",
  justifyContent: "center",
  padding: "0 5% 0 5%",
  boxShadow: "0 0 0 0",
  transition: 'background-color 0.9s ease'
}));

 

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigation = (page: string) => {
    document.getElementById(`${page.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth'})
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        N
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <>
      <NavBar sx={{ ...(trigger === false ? '' :{ bgcolor: '#000',transition: 'background-color 0.9s ease' }) }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex", alignItems: 'center', gap: 10 },
            }}
          >
            <Typography variant="h6" component="span" sx={{ fontWeight: 700, color: "#fff", padding: 2, bgcolor: '#000', borderRadius: 1, ...(trigger === false ? '' :{ bgcolor: '#fff', color: '#000',  }) }}>
              N 
            </Typography>
            {trigger && <Typography variant="h6" sx={{ fontWeight: 100}}>We make visions become reality.</Typography> }
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" }, ...(trigger === false ? '' :{ display: 'none',  })  }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#000" }} onClick={() => handleNavigation(item)}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </NavBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
