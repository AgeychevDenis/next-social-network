import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface ModalProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   children: ReactNode;
   title?: string;
   open: boolean;
   setOpen: Function;
} 