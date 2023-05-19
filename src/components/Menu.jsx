import { useState, memo } from 'react';
import { useResolvedPath, useNavigate } from 'react-router-dom';
import { Box, Tabs, Tab } from '@mui/material';

const routes = [
  { label: 'Index', to: '/' },
  { label: 'Table', to: '/table' },
  { label: 'User', to: '/user' },
];

function Menu() {
  const { pathname } = useResolvedPath();
  const navigate = useNavigate();
  const [route, setRoute] = useState(
    routes.findIndex((item) => item.to === pathname),
  );

  /**
   * Updates current menu item indicator state
   * and navigates user to desired route.
   */
  function handleClick(index, to) {
    setRoute(index);
    navigate(to);
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={route}>
        {routes.map(({ label, to }, index) => (
          <Tab
            key={index}
            value={index}
            label={label}
            onClick={() => handleClick(index, to)}
          />
        ))}
      </Tabs>
    </Box>
  );
}

export default memo(Menu);
