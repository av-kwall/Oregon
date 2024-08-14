import { AccordionItem as Item } from "@szhsin/react-accordion";

interface AccordionItemProps {
    header: string;
    children: React.ReactNode;
}

export function AccordionItem({
    header,
    children,
    ...rest
}: AccordionItemProps) {
    return (
        <Item
            {...rest}
            header={({ state: { isEnter } }) => (
                <>
                    {header}
                    {isEnter ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-chevron-down ml-auto transition-transform duration-200 ease-out rotate-180"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="white"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-chevron-down ml-auto transition-transform duration-200 ease-out"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="black"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    )}
                </>
            )}
            className="border-b-2"
            buttonProps={{
                className: ({ isEnter }) =>
                    `flex w-full p-4 text-left  ${isEnter && "bg-[#003767] text-white"}`,
            }}
            contentProps={{
                className: "transition-height duration-200 ease-out",
            }}
            panelProps={{ className: "p-4" }}
        >
            {children}
        </Item>
    );
}
