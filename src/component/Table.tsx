import React from 'react';
import '../Table.css';

interface Request {
  name: string;
  category: string;
  location: string;
  description: string;
  status: string;
}

const Table: React.FC = () => {
  const requests: Request[] = [
    { name: 'Kokou Jean', category: 'Voirie', location: 'Kpota, Lomé', description: 'Lorem ipsum...', status: 'À prendre' },
    { name: 'KODJO Patrick', category: 'Eclairage public', location: 'Kpota, Lomé', description: 'Lorem ipsum...', status: 'À prendre' },
    { name: 'AMA Afi', category: 'Voirie', location: 'Kpota, Lomé', description: 'Lorem ipsum...', status: 'En cours' },
    { name: 'Kokou Jean', category: 'Voirie', location: 'Kpota, Lomé', description: 'Lorem ipsum...', status: 'À prendre' },
    { name: 'KODJO Patrick', category: 'Eclairage public', location: 'Kpota, Lomé', description: 'Lorem ipsum...', status: 'À prendre' },
    { name: 'AMA Afi', category: 'Voirie', location: 'Kpota, Lomé', description: 'Lorem ipsum...', status: 'En cours' },
  ];

  return (
    
    <div className="table">
    <div id='title'>Listes des demandes et incidents</div>
    <br /> <div className='mesMenu'>
        <ul className='menu' ><li className='under1'>Tout</li><li className='under2'>SIgnalements</li><li className='under3'>Demandes </li></ul> 
        <ul className='menu2' ><li className='under1'>Demande</li><li className='under2'>Signalements</li></ul>  
        </div>
        <br/>
      <table>
        <thead>
          <tr>
            <th className='borsTable1'>Nom</th>
            <th>Catégorie</th>
            <th>Lieu</th>
            <th>Description</th>
            <th className='borsTable2'>Etat</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td>{request.name}</td>
              <td>{request.category}</td>
              <td>{request.location}</td>
              <td>{request.description}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default Table;
