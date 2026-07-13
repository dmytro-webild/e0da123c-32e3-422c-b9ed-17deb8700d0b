import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

import AboutPage from "@/pages/AboutPage";
import AboutUsPage from "@/pages/AboutUsPage";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Route>
    </Routes>
  );
}
