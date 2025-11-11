import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem } from '../types/types';

interface MenuContextType {
  menuItems: MenuItem[];
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  removeMenuItem: (id: string) => void; // <-- added
  isLoaded: boolean;
  setIsLoaded: (loaded: boolean) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const addMenuItem = (newItem: Omit<MenuItem, 'id'>) => {
    const item: MenuItem = {
      ...newItem,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    };
    setMenuItems(prev => [...prev, item]);
    setIsLoaded(true);
  };

  
// src/context/MenuContext.tsx — inside MenuProvider
const removeMenuItem = (id: string) => {
  setMenuItems(prev => prev.filter(item => item.id !== id));
};

  return (
    <MenuContext.Provider value={{ menuItems, addMenuItem, removeMenuItem, isLoaded, setIsLoaded }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};