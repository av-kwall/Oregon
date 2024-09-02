import { useEffect } from "react";
import "./style.css"

interface Props {
    items: {
        title: string;
        content: React.ReactNode;
    }[];
}

export function Accordion(props: Props) {
    useEffect(() => {
        require("./script.js");
    }, []);

    return (
        <div className="accordion">
            {props.items.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <button className="accordion-header">
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
                    <div className="accordion-content">
                        <div className="accordion-content-inner">{item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
