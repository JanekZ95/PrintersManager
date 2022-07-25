import React from 'react';
import {
    Navigate,
    Route,
    Routes,
    useLocation,
    useNavigate,
} from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from '_components/Nav';
import { PrivateRoute } from '_components/PrivateRoute';
import { history } from '_helpers/history';
import { Home } from '_pages/home/Home';
import { Login } from '_pages/login/Login';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(200px, 3fr) 1fr;
  grid-template-rows: 50px 1fr;
`;

function App() {
    history.navigate = useNavigate();
    history.location = useLocation();

    return (
        <AppContainer>
            <Nav />
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </AppContainer>
    );
}

export default App;
