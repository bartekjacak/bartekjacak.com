import { HTMLAttributes } from 'react';

export interface BodyProps extends HTMLAttributes<HTMLDivElement> {
  content: string | string[];
}
