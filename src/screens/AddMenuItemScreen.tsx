import React from 'react';
import {
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MenuItem } from '../types';
import AddMenuItem from '../components/AddMenuItem';
import { useMenu } from '../context/MenuContext';
import { styles } from '../styles/Styles';

const AddMenuItemScreen: React.FC = () => {
  const navigation = useNavigation();
  const { addMenuItem } = useMenu();

  const handleAddItem = (newItem: Omit<MenuItem, 'id'>) => {
    addMenuItem(newItem);
    
    // Navigate back to home screen after adding
    navigation.navigate('Home' as never);
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <AddMenuItem 
        onAddItem={handleAddItem}
        onCancel={handleCancel}
      />
    </View>
  );
};

export default AddMenuItemScreen;
