import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';

const Milestones = () => {
  const dictionary = [
    'Define DeFi Primitives',
    'Define DeFi Protocols',
    'Define Current DeFi Compositions',
    'Discuss current DeFi architectures (layers)',
    'Discuss current Vulnerabilities in DeFi',
    'Discuss current Counterparty Risk in DeFi',
    'Discuss sidechains and how they could apply to DeFi Compositions',
    'Conider recent developments in DeFi and the concept of DeFi 2.0',
    'Consider plublishing a paper based on the preceding analysis',
    'Assess all the preceding objectives and write new ones to implement DeFi Compositions',
    // Add more words as needed
  ];

  return (
    <div>
      <h1>Milestones</h1>
      <div>
        <ListGroup>
          {dictionary.map((word, index) => (
            <ListGroup.Item key={index} className="milestone-item">
              <strong>{index + 1}.</strong> {word}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default Milestones;

