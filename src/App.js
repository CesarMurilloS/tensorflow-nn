import React, { useEffect } from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import theme from './app/config/theme'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Pages
import HomePage from './features/pages/HomePage';

// Routes
import PublicRoute from './features/routes/PublicRoute';

// Layouts
import MainLayout from './features/layouts/MainLayout';

// Services
import { ROUTE__HOME } from './app/constants/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Router>
          <Switch>
            <PublicRoute
              exact
              path={ROUTE__HOME}
              component={HomePage}
              layout={MainLayout}
            />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
