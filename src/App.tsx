import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';

import PageRoutes from './routes';

const App: React.FC = () => (
    <>
        <GlobalStyle />
        <Router>
            <PageRoutes />
        </Router>
    </>
);

export default App;