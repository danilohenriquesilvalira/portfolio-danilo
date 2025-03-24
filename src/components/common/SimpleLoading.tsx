import React from 'react';

const SimpleLoading = () => {
  return (
    <div className="fixed inset-0 bg-primary flex flex-col items-center justify-center z-50">
      <div className="w-12 h-12 border-4 border-tech-blue border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-white font-medium">Carregando...</p>
    </div>
  );
};

export default SimpleLoading;