import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MenuItem, CategoryStats } from '../types';
import MenuCard from '../components/MenuCard';
import { useMenu } from '../context/MenuContext';
import { styles } from '../styles/Styles';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const { menuItems, addMenuItem, isLoaded, setIsLoaded } = useMenu();
  const [currentFilter, setCurrentFilter] = useState('all');

  // Sample menu data based on the HTML file
  const sampleMenuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Spaghetti Bolognese',
      description: 'Classic Italian pasta with rich meat sauce and parmesan cheese',
      course: 'main',
      price: 12.99,
      tags: ['non-veg', 'popular'],
    },
    {
      id: '2',
      name: 'Grilled Chicken',
      description: 'Tender grilled chicken breast with herbs and spices',
      course: 'main',
      price: 15.50,
      tags: ['non-veg', 'new'],
    },
    {
      id: '3',
      name: 'Cheese Pizza',
      description: 'Traditional pizza with mozzarella cheese and tomato sauce',
      course: 'main',
      price: 10.99,
      tags: ['veg', 'popular'],
    },
    {
      id: '4',
      name: 'Veggie Burger',
      description: 'Plant-based burger with fresh vegetables and special sauce',
      course: 'main',
      price: 8.99,
      tags: ['veg', 'new'],
    },
    {
      id: '5',
      name: 'Fish Tacos',
      description: 'Fresh fish tacos with cabbage slaw and lime crema',
      course: 'main',
      price: 13.50,
      tags: ['non-veg'],
    },
  ];

  const filterOptions = [
    { key: 'all', label: 'All' },
    { key: 'popular', label: 'Popular' },
    { key: 'new', label: 'New' },
    { key: 'veg', label: 'Veg' },
    { key: 'non-veg', label: 'Non-Veg' },
  ];

  const loadMenu = () => {
    if (isLoaded) {
      Alert.alert('Info', 'Menu already loaded!');
      return;
    }
    sampleMenuItems.forEach(item => addMenuItem(item));
    setIsLoaded(true);
  };

  const handleAddItem = () => {
    navigation.navigate('AddItem' as never);
  };

  const filteredItems = useMemo(() => {
    if (currentFilter === 'all') {
      return menuItems;
    }
    return menuItems.filter(item => 
      item.tags.some(tag => tag === currentFilter)
    );
  }, [menuItems, currentFilter]);

  const categoryStats = useMemo((): CategoryStats[] => {
    const stats: { [key: string]: { count: number; totalPrice: number } } = {};
    
    menuItems.forEach(item => {
      if (!stats[item.course]) {
        stats[item.course] = { count: 0, totalPrice: 0 };
      }
      stats[item.course].count++;
      stats[item.course].totalPrice += item.price;
    });

    return Object.entries(stats).map(([category, data]) => ({
      category: category.charAt(0).toUpperCase() + category.slice(1),
      count: data.count,
      averagePrice: data.totalPrice / data.count,
    }));
  }, [menuItems]);

  const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <MenuCard item={item} />
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateText}>
        {isLoaded ? 'No items match the current filter' : 'Load the menu to see items'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🍽️ My Food App</Text>
        <TouchableOpacity style={styles.headerButton} onPress={handleAddItem}>
          <Text style={styles.headerButtonText}>+ Add Dish</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        {/* Filter Bar */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.filterBar}
          contentContainerStyle={{ paddingRight: 20 }}
        >
          {filterOptions.map((option) => (
            <TouchableOpacity
              key={option.key}
              style={[
                styles.filterButton,
                currentFilter === option.key && styles.filterButtonActive,
              ]}
              onPress={() => setCurrentFilter(option.key)}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  currentFilter === option.key && styles.filterButtonTextActive,
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Counter */}
        {isLoaded && (
          <View style={styles.counter}>
            <Text style={styles.counterText}>
              Total Dishes: {filteredItems.length}
            </Text>
          </View>
        )}

        {/* Statistics */}
        {isLoaded && categoryStats.length > 0 && (
          <View style={styles.statsContainer}>
            <Text style={styles.statsTitle}>Category Statistics</Text>
            {categoryStats.map((stat, index) => (
              <View key={index} style={styles.statItem}>
                <Text style={styles.statLabel}>{stat.category}:</Text>
                <Text style={styles.statValue}>
                  {stat.count} items, avg ${stat.averagePrice.toFixed(2)}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {isLoaded ? (
            <FlatList
              data={filteredItems}
              renderItem={renderMenuItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={renderEmptyState}
            />
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>
                Welcome to My Food App!{'\n'}
                Load the menu to see available dishes.
              </Text>
            </View>
          )}
        </View>

        {/* Load Menu Button */}
        {!isLoaded && (
          <TouchableOpacity style={styles.submitButton} onPress={loadMenu}>
            <Text style={styles.submitButtonText}>Load Menu</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
