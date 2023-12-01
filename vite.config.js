import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  build: {
    // ...
  },
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxInject: `import React from 'react'`,
  },
};