export type IButtonProps  =  React.ButtonHTMLAttributes<HTMLButtonElement> &  {
    children?: JSX.Element | string;
    variant: TButtonVariants;
    disabled?: boolean;
    width?: number;
  };
  
  export type TButtonVariants = "fill" | "outline";