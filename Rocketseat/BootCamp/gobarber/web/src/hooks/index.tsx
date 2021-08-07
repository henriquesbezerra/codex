import React from 'react';
import { ToastProvider } from './Toast';
import { AuthProvider } from './AuthContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToastProvider>
  );
};

export default AppProvider;
