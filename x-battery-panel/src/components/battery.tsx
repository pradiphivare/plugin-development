import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from '../types';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ data }) => {
  if (data.series.length === 0) {
    return <div style={{ padding: 20 }}>No data</div>;
  }

  const series = data.series[0];
  const field = series.fields.find(f => f.type === 'number');
  const value = field?.values[0] ?? 0;

  let color = 'green';

  if (value < 30) {
    color = 'red';
  } else if (value < 60) {
    color = 'orange';
  }

  return (
    <div style={{ padding: 20 }}>
      <h3>🔋 Battery</h3>

      <div
        style={{
          width: 120,
          height: 40,
          border: '2px solid black',
          position: 'relative',
          borderRadius: 4,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${value}%`,
            backgroundColor: color,
          }}
        />

        <div
          style={{
            position: 'absolute',
            right: -8,
            top: 10,
            width: 6,
            height: 20,
            backgroundColor: 'black',
          }}
        />
      </div>

      <p>{value}%</p>
    </div>
  );
};
