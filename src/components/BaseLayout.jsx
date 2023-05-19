import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import Menu from './Menu';

function BaseLayout({ user, data }) {
  return (
    <>
      <Menu />
      <Box sx={{ p: 3 }}>
        {/* React router context is used here to share data among views */}
        <Outlet context={{ user, data }} />
      </Box>
    </>
  );
}

export default BaseLayout;
