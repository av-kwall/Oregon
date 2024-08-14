export function SubtleBg({
    children,
    className,
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) {
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
        >
            {children}
        </div>
    );
}
