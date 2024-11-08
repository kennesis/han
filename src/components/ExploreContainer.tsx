import { useState } from 'react';
import { IonButton } from '@ionic/react';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [ 동전, 동전추가 ] = useState(0);
  const [ 진동기능, 진동기능전환 ] = useState(false);

  const hapticsImpactLight = async () => {
    await Haptics.impact({ style: ImpactStyle.Light });
  };

  async function 동전얻기() {
    동전추가(동전 + 1);
    await hapticsImpactLight();
  }

  return (
    <div className="container">
      <strong>{동전}</strong>
      <IonButton onClick={() => 동전얻기()}>동전 얻기</IonButton>
    </div>
  );
};

export default ExploreContainer;
