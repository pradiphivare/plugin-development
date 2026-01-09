type SeriesSize = 'sm' | 'md' | 'lg';

export interface BatteryPanel {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
}
