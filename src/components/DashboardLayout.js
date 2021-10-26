import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Dashboard from './Dashboard';

import Logo from '../resources/logo.svg';

const drawerWidth = 200;

const DashboardLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <img src={Logo} alt='Teamly Logo' className='logo' width='32' height='32' style={{ marginRight: '1.5rem' }} />
          {/* TODO: Use state to update the title here. It should be built 
                      like organizationName + whatever else */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StrongBuilt
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          backgroundColor: '#FFFF00'
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>

          {/* NOTE: My routes are going to go here. Teams, Employees */}
          <List>
            <ListItem button key={"Teams"}>
              <ListItemIcon sx={{ minWidth: '32px' }}>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </ListItemIcon>
              <ListItemText primary={"Teams"} />
            </ListItem>
            <ListItem button key={"Employees"}>
              <ListItemIcon sx={{ minWidth: '32px' }}>
                <svg width='20' height='20' xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </ListItemIcon>
              <ListItemText primary={"Employees"} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Dashboard />
    </Box>
  );
};

export default DashboardLayout;