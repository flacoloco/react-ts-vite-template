import type { JSX } from 'react';
import { Button } from '@src/components/atoms';
import { useNavigate } from 'react-router-dom';

export const About = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is About</h1>
      <Button
        label='Go to Home'
        onClick={() => navigate('/')}
        primary={true}
      />
    </div>
  );
};
