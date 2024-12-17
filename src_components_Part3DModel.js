import React from 'react';
import { Viro3DObject, ViroMaterials } from '@viro-community/react-viro';

ViroMaterials.createMaterials({
  partMaterial: {
    lightingModel: "Lambert",
    diffuseColor: 'blue',
  },
});

const Part3DModel = ({ position, scale, rotation }) => {
  return (
    <Viro3DObject
      source={require('../../assets/part_model.obj')}
      position={position}
      scale={scale}
      rotation={rotation}
      type="OBJ"
      materials={["partMaterial"]}
    />
  );
};

export default Part3DModel;

