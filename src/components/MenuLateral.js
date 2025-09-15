import './MenuLateral.css';
import { MdHomeFilled } from "react-icons/md";
import { MdCreditCard } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import { MdLaptop } from "react-icons/md";
import { MdPerson } from "react-icons/md";

function MenuLateral() {
    return (
        <div className='menu-lateral'>
            <ul className='menu-lista'>
                <li className='menu-item'>
                    <MdHomeFilled/>
                    <a className='menu-link selecionado'>Visão Geral</a>
                </li>
                <li className='menu-item'>
                    <MdCreditCard/>
                    <a className='menu-link'>Assinatura</a>
                </li>
                <li className='menu-item'>
                    <MdCheckCircle />
                    <a className='menu-link'>Segurança</a>
                </li>
                <li className='menu-item'>
                    <MdLaptop />
                    <a className='menu-link'>Aparelhos</a>
                </li>
                <li className='menu-item'>
                    <MdPerson />
                    <a className='menu-link'>Perfis</a>
                </li>
            </ul>
        </div>
    );
}

export default MenuLateral;