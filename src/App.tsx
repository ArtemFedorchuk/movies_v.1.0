import React from 'react';
import { useHistory } from 'react-router';
import { ProtectedRoute, routes } from './router';

type TSubToutes = {
  path: string;
  component: any;
};

type TRoute = {
  path: string;
  component: any;
  exact?: boolean;
  routes?: Array<TSubToutes>;
  name: string;
};

function App(): any {
  const history = useHistory();
  return (
    <div style={{ background: '#424242', height: '100vh' }}>
      <button onClick={() => history.push('home/music')}>Music</button>
      {routes.map((route: TRoute, idx: number) => (
        <ProtectedRoute key={idx} {...route} />
      ))}
    </div>
  );
}

export default App;
