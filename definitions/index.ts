export interface HandleChange {
  target: HTMLInputElement;
}

export interface BoxShadow {
  id: number;
  active: boolean;
  name: string;
  horizontal: number;
  vertical: number;
  blur: number;
  spread: number;
  inset: boolean;
  color: string;
  background: string;
  width: number;
  height: number;
  rotation: number;
  borderRadius: number;
}

export interface BoxShadowWithAxis extends BoxShadow {
  x: number;
  y: number;
}

export interface Config {
  snapToGrid: boolean;
  gridSize: number;
}

export interface Options {
  items: BoxShadowWithAxis[];
  config: Config;
}
