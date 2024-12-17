import React from 'react';
import { ViroARScene, ViroText, ViroConstants, ViroARTrackingTargets, ViroARImageMarker } from '@viro-community/react-viro';

const ARScene = ({ partDetails }) => {
  const [text, setText] = React.useState('Initialisation AR...');

  function onInitialized(state, reason) {
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('Scannez le marqueur de la pièce');
    } else if (state === ViroConstants.TRACKING_NONE) {
      setText('Impossible de détecter le marqueur');
    }
  }

  ViroARTrackingTargets.createTargets({
    "targetOne": {
      source: { uri: "https://picsum.photos/200" },
      orientation: "Up",
      physicalWidth: 0.1 // mètres
    }
  });

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroARImageMarker target={"targetOne"}>
        <ViroText
          text={`${partDetails.name}\nQuantité: ${partDetails.quantity}`}
          scale={[.1, .1, .1]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
};

const styles = {
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
};

export default ARScene;

