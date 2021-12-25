
 import './App.css';
import Details from './Components/Details';
import Home from './Components/Home'
import Header from './Components/Head';
import {Switch,Route} from 'react-router-dom'
import Skills from './Components/Skills';
import "./Components/PortStyles.css"
function App() {
  return (
    <div className='black'>
        
      <Header />
     
   <Switch>
     
         <Route path='/Details' component={Details} />
         
         
      
       
         <Route path='/Skills' component={Skills}/>
         <Route path='/Home'  component={Home} />

       </Switch>
    
    </div>
  );
}

export default App;
