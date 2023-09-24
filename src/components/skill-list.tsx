import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SkillListProps {
  skills: string[];
}
export const SkillList = ({ skills }: SkillListProps) => {
  const columns: Array<string[]> = skills.reduce(
    (memo, cur, index) => {
      const pos = index % 3;
      memo[pos] = memo[pos] ?? [];
      memo[pos].push(cur);
      return memo;
    },
    [] as Array<string[]>,
  );
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      {columns.map((column, i) => (
        <Box key={i} component={'ul'} sx={{ listStyle: 'none', p: 0, m: 0 }}>
          {column.map((skill, j) => (
            <li key={j}>
              <Typography variant={'body1'}>{skill}</Typography>
            </li>
          ))}
        </Box>
      ))}
    </Box>
  );
};
