
import { FC, ReactNode } from "react";
import L from "leaflet";

declare module "react-leaflet" {
  export interface MapContainerProps {
    center: L.LatLngExpression;
    zoom: number;
    children?: ReactNode;
    scrollWheelZoom?: boolean;
    style?: React.CSSProperties;
    className?: string;
  }

  export interface TileLayerProps {
    attribution: string;
    url: string;
  }

  export interface MarkerProps {
    position: L.LatLngExpression;
    icon?: L.Icon | L.DivIcon;
    children?: ReactNode;
  }

  export const MapContainer: FC<MapContainerProps>;
  export const TileLayer: FC<TileLayerProps>;
  export const Marker: FC<MarkerProps>;
  export const Popup: FC<any>;
}
