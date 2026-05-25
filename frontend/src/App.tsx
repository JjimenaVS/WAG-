import NavHeader from './components/nav';

const navOptions = ['Home', 'About', 'Blog', 'Help'];

function App() {
  return (
    <div>
      <NavHeader logo="WAG!" options={navOptions} />
    </div>
  );
}

export default App;
