import {
  type SxProps,
  type Breakpoint,
  type Theme,
} from '@mui/material/styles';
import type { ResponsiveStyleValue, SystemStyleObject } from '@mui/system';

/** Helper function for using sxProp by converting to spreadable.
 *
 * You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
 *  https://mui.com/system/the-sx-prop/#passing-sx-prop */
export const spreadable = (
  sx?: SxProps<Theme>,
): Array<
  | SystemStyleObject
  | (SystemStyleObject &
      Record<
        string,
        | SystemStyleObject
        | ResponsiveStyleValue<number | string>
        | Record<
            string,
            SystemStyleObject | ResponsiveStyleValue<number | string>
          >
      >)
> => (Array.isArray(sx) ? sx : [sx]);

export const gap = 4;

export const breakpoint =
  (breakpoint: Breakpoint, styles: SxProps) =>
  ({ breakpoints }: Theme) => ({
    [breakpoints.up(breakpoint)]: styles,
  });
