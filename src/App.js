import React, { useEffect } from 'react';
import Projects from './components/Projects/Projects';
import Honors from './components/Honors/Honors';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });
    }, []);

    return (
        <div className="App">
            {/* Other components */}
            <Projects />
            <Honors />
            {/* Other components */}
        </div>
    );
}

export default App; 