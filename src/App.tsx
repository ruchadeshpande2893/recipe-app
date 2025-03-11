import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Recipe from "./Pages/Recipe";
import Layout from "./Layout";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/recipe" element={<Recipe />}/>
                </Route>
            </Routes>
        </Router>
    )
} 