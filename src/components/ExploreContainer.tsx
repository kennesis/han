import { useState, useEffect } from 'react';
import { IonButton } from '@ionic/react';
import { Capacitor } from '@capacitor/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [ 동전, 동전추가 ] = useState(0);

  const hapticsImpactHeavy = async () => {
    await Haptics.impact({ style: ImpactStyle.Heavy });
  };

  async function 동전얻기() {
    동전추가(동전 + 1);
    if(Capacitor.isNativePlatform()) await hapticsImpactHeavy();
  }

  useEffect(() => {
    alert(Capacitor.isNativePlatform());
  }, []);

  return (
    <div className="container">
      <strong>{동전}</strong>
      <IonButton onClick={() => 동전얻기()}>동전 얻기</IonButton>
    </div>
  );
};

export default ExploreContainer;
