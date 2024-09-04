import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Container({ children, className, id }: ContainerProps) {
    return (
        <div
            className={`max-w-[1248px] w-full mx-auto px-4 ${className || ""}`}
            id={id}
            role="region"
            aria-labelledby={id ? `${id}-label` : undefined}
        >
            {children}
        </div>
    );
}
