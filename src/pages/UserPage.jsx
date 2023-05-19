import { Typography } from '@mui/material';
import Card from '../components/Card';
import { useOutletContext } from 'react-router';

/**
 * The user page
 */
function UserPage() {
  const { user } = useOutletContext();

  if (!user) return <Typography>No user data.</Typography>;

  return (
    <Card
      clientId={user['client_id']}
      firstName={user['first_name']}
      job={user['job']}
      jobDescriptor={user['job_descriptor']}
    />
  );
}

export default UserPage;
