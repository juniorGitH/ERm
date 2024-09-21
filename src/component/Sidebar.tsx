import React from 'react';
import '../Sidebar.css';
import TopBar from './TopBar';
import Table from './Table';


const Sidebar: React.FC = () => {
  return (
  <div className="Content">
    <div className="Constant"> 
        <div className="sidebar">
        
        <div className="sidebar__menu">
        <ul>

            <li className="active">Tableau de bord</li>
            <li >Demandes & Signalements</li>
        </ul>
        </div>
       

        <div className="sidebar__footer">
        <div className="settings">
        <hr />
            <span>Paramètres</span>
        </div>
        <div className="sidebar__logo">
        <h1>Cten</h1>
        </div>
        </div>
        
        </div>
        <div className="Rigth"> <TopBar/>
        <div className="Table"> <Table/> </div> 
        </div>
      
    </div>
    </div>
  );
};

export default Sidebar;
