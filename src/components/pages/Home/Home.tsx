import type { JSX } from 'react';
import { Button } from '@src/components/atoms';
import { useNavigate } from 'react-router-dom';

export const Home = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is Home</h1>
      <Button
        label='Go to About'
        onClick={() => navigate('/about')}
        primary={true}
      />
    </div>
  );
};
