import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';
import { store } from 'src/redux/store';
import { ConfigProvider } from 'antd';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'rgb(70, 130, 180)',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </Provider>
);
