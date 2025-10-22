import React from 'react';
import { View, Text } from 'react-native';
import { MenuItem } from '../types/types';
import { styles, colors } from '../styles/Styles';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const getTagStyle = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'veg':
      case 'vegetarian':
        return [styles.tag, styles.tagVeg];
      case 'non-veg':
      case 'non-vegetarian':
        return [styles.tag, styles.tagNonVeg];
      case 'popular':
        return [styles.tag, styles.tagPopular];
      case 'new':
        return [styles.tag, styles.tagNew];
      default:
        return [styles.tag, { backgroundColor: colors.info }];
    }
  };

  const getTagTextStyle = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'veg':
      case 'vegetarian':
        return [styles.tagText, styles.tagVegText];
      case 'non-veg':
      case 'non-vegetarian':
        return [styles.tagText, styles.tagNonVegText];
      case 'popular':
        return [styles.tagText, styles.tagPopularText];
      case 'new':
        return [styles.tagText, styles.tagNewText];
      default:
        return [styles.tagText, { color: colors.white }];
    }
  };

  const formatPrice = (price: number) => `R${price.toFixed(2)}`;
  const formatTagName = (tag: string) => tag.charAt(0).toUpperCase() + tag.slice(1).replace('-', ' ');

  return (
    <View style={styles.menuCard}>
      <Text style={styles.cardTitle}>{item.name}</Text>

      {item.description && (
        <Text style={styles.cardDescription}>{item.description}</Text>
      )}

      <View style={styles.cardTags}>
        {item.tags.map((tag, index) => (
          <View key={index} style={getTagStyle(tag)}>
            <Text style={getTagTextStyle(tag)}>{formatTagName(tag)}</Text>
          </View>
        ))}
        <View style={[styles.tag, { backgroundColor: colors.backgroundSecondary }]}>
          <Text style={[styles.tagText, { color: colors.text }]}>
            {item.course.charAt(0).toUpperCase() + item.course.slice(1)}
          </Text>
        </View>
      </View>

      <Text style={styles.cardPrice}>{formatPrice(item.price)}</Text>
    </View>
  );
};

export default MenuCard;