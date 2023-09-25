import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SkillListProps {
  skills: string[];
}
export const SkillList = ({ skills }: SkillListProps) => {
  return (
    <Box sx={{}}>
      <Box
        component={'ul'}
        sx={[
          ({ palette }) => ({
            columnCount: [3, 4, 2, 3],
            columnFill: 'balance',
            columnRuleStyle: 'solid',
            columnRuleWidth: 3,
            columnRuleColor: palette.primary.light,
            listStyle: 'none',
            m: 0,
            p: 0,
            ml: -1, // Eat padding below for component
          }),
        ]}
      >
        {skills.map((skill, i) => (
          <Box component={'li'} sx={{ pl: 1 }} key={i}>
            <Typography variant={'body1'}>{skill}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
