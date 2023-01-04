import React from 'react';
import { Button, ConfigProvider } from 'antd';


const ThemeCustom = () => (
  
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#ff0000'
                }
            }}
        >
            <Button />
        </ConfigProvider>
      
);

export default ThemeCustom;
