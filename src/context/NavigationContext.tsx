// src/context/NavigationContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigationContextProviderProps {
  children: ReactNode;
}

const NavigationContext = createContext<any>(null);

export const NavigationContextProvider: React.FC<NavigationContextProviderProps> = ({ children }) => {
  const navigate = useNavigate();

  const navigateToHome = () => navigate('/');
  const navigateToAbout = () => navigate('/about');
  const navigateToPackages = () => navigate('/packages');
  const navigateToContact = (options = {}) => navigate('/contact', options);

  return (
    <NavigationContext.Provider
      value={{
        navigateToHome,
        navigateToAbout,
        navigateToPackages,
        navigateToContact,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  return useContext(NavigationContext);
};