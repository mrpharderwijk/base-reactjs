import React from 'react';
import { Container } from 'reactstrap';
import MainRoutes from './Main.routes';
import Navigation from '../../components/common/Navigation/Navigation';
import './Main.css';

const Main = () => (
  <div className="main">
    <header className="main__header">
      <Navigation />
    </header>
    <main role="main" className="main__container">
      <Container>
        <MainRoutes />
      </Container>
    </main>
    <footer className="main__footer">Main Footer</footer>
  </div>
);

export default Main;
