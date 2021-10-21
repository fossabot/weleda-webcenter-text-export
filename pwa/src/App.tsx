import Header from './components/Header';
import Footer from './components/Footer';
import Upload from './components/Upload';

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main>
                <Upload />
            </main>
            <Footer />
        </div>
    );
}

export default App;
