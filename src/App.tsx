import React from 'react';

import GlobalStyle from './styles/global';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    {/** Todo componente dentro dele, vai ter a informação de autenticação */}
    <AuthProvider>
      <Signin />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
