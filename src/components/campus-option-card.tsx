import { IoMdTime } from "react-icons/io";

interface Props {
    name: string;
    time: string;
    date: string;
    institute: string;
}

export function CampusOptionCard({ name, time, date, institute }: Props) {
    return (
        <div className="flex gap-5 mb-5 cursor-pointer w-fit">
            <div className="flex items-center h-fit pt-1 gap-2">
                <IoMdTime />
                <p className="text-sm text-blue-800 font-semibold">{time}</p>
            </div>
            <div className="flex flex-col">
                <h6 className="font-bold text-xl text-blue-800">{date}</h6>
                <h6 className="font-bold text-xl">{name}</h6>
                <p className="text-sm">{institute}</p>
            </div>
        </div>
    );
}
