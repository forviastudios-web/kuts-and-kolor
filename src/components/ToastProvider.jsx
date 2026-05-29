import React from 'react';
import { Toaster } from './ui/sonner';

const ToastProvider = ({ children }) => {
  return (
    <>
      {children}
      <Toaster position="top-right" richColors />
    </>
  );
};

export default ToastProvider;