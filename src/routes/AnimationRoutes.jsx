import {Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';

import ProtectedRoute from './ProtectedRoute';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Feed from '../screens/Feed';
import UserProfile from '../screens/UserProfile';

export default function AnimatedRoutes() {
    const location = useLocation();

    const pageTransition = {
        initial: { opacity: 0, scale: 0.99 },   // fade + leve zoom out
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.99 },
        transition: { duration: 0.4, ease: "easeInOut" },
    };

    return(
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route 
                    path='/'
                    element={
                        <motion.div style={{ height: "100vh", overflow: "hidden" }} {...pageTransition}>
                            <Login />
                        </motion.div>
                    }
                />
                <Route 
                    path='/login'
                    element={
                        <motion.div style={{ height: "100vh", overflow: "hidden" }} {...pageTransition}>
                            <Login />
                        </motion.div>
                    }
                />
                <Route 
                    path='/register'
                    element={
                        <motion.div style={{ height: "100vh", overflow: "hidden" }} {...pageTransition}>
                            <Register />
                        </motion.div>
                    }
                />
                <Route 
                    path='/feed'
                    element={
                        <ProtectedRoute>
                            <motion.div style={{ height: "100vh", overflow: "hidden" }} {...pageTransition}>
                                <Feed />
                            </motion.div>
                        </ProtectedRoute>
                    }
                />

                <Route 
                    path='/profile'
                    element={
                        <ProtectedRoute>
                            <motion.div style={{ height: "100vh", overflow: "hidden" }} {...pageTransition}>
                                <UserProfile />
                            </motion.div>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </AnimatePresence>
    )
}