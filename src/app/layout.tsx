import { ReactNode } from 'react';

import Box from '@mui/material/Box';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

export const metadata = {
  title: 'Michael Barlock',
  description: 'Resume for Michael Barlock',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
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
}
