import { ComponentProps } from 'react';

export type ButtonProps = {
    text: string,
    shape?: "default" | "circle" | "round",
    size?: "xs" | "sm" | "md" | "lg",
} & ComponentProps<'button'>