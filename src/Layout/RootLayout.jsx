import { Outlet } from 'react-router';
import Navbar from '../Componenet/Sheaard/Navbar';
import Footer from '../Componenet/Sheaard/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
             <Footer/>
        </div>
    );
};

export default RootLayout;