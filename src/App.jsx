// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home.jsx';
import UploadVideo from './pages/UploadVideo';
import NotFound from './pages/NotFound';
import './App.scss';

function App() {
    return (
        <div className="app__wrapper">
            <NavBar />
            <div className="app__content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/upload-video" element={<UploadVideo />} />
                    <Route path="/videos/:id" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
