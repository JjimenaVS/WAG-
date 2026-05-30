import Footer from './components/layout/Footer';
import NavHeader from './components/layout/NavBar';

const navOptions = ['Home', 'About', 'Blog', 'Help'];

function App() {
  return (
    <div>
      <NavHeader logo="WAG!" options={navOptions} />
      <Footer logo="WAG!" options={navOptions} socialMedia={[]} />
    </div>


  );
}

export default App;
