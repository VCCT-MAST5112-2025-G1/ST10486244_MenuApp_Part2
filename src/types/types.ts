export interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: 'appetizer' | 'main' | 'dessert' | 'beverage';
  price: number;
  tags: string[];
}

export interface CategoryStats {
  category: string;
  count: number;
  averagePrice: number;
}

export type RootTabParamList = {
  Home: undefined;
  AddItem: undefined;
};

export type RootStackParamList = {
  MainTabs: undefined;
};