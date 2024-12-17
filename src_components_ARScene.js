import React from 'react';
import { ViroARScene, ViroText, ViroConstants, ViroARTrackingTargets, ViroARImageMarker, ViroBox, ViroMaterials } from '@viro-community/react-viro';

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
    "targetPart": {
      source: require('../../assets/target_image.png'),
      orientation: "Up",
      physicalWidth: 0.1 // mètres
    }
  });

  ViroMaterials.createMaterials({
    partMaterial: {
      diffuseColor: 'blue',
    },
  });

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroARImageMarker target={"targetPart"}>
        <ViroText
          text={`${partDetails.name}\nQuantité: ${partDetails.quantity}`}
          scale={[0.1, 0.1, 0.1]}
          position={[0, 0.1, 0]}
          style={styles.textStyle}
        />
        <ViroBox
          position={[0, 0, 0]}
          scale={[0.1, 0.1, 0.1]}
          materials={["partMaterial"]}
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
};

const styles = {
  textStyle: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
};

export default ARScene;

