import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MenuItem } from '../types/types';
import { styles } from '../styles/Styles';

interface AddMenuItemProps {
  onAddItem: (item: Omit<MenuItem, 'id'>) => void;
  onCancel?: () => void;
}

const AddMenuItem: React.FC<AddMenuItemProps> = ({ onAddItem, onCancel }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<'appetizer' | 'main' | 'dessert' | 'beverage'>('main');
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const courseOptions = [
    { label: 'Appetizer', value: 'appetizer' },
    { label: 'Main Course', value: 'main' },
    { label: 'Dessert', value: 'dessert' },
    { label: 'Beverage', value: 'beverage' },
  ];

  const availableTags = ['veg', 'non-veg', 'popular', 'new'];

  const toggleTag = (tag: string) => {
    setTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const validateForm = (): boolean => {
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter a dish name');
      return false;
    }
    if (!description.trim()) {
      Alert.alert('Error', 'Please enter a description');
      return false;
    }
    const priceValue = parseFloat(price);
    if (isNaN(priceValue) || priceValue <= 0) {
      Alert.alert('Error', 'Please enter a valid price');
      return false;
    }
    if (tags.length === 0) {
      Alert.alert('Error', 'Please select at least one tag (veg/non-veg)');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const newItem: Omit<MenuItem, 'id'> = {
      name: name.trim(),
      description: description.trim(),
      course,
      price: parseFloat(price),
      tags,
    };

    onAddItem(newItem);
    Alert.alert('Success', 'Menu item added successfully!');

    // Reset form
    setName('');
    setDescription('');
    setCourse('main');
    setPrice('');
    setTags([]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.formContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.formTitle}>Add New Menu Item</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Dish Name *</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Enter dish name"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Description *</Text>
          <TextInput
            style={[styles.textInput, styles.multilineInput]}
            value={description}
            onChangeText={setDescription}
            placeholder="Enter dish description"
            placeholderTextColor="#999"
            multiline
            numberOfLines={3}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Course Category</Text>
          <View style={styles.picker}>
            <Picker
              selectedValue={course}
              onValueChange={(value) => setCourse(value)}
            >
              {courseOptions.map((option) => (
                <Picker.Item key={option.value} label={option.label} value={option.value} />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Price *</Text>
          <TextInput
            style={styles.numericInput}
            value={price}
            onChangeText={setPrice}
            placeholder="Enter price (e.g., 12.99)"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Tags *</Text>
          <View style={styles.cardTags}>
            {availableTags.map((tag) => (
              <TouchableOpacity
                key={tag}
                style={[
                  styles.tag,
                  tags.includes(tag) ? { backgroundColor: '#ff7043' } : { backgroundColor: '#ffe0b2' },
                ]}
                onPress={() => toggleTag(tag)}
              >
                <Text
                  style={[
                    styles.tagText,
                    tags.includes(tag) ? { color: '#fff' } : { color: '#333' },
                  ]}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1).replace('-', ' ')}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Add Menu Item</Text>
        </TouchableOpacity>

        {onCancel && (
          <TouchableOpacity
            style={[styles.submitButton, { backgroundColor: '#666', marginTop: 10 }]}
            onPress={onCancel}
          >
            <Text style={styles.submitButtonText}>Cancel</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddMenuItem;