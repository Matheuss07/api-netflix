import {Routes, Route} from 'react-router-dom'
import Profiles from './pages/Profiles'
import Home from './pages/Home'
import Config from './pages/Config';
import Account from './pages/Account'; 
import FilmePage from './pages/FilmePage';

function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Profiles/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/config' element={<Config />} />
            <Route path='/account' element={<Account />} />  
            <Route path='/Teste' element={<FilmePage />} />
        </Routes>
    );
}
export default MainRoutes;