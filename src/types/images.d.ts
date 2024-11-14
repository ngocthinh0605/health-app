declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg';
declare module '*.png';
declare module '*.svg' {
  const content: any;
  export default content;
}
