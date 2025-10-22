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
import { MenuItem, CategoryStats } from '../types/types';
import MenuCard from '../components/MenuCard';
import { useMenu } from '../context/MenuContext';
import { styles } from '../styles/Styles';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const { menuItems, addMenuItem, isLoaded, setIsLoaded } = useMenu();
  const [currentFilter, setCurrentFilter] = useState('all');

  // Sample menu data (All prices in Rand)
const sampleMenuItems: MenuItem[] = [
  { id: '1', name: 'Caesar Salad', description: 'Fresh romaine lettuce with parmesan cheese, croutons, and caesar dressing', course: 'appetizer', price: 89.99, tags: ['veg', 'popular'] },
  { id: '2', name: 'Buffalo Wings', description: 'Spicy chicken wings served with celery and blue cheese dip', course: 'appetizer', price: 125, tags: ['non-veg', 'popular'] },
  { id: '3', name: 'Mozzarella Sticks', description: 'Crispy breaded mozzarella cheese served with marinara sauce', course: 'appetizer', price: 74.99, tags: ['veg'] },
  { id: '4', name: 'Spaghetti Bolognese', description: 'Classic Italian pasta with rich meat sauce and parmesan cheese', course: 'main', price: 139.99, tags: ['non-veg', 'popular'] },
  { id: '5', name: 'Grilled Chicken', description: 'Tender grilled chicken breast with herbs and spices', course: 'main', price: 155.50, tags: ['non-veg', 'new'] },
  { id: '6', name: 'Cheese Pizza', description: 'Traditional pizza with mozzarella cheese and tomato sauce', course: 'main', price: 120.99, tags: ['veg', 'popular'] },
  { id: '7', name: 'Veggie Burger', description: 'Plant-based burger with fresh vegetables and special sauce', course: 'main', price: 95.99, tags: ['veg', 'new'] },
  { id: '8', name: 'Fish Tacos', description: 'Fresh fish tacos with cabbage slaw and lime crema', course: 'main', price: 135.50, tags: ['non-veg'] },
  { id: '9', name: 'Chocolate Cake', description: 'Rich chocolate cake with chocolate ganache and fresh berries', course: 'dessert', price: 69.99, tags: ['veg', 'popular'] },
  { id: '10', name: 'Tiramisu', description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone', course: 'dessert', price: 79.99, tags: ['veg'] },
  { id: '11', name: 'Ice Cream Sundae', description: 'Vanilla ice cream with chocolate sauce, whipped cream, and cherry', course: 'dessert', price: 59.99, tags: ['veg'] },
  { id: '12', name: 'Fresh Orange Juice', description: 'Freshly squeezed orange juice served chilled', course: 'beverage', price: 39.99, tags: ['veg'] },
  { id: '13', name: 'Cappuccino', description: 'Rich espresso with steamed milk and foam', course: 'beverage', price: 42.50, tags: ['veg', 'popular'] },
  { id: '14', name: 'Craft Beer', description: 'Local craft beer selection - ask server for today\'s options', course: 'beverage', price: 59.99, tags: ['non-veg'] },
];

  const filterOptions = [
    { key: 'all', label: 'All' },
    { key: 'appetizer', label: 'Starters' },
    { key: 'main', label: 'Main Course' },
    { key: 'dessert', label: 'Dessert' },
    { key: 'beverage', label: 'Beverages' },
  ];

  const loadMenu = () => {
    if (isLoaded) {
      Alert.alert('Info', 'Menu already loaded!');
      return;
    }
    sampleMenuItems.forEach(item => addMenuItem({
      name: item.name,
      description: item.description,
      course: item.course,
      price: item.price,
      tags: item.tags
    }));
    setIsLoaded(true);
  };

  const handleAddItem = () => {
    navigation.navigate('AddItem' as never);
  };

  const filteredItems = useMemo(() => {
    if (currentFilter === 'all') return menuItems;
    return menuItems.filter(item => item.course === currentFilter);
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

  const renderMenuItem = ({ item }: { item: MenuItem }) => <MenuCard item={item} />;

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateText}>
        {menuItems.length === 0
          ? 'Welcome to My Food App!\n Load the menu to get started and to add your own dishes.'
          : 'No items match the current filter'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🍽️ My Food App</Text>
        {/* Disabled the top-right Add Dish button as requested */}
        {/* <TouchableOpacity style={styles.headerButton} onPress={handleAddItem}>
          <Text style={styles.headerButtonText}>+ Add Dish</Text>
        </TouchableOpacity> */}
      </View>

      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        {/* Filter Bar */}
        <View style={styles.filterBarContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 10 }}>
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
        </View>

        {/* Counter */}
        {menuItems.length > 0 && (
          <View style={styles.counter}>
            <Text style={styles.counterText}>
              Total Dishes: {filteredItems.length}
            </Text>
          </View>
        )}

        {/* Statistics */}
        {menuItems.length > 0 && categoryStats.length > 0 && (
          <View style={styles.statsContainer}>
            <Text style={styles.statsTitle}>Category Statistics</Text>
            {categoryStats.map((stat, index) => (
              <View key={index} style={styles.statItem}>
                <Text style={styles.statLabel}>{stat.category}:</Text>
                <Text style={styles.statValue}>
                  {stat.count} items
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.length > 0 ? (
            <FlatList
              data={filteredItems}
              renderItem={renderMenuItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={renderEmptyState}
            />
          ) : (
            renderEmptyState()
          )}
        </View>

        {/* Load Menu Button */}
        {menuItems.length === 0 && (
          <TouchableOpacity style={styles.submitButton} onPress={loadMenu}>
            <Text style={styles.submitButtonText}>Load Menu</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;