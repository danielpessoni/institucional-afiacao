import type { ReactNode } from "react";
import { Button } from "./Button";

interface WhatsAppButtonProps {
    className?: string;
    children: ReactNode;
}

export const WhatsAppButton = ({ className = "", children }: WhatsAppButtonProps) => {
    const handleClick = () => {
        window.open("https://wa.me/5511900000000", "_blank");
    };

    return (
        <Button variant="primary" className={className} onClick={handleClick}>
            {children}
        </Button>
    );
};