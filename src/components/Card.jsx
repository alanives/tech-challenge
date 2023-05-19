import { memo } from 'react';
import {
  Card as CardWrapper,
  CardContent,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';

function Card({ clientId, firstName, job, jobDescriptor }) {
  return (
    <CardWrapper sx={{ maxWidth: 350, background: grey['A100'] }}>
      <CardContent>
        <Typography gutterBottom align="right">
          {clientId}
        </Typography>
        <Typography sx={{ mt: 4 }} gutterBottom variant="h4">
          {firstName}
        </Typography>
        <Typography variant="subtitle2">{job}</Typography>
        <Typography variant="h6">{jobDescriptor}</Typography>
      </CardContent>
    </CardWrapper>
  );
}

export default memo(Card);
