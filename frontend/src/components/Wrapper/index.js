import Navbar from './Navbar';
import Footer from './Footer';

const index = ({children}) => {
    return (
        <section className='flex flex-col h-screen'>
            <Navbar />
            {children}
            <Footer />
        </section>
    );
};

export default index;