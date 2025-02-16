declare module 'web-vitals' {
    export function getCLS(onPerfEntry: (metric: any) => void): void;
    export function getFID(onPerfEntry: (metric: any) => void): void;
    export function getFCP(onPerfEntry: (metric: any) => void): void;
    export function getLCP(onPerfEntry: (metric: any) => void): void;
    export function getTTFB(onPerfEntry: (metric: any) => void): void;
  }