/**
 * Progressive Blur Style - TypeScript Definitions
 * Advanced layered blur effects for web elements
 */

export interface BlurLayerOptions {
  enabled?: boolean;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  height?: string;
  layers?: number;
  maxBlur?: number;
  startOpacity?: number;
  endOpacity?: number;
  position?: 'top' | 'bottom';
  curve?: [number, number, number, number];
}

export interface LuminosityLayerOptions {
  enabled?: boolean;
  brightness?: number;
  contrast?: number;
  saturate?: number;
  opacity?: number;
  blendMode?: string;
}

export interface GradientColor {
  color: string;
  stop: number;
  opacity: number;
}

export interface GradientOptions {
  direction: string;
  colors: GradientColor[];
}

export interface TintLayerOptions {
  enabled?: boolean;
  color?: string;
  gradient?: GradientOptions | null;
  opacity?: number;
  blendMode?: string;
}

export interface NoiseLayerOptions {
  enabled?: boolean;
  opacity?: number;
  blendMode?: string;
}

export interface BlurStyleOptions {
  blur?: BlurLayerOptions;
  luminosity?: LuminosityLayerOptions;
  tint?: TintLayerOptions;
  noise?: NoiseLayerOptions;
}

export interface BlurStyleInstance {
  update: (newOptions: Partial<BlurStyleOptions>) => void;
  destroy: () => void;
}

/**
 * Creates a progressive blur effect on the specified element
 * @param target - The DOM element to apply the effect to
 * @param options - Configuration options for the blur effect
 * @returns An instance with update and destroy methods
 */
export declare function progressiveBlurStyle(
  target: HTMLElement,
  options?: BlurStyleOptions
): BlurStyleInstance;

export default progressiveBlurStyle;
