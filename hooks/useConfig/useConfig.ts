import { useState } from 'react';

import { Config } from '../../definitions';

const useConfig = (initialConfig: Config) => {
  const [config, setConfig] = useState<Config>(initialConfig);

  const updateConfig = (
    key: string,
    value: number | boolean | string
  ): void => {
    setConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return {
    updateConfig,
    config
  };
};

export default useConfig;
