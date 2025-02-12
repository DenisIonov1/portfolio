import {Route, Routes, useLocation} from "react-router-dom";
import {PageTransition} from "./PageTransition.tsx";
import {Home} from "../pages/Home.tsx";
import {About} from "../pages/About.tsx";
import {Contacts} from "../pages/Contacts.tsx";
import {Projects} from "../pages/Projects.tsx";
import {Skills} from "../pages/Skills.tsx";
import React from "react";
import {AnimatePresence} from "framer-motion";

const routes = [
    {path: "/", component: Home},
    {path: "/about", component: About},
    {path: "/contacts", component: Contacts},
    {path: "/projects", component: Projects},
    {path: "/skills", component: Skills},
];

export const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {routes.map(({path, component: Component}) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <PageTransition>
                                <Component />
                            </PageTransition>
                        }
                    />
                ))}
            </Routes>
        </AnimatePresence>
    );
};