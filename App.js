import './App.css';
import 'react-notifications/lib/notifications.css';
import Notification from './Componets/Notification';
import TudoList from './Componets/TudoList';
import List from './Componets/List';
function App() {

  

  return (
  
    <div className = "demo" >
   <Notification/>
   <TudoList/>
   <List/>
  </div>
);
}


export default App;
