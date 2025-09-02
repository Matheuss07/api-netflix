import './Profiles.css'
import SelecaoPerfil from '../components/SelecaoPerfil';

import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.jpg';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';
import icon5 from '../img/addbg.png';

function Profiles (){
    // -----------------------------------
    const usuario1 = {nome: 'Alexsander', foto: icon1 }
    const usuario2 = {nome: 'José', foto: icon2 }
    const usuario3 = {nome: 'João', foto: icon3 }
    const usuario4 = {nome: 'Maria', foto: icon4 }
    const usuario5 = {nome: 'Adicionar perfil', foto: icon5 }
    const usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5];
    // -----------------------------------

    return(
        <SelecaoPerfil listaDeUsuarios={usuarios}/>
    );
}
export default Profiles;