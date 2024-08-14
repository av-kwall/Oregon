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
            <div className="card-info-l">
                <IoMdTime />
                <p className="card-info-t">{time}</p>
            </div>
            <div className="card-info-r">
                <h6 className="card-info-da">{date}</h6>
                <h6 className="card-info-ti">{name}</h6>
                <p className="card-info-in">{institute}</p>
            </div>
        </div>
    );
}
