import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-slate-800/60 text-center text-slate-500 text-sm">
      <p>© {new Date().getFullYear()} Damla Aydın. Tüm hakları saklıdır.</p>
    </footer>
  );
};
