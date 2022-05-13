import { Routes, Route } from 'react-router-dom';
import { HomePage, InvalidPage } from 'pages';
import Mockman from 'mockman-js';

const SiteRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/404" element={<InvalidPage />} /> 
            <Route path="/mockman" element={<Mockman />} /> 
        </Routes>
    );
}

export default SiteRoutes;