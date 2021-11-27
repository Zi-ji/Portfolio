declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';
  const content: (props: SVGProps<SVGAElement>) => ReactElement;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}
