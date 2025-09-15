// // pages/Account.js
// import React from 'react';
// import MenuLateral from '../components/MenuLateral'; // Reutilizando o Menu Lateral
// import './Account.css';
// import logo from '../img/netflix-logo-transparente.png';

// function Account() {
//     return (
//         <div>
//             {/* Navbar com Logo e Conta */}
//             <nav className="nav-bar">
//                 <div className="nav-left">
//                     <img className="logo" src={logo} alt="Logo Netflix" />
//                 </div>
//                 <div className="nav-right">
//                     <div className="account-button">
//                         <i className="icon"> </i>
//                         <span className="text">Conta</span>
//                     </div>
//                 </div>
//             </nav>

//             {/* Página de Configurações da Conta com Menu Lateral */}
//             <div className="account-page">
//                 <MenuLateral />  {/* Menu lateral estará aqui */}
//                 <div className="account-content">
//                     <h1>Configurações da Conta</h1>

//                     {/* Seção de Plano */}
//                     <div className="section plan">
//                         <h2>Plano</h2>
//                         <p>Plano: Padrão</p>
//                         <p>Renovação: 10 de Fevereiro de 2025</p>
//                         <button>Alterar Plano</button>
//                     </div>

//                     {/* Seção de Atalhos */}
//                     <div className="section shortcuts">
//                         <h2>Atalhos</h2>
//                         <div class="menu-item">
//                             <div class="text">Alterar plano</div>
//                             <div class="arrow"></div>
//                         </div>
//                         <div class="menu-item">
//                             <div class="text">Gerenciar a Forma de pagamento</div>
//                             <div class="arrow"></div>
//                         </div>
//                         <div class="menu-item">
//                             <div class="text">Comprar um acesso de assinante extra</div>
//                             <div class="arrow"></div>
//                         </div>
//                         <div class="menu-item">
//                             <div class="text">Gerenciar acesso e aparelhos</div>
//                             <div class="arrow"></div>
//                         </div>
//                         <div class="menu-item">
//                             <div class="text">Atualizar senha</div>
//                             <div class="arrow"></div>
//                         </div>
//                         <div class="menu-item">
//                             <div class="text">Transferir um Perfil</div>
//                             <div class="arrow"></div>
//                         </div>
//                         <div class="menu-item">
//                             <div class="text">Atualizar senha</div>
//                             <div class="arrow"></div>
//                         </div>
//                         <div class="menu-item">
//                             <div class="text">Ajusta o controle parental</div>
//                             <div class="arrow"></div>
//                         </div>
//                         <div class="menu-item">
//                             <div class="text">Editar Configurações</div>
//                             <div class="arrow"></div>
//                         </div>
//                     </div>

//                     {/* Seção de Gerenciar Perfil */}
//                     <div className="section profile">
//                         <h2>Gerenciar Perfil</h2>
//                         <ul>
//                             <li><a href="#">Alterar Foto de Perfil</a></li>
//                             <li><a href="#">Alterar Nome</a></li>
//                             <li><a href="#">Configurações de Privacidade</a></li>
//                         </ul>
//                     </div>

//                     {/* Seção de Logout */}
//                     <div className="section logout">
//                         <button>Sair da Conta</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Account;


import React from 'react'
import MenuLateral from '../Components/MenuLateral';
import { MdOutlineArrowForwardIos } from "react-icons/md"; // Ícone de seta
import { FaRegUserCircle } from "react-icons/fa"; // Ícone de usuário
import { RiLockPasswordLine, RiProfileLine, RiParentLine, RiEdit2Line } from "react-icons/ri"; // Ícones de atalhos
import { BsCreditCard, BsDisplay } from "react-icons/bs"; // Ícones de pagamento e dispositivos
import { AiOutlineUserAdd } from "react-icons/ai"; // Ícone de assinante extra
import { CgProfile } from "react-icons/cg"; // Ícone de perfil
import './Account.css';
import logo from '../img/netflix-logo-transparente.png';

function Account() {
    return (
        <div className="account-container">
            {/* Navbar */}
            <nav className="nav-bar">
                <div className="nav-left">
                    <img className="logo" src={logo} alt="Netflix" />
                </div>
                <div className="nav-right">
                    <div className="account-button">
                        <FaRegUserCircle className="user-icon" />
                        <span className="text">Conta</span>
                    </div>
                </div>
            </nav>

            {/* Layout principal */}
            <div className="account-page">
                <MenuLateral />
                <div className="account-content">
                    <h1>Conta</h1>

                    {/* Seção de Plano */}
                    <div className="section plan">
                        <div className="plan-header">
                            <h2>Assinatura</h2>
                            <span className="pill">Assinante desde 2023</span>
                        </div>
                        <p>Plano: <strong>Padrão</strong></p>
                        <p>Próximo pagamento: 31 de janeiro de 2025</p>
                        <p>**** **** **** 2717</p>
                        <button className="btn-primary">Gerenciar Assinatura</button>
                    </div>

                    {/* Seção de Atalhos */}
                    <div className="section shortcuts">
                        <h2>Atalhos</h2>
                        {[
                            { text: "Alterar plano", icon: <BsCreditCard /> },
                            { text: "Gerenciar a forma de pagamento", icon: <BsCreditCard /> },
                            { text: "Comprar um acesso de assinante extra", icon: <AiOutlineUserAdd /> },
                            { text: "Gerenciar acesso e aparelhos", icon: <BsDisplay /> },
                            { text: "Atualizar senha", icon: <RiLockPasswordLine /> },
                            { text: "Transferir um perfil", icon: <RiProfileLine /> },
                            { text: "Ajustar o controle parental", icon: <RiParentLine /> },
                            { text: "Editar configurações", icon: <RiEdit2Line /> }
                        ].map((item, index) => (
                            <div className="menu-item" key={index}>
                                <div className="menu-icon">{item.icon}</div>
                                <div className="text">{item.text}</div>
                                <MdOutlineArrowForwardIos className="arrow" />
                            </div>
                        ))}
                    </div>

                    {/* Seção de Gerenciar Perfil */}
                    <div className="section profile">
                        <h2>Gerenciar Perfil</h2>
                        <button className="btn-secondary">
                            <CgProfile className="profile-icon" /> Gerenciar perfis
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
