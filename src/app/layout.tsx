import Box from '@mui/material/Box';
import { ReactNode } from 'react';

import { ThemeRegistry } from '@/components/theme/theme-registry';
import './print.css';

export const metadata = {
  title: 'Michael Barlock - Resume',
  description: 'Resume for Michael Barlock',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='en'>
    <body>
      <ThemeRegistry>
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
          }}
        >
          {children}
        </Box>
      </ThemeRegistry>
    </body>
  </html>
);

export default RootLayout;
