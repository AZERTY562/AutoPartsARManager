import React, { useState, useEffect } from 'react';
import { ViroNode, ViroText, ViroImage } from '@viro-community/react-viro';

const DirectionArrow = ({ userPosition, partPosition }) => {
  const [direction, setDirection] = useState({ x: 0, y: 0, z: 0 });
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const dx = partPosition.x - userPosition.x;
    const dy = partPosition.y - userPosition.y;
    const dz = partPosition.z - userPosition.z;

    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
    const normalizedDirection = {
      x: dx / distance,
      y: dy / distance,
      z: dz / distance,
    };

    setDirection(normalizedDirection);
    setDistance(distance);
  }, [userPosition, partPosition]);

  return (
    <ViroNode position={[0, 0, -1]}>
      <ViroImage
        source={require('../../assets/arrow.png')}
        position={[0, 0.5, 0]}
        scale={[0.2, 0.2, 0.2]}
        rotation={[0, Math.atan2(direction.x, direction.z) * 180 / Math.PI, 0]}
      />
      <ViroText
        text={`Distance: ${distance.toFixed(2)}m`}
        position={[0, 0.3, 0]}
        scale={[0.2, 0.2, 0.2]}
        style={{ color: 'white', fontFamily: 'Arial', fontSize: 20 }}
      />
    </ViroNode>
  );
};

export default DirectionArrow;

