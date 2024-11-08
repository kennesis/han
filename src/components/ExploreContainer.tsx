import { useState } from 'react';
import { IonButton } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [ 동전, 동전추가 ] = useState(0);

  async function 동전얻기() {
    동전추가(동전 + 1);
  }

  return (
    <div className="container">
      <strong>{동전}</strong>
      <IonButton onClick={() => 동전얻기()}>동전 얻기</IonButton>
    </div>
  );
};

export default ExploreContainer;
