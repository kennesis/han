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
  const [ 진동기능, 진동기능전환 ] = useState(false);

  function 동전얻기() {
    동전추가(동전 + 1);
    if(진동기능) {
      alert('진동');
      Haptics.impact({ style: ImpactStyle.Light });
    }
  }

  useEffect(() => {
    // 플랫폼 및 기능 확인
    if (Capacitor.isNativePlatform() && typeof Haptics.vibrate === 'function') {
      console.log('햅틱 진동 기능을 지원합니다.');
      진동기능전환(true);
    }
  }, []);

  return (
    <div className="container">
      <strong>{동전}</strong>
      <IonButton onClick={() => 동전얻기()}>동전 얻기</IonButton>
    </div>
  );
};

export default ExploreContainer;
