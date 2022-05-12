import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages';
import Mockman from 'mockman-js';

const SiteRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/mockman" element={<Mockman />} /> 
        </Routes>
    );
}

export default SiteRoutes;