import './App.scss';
import './components/Stylesheet/style.scss';
import './components/Stylesheet/Header.scss';
import './components/Stylesheet/Dashboard.scss';
import RoutesMap from './components/Customer/RoutesMap';

function App() {
  return (
    <>
    <div className='app_page'>
      <RoutesMap />
    </div>
    </>
  );
}
export default App;