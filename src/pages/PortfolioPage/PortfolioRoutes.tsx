import React from 'react';
import { Route, Routes } from 'react-router';
import PortfolioPage from './PortfolioPage';
import TextfieldPage from './ComponentsPages/TextfieldPage/TextfieldPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import ButtonPage from './ComponentsPages/ButtonPage/ButtonPage';
import DatePage from './ComponentsPages/DatePage/DatePage';
import ModalPage from './ComponentsPages/ModalPage/ModalPage';
import UIPage from './ComponentsPages/UIPage/UIPage';
import ChartPage from './ComponentsPages/ChartPage/ChartPage';
import TablePage from './ComponentsPages/TablePage/TablePage';
interface Props {
  children?: React.ReactNode;
}

const PortfolioRoutes: React.FC<Props> = () => (
  <Routes>
    <Route path="/" element={<PortfolioPage />} />
    <Route path="/textfield" element={<TextfieldPage />} />
    <Route path="/button" element={<ButtonPage />} />
    <Route path="/date" element={<DatePage />} />
    <Route path="/modal" element={<ModalPage />} />
    <Route path="/ui" element={<UIPage />} />
    <Route path="/chart" element={<ChartPage />} />
    <Route path="/table" element={<TablePage />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default PortfolioRoutes;
