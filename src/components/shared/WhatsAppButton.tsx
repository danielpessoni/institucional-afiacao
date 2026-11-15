import type { ReactNode } from "react";
import { Button } from "./Button";

export const WHATSAPP_PHONE = "5511900000000";

interface WhatsAppButtonProps {
    className?: string;
    children: ReactNode;
}

export const WhatsAppButton = ({ className = "", children }: WhatsAppButtonProps) => {
    const handleClick = () => {
        window.open(`https://wa.me/${WHATSAPP_PHONE}`, "_blank");
    };

    return (
        <Button variant="primary" className={className} onClick={handleClick}>
            {children}
        </Button>
    );
};