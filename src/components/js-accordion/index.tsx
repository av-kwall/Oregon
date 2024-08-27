import "./style.css";

interface AccordionItemProps {
    title: string;
    content: string;
}

function Accordion(props: { items: AccordionItemProps[] }) {
    /**
     * Handles the toggle event for the accordion item.
     *
     * @param {React.MouseEvent<HTMLButtonElement>} e - The mouse event that triggered the toggle.
     * @return {void} This function does not return anything.
     */
    const handleToggle = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const header = e.currentTarget;
        const content = header.nextElementSibling as HTMLElement;
        const isActive = header.classList.contains("active");

        document.querySelectorAll(".accordion-header").forEach((header) => {
            (header as HTMLButtonElement).classList.remove("active");
        });
        document.querySelectorAll(".accordion-content").forEach((content) => {
            (content as HTMLElement).classList.remove("show");
        });

        if (!isActive) {
            header.classList.add("active");
            content.classList.add("show");
        }
    };

    return (
        <div className="accordion">
            {props.items.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <button className="accordion-header" onClick={handleToggle}>
                        <h3>{item.title}</h3>
                        <svg
                            className="accordion-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <polyline
                                points="6 9 12 15 18 9"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <div className="accordion-content">{item.content}</div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;
