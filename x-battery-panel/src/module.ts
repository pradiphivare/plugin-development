import { PanelPlugin } from '@grafana/data';
import { BatteryPanel } from './components/BatteryPanel';
import { BatteryPanel as BatteryPanelOptions } from './types';

export const plugin = new PanelPlugin<BatteryPanelOptions>(BatteryPanel).setPanelOptions((builder) => {
  return builder
    // Battery 
    .addTextInput({
      path: 'label',
      name: 'Battery label',
      description: 'Title shown above the battery',
      defaultValue: 'Battery',
    })

    // Min
    .addNumberInput({
      path: 'min',
      name: 'Minimum value',
      defaultValue: 0,
    })
    

    // Max value
    .addNumberInput({
      path: 'max',
      name: 'Maximum value',
      defaultValue: 100,
    })

    // Low battery threshold
    .addNumberInput({
      path: 'lowThreshold',
      name: 'Low battery (%)',
      description: 'Below this value battery turns red',
      defaultValue: 30,
    })

    // Medium battery threshold
    .addNumberInput({
      path: 'mediumThreshold',
      name: 'Medium battery (%)',
      description: 'Below this value battery turns orange',
      defaultValue: 60,
    })

    // Show percentage text
    .addBooleanSwitch({
      path: 'showPercentage',
      name: 'Show percentage text',
      defaultValue: true,
    });
});
