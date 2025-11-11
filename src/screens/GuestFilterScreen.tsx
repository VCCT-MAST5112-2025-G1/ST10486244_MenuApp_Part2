import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { MenuItem } from '../types/types';
import MenuCard from '../components/MenuCard';
import { useMenu } from '../context/MenuContext';
import { styles } from '../styles/Styles';

const GuestFilterScreen: React.FC = () => {
  const { menuItems } = useMenu();
  const [currentFilter, setCurrentFilter] = useState<'all' | 'appetizer' | 'main' | 'dessert' | 'beverage'>('all');

  const filterOptions = [
    { key: 'all', label: 'All' },
    { key: 'appetizer', label: 'Appetizer' },
    { key: 'main', label: 'Main Course' },
    { key: 'dessert', label: 'Dessert' },
    { key: 'beverage', label: 'Beverages' },
  ] as const;

  const filteredItems = useMemo(() => {
    if (currentFilter === 'all') return menuItems;
    return menuItems.filter((it: MenuItem) => it.course === currentFilter);
  }, [menuItems, currentFilter]);

  const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <View style={{ marginBottom: 12 }}>
      <MenuCard item={item} />
    </View>
  );

  const renderEmpty = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateText}>
        {menuItems.length === 0
          ? 'No menu items added yet. Please ask the chef to load the menu.'
          : 'No items match this filter.'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Guest Filter</Text>
      </View>

      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.filterBarContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 10 }}>
            {filterOptions.map(option => (
              <TouchableOpacity
                key={option.key}
                style={[
                  styles.filterButton,
                  currentFilter === option.key && styles.filterButtonActive,
                ]}
                onPress={() => setCurrentFilter(option.key as any)}
              >
                <Text style={[
                  styles.filterButtonText,
                  currentFilter === option.key && styles.filterButtonTextActive,
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ color: '#B3B3B3', marginLeft: 4 }}>
            Showing: {currentFilter === 'all' ? 'All courses' : currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)}
            {' • '}Total: {filteredItems.length}
          </Text>
        </View>

        <View style={styles.menuContainer}>
          {filteredItems.length > 0 ? (
            <FlatList
              data={filteredItems}
              renderItem={renderMenuItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={renderEmpty}
            />
          ) : (
            renderEmpty()
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default GuestFilterScreen;