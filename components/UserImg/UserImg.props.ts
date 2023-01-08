import { HtmlHTMLAttributes, DetailedHTMLProps } from "react";

export interface UserImgProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
   urlImg: unknown;
   name?: string;
   w: number;
   h: number;
   size: 'sizeS' | 'sizeM' | 'sizeL';
}