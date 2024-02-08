import type { ComponentPropsWithoutRef } from "react";

export type SVGProps = ComponentPropsWithoutRef<"svg">;

export const MenuIcon = ({ className, ...props }: SVGProps) =>
    <svg
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="none"
        className={className}
        {...props}
    >
        <path d="M17.2917 5.83333C17.2917 6.17851 17.0118 6.45833 16.6667 6.45833L3.33334 6.45833C2.98816 6.45833 2.70834 6.17851 2.70834 5.83333C2.70834 5.48815 2.98816 5.20833 3.33334 5.20833L16.6667 5.20833C17.0118 5.20833 17.2917 5.48815 17.2917 5.83333Z" fill="#F96332"/>
        <path d="M17.2917 10C17.2917 10.3452 17.0118 10.625 16.6667 10.625L3.33334 10.625C2.98816 10.625 2.70834 10.3452 2.70834 10C2.70834 9.65482 2.98816 9.375 3.33334 9.375L16.6667 9.375C17.0118 9.375 17.2917 9.65482 17.2917 10Z" fill="#F96332"/>
        <path d="M17.2917 14.1667C17.2917 14.5118 17.0118 14.7917 16.6667 14.7917L3.33334 14.7917C2.98816 14.7917 2.70834 14.5118 2.70834 14.1667C2.70834 13.8215 2.98816 13.5417 3.33334 13.5417L16.6667 13.5417C17.0118 13.5417 17.2917 13.8215 17.2917 14.1667Z" fill="#F96332"/>
    </svg>


export const MagnifierIcon = ({ className, ...props }: SVGProps) =>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className={className}
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.58332 2.29167C5.55625 2.29167 2.29166 5.55626 2.29166 9.58334C2.29166 13.6104 5.55625 16.875 9.58332 16.875C13.6104 16.875 16.875 13.6104 16.875 9.58334C16.875 5.55626 13.6104 2.29167 9.58332 2.29167ZM1.04166 9.58334C1.04166 4.86591 4.86589 1.04167 9.58332 1.04167C14.3008 1.04167 18.125 4.86591 18.125 9.58334C18.125 11.7171 17.3426 13.6681 16.049 15.1652L18.7753 17.8914C19.0193 18.1355 19.0193 18.5312 18.7753 18.7753C18.5312 19.0194 18.1355 19.0194 17.8914 18.7753L15.1652 16.0491C13.6681 17.3426 11.7171 18.125 9.58332 18.125C4.86589 18.125 1.04166 14.3008 1.04166 9.58334Z" fill="#ABAEB7"/>
    </svg>


export const SearchArrowIcon = ({ className, ...props }: SVGProps) =>
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.6921 7.09325C3.91674 6.83117 4.3113 6.80082 4.57338 7.02546L9.99997 11.6768L15.4266 7.02546C15.6886 6.80082 16.0832 6.83117 16.3078 7.09325C16.5325 7.35533 16.5021 7.74989 16.24 7.97453L10.4067 12.9745C10.1727 13.1752 9.82728 13.1752 9.59323 12.9745L3.75989 7.97453C3.49781 7.74989 3.46746 7.35533 3.6921 7.09325Z" fill="#ABAEB7"/>
    </svg>