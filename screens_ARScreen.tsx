import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchPartDetails } from '../api/partApi';

const ARScreen = ({ route }) => {
  const { partId } = route.params;
  const [partDetails, setPartDetails] = useState(null);

  useEffect(() => {
    const loadPartDetails = async () => {
      try {
        const details = await fetchPartDetails(partId);
        setPartDetails(details);
      } catch (error) {
        console.error('Erreur lors du chargement des détails de la pièce:', error);
      }
    };

    loadPartDetails();
  }, [partId]);

  if (!partDetails) {
    return <Text>Chargement des détails de la pièce...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>AR Screen (Web version)</Text>
      <View style={styles.overlay}>
        <Text>Nom: {partDetails.name}</Text>
        <Text>Quantité: {partDetails.quantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
});

export default ARScreen;

