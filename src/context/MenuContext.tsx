import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem } from '../types';

interface MenuContextType {
  menuItems: MenuItem[];
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
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
      id: Date.now().toString(),
    };
    setMenuItems(prev => [...prev, item]);
  };

  return (
    <MenuContext.Provider value={{
      menuItems,
      addMenuItem,
      isLoaded,
      setIsLoaded,
    }}>
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
