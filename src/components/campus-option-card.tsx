import { IoMdTime } from "react-icons/io";

interface Props {
    name: string;
    time: string;
    date: string;
    institute: string;
}

export function CampusOptionCard({ name, time, date, institute }: Props) {
    return (
        <div className="items">
            <div className="card-info-l" aria-label="Time">
                <IoMdTime aria-hidden="true" />
                <p className="card-info-t">{time}</p>
            </div>
            <div className="card-info-r">
                <h6 className="card-info-da" aria-level={6}>
                    {date}
                </h6>
                <h6 className="card-info-ti" aria-level={6}>
                    {name}
                </h6>
                <p className="card-info-in">{institute}</p>
            </div>
        </div>
    );
}
