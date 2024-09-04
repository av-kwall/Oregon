interface SubtleBgProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function SubtleBg({ children, className, id }: SubtleBgProps) {
    return (
        <div
            className={className}
            style={{
                backgroundImage: "url('/subtle-bg.png')",
                backgroundSize: "contain",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
            }}
            id={id}
            role="presentation"
            aria-label={id ? `Background section with id ${id}` : undefined}
        >
            {children}
        </div>
    );
}
