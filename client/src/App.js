import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import {Box} from '@mui/material';

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { AuthProvider } from './context/auth';
import CreatePost from "./components/CreatePost/CreatePost";
import ProfilePage from "./components/ProfilePage/ProfilePage";

const App = () => {
    return (
        <AuthProvider>
        <BrowserRouter>
        <Box>
            <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/auth" exact element={<Auth/>}/>
                    <Route path="/createpost" exact element={<CreatePost/>}/>
                    <Route path="/profile" exact element={<ProfilePage/>}/>
                </Routes>     
        </Box>
        </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
