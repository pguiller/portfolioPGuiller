import React, { Suspense } from 'react';
import CCircularProgress from './components/UI/CCircularProgress/CCircularProgress';
import { Route, Routes } from 'react-router';
import ProtectedRoute from './components/PrivateRoute/PrivateRoute';
import HomePage from './pages/HomePage/HomePage';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import PortfolioRoutes from './pages/PortfolioPage/PortfolioRoutes';
import CLeftSideMenu from './components/UI/CLeftSideMenu/CLeftSideMenu';

function App() {
  return (
    <Suspense fallback={<CCircularProgress />}>
      <Routes>
      <Route
          path="/*"
          element={
            <HomePage>
              <CLeftSideMenu>
                <PortfolioRoutes />
              </CLeftSideMenu>
            </HomePage>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
