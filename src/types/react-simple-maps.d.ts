declare module 'react-simple-maps' {
  import { ReactNode } from 'react';

  export interface ComposableMapProps {
    projectionConfig?: {
      scale?: number;
      center?: [number, number];
    };
    className?: string;
    children?: ReactNode;
  }

  export interface GeographiesProps {
    geography: string;
    children: (args: { geographies: unknown[] }) => ReactNode;
  }

  export interface GeographyProps {
    geography: unknown;
    style?: {
      default?: Record<string, unknown>;
      hover?: Record<string, unknown>;
      pressed?: Record<string, unknown>;
    };
  }

  export interface MarkerProps {
    coordinates: [number, number];
    children?: ReactNode;
  }

  export const ComposableMap: React.FC<ComposableMapProps>;
  export const Geographies: React.FC<GeographiesProps>;
  export const Geography: React.FC<GeographyProps>;
  export const Marker: React.FC<MarkerProps>;
}
