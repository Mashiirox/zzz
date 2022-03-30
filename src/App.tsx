import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import routers from './route';

import './App.less';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className='page'>{routers}</div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
