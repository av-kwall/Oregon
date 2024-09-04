import { Container } from "../components";
import { CampusOptionCard, SubtleBg } from "../components";
import { useEffect } from "react";

const dummyData = [
    {
        id: 1,
        name: "On-Campus Options",
        items: [
            {
                name: "Klamath Falls New Wings",
                time: "9:45 AM",
                date: "June 31, 2024",
                institute: "Oregon Institute of Technology",
            },
            {
                name: "Klamath Falls New Wings",
                time: "7:45 AM",
                date: "June 21, 2024",
                institute: "Oregon Institute of Technology",
            },
        ],
    },
    {
        id: 2,
        name: "Virtual Options",
        items: [
            {
                name: "Klamath Falls New Wings",
                time: "6:30 AM",
                date: "June 24, 2024",
                institute: "Online Event",
            },
            {
                name: "Klamath Falls New Wings",
                time: "8:00 AM",
                date: "June 21, 2024",
                institute: "Online Event",
            },
        ],
    },
];

export function HomePage2() {
    useEffect(() => {
        document.title = "Landing Page 2";
    }, []);
    return (
        <SubtleBg>
            <section className="pt-10 container-outer-lp-2">
                <div className="flex flex-col justify-center items-center image-right-cont">
                    <img
                        src="/images/lp-2-top.png"
                        alt="Oregon"
                        className="absolute right-0 top-5 max-w-full hidden lg:block"
                        aria-hidden="true"
                    />
                    <Container>
                        <div className="content-below max-w-588">
                            <div className="max-w-3xl flex flex-col">
                                <p className="font-bold">
                                    Attend a New Wings event to finalize your class schedule and
                                    ensure a smooth transition to campus. New Wings is a mandatory
                                    event for incoming students.
                                </p>
                                <p>
                                    Students must have paid their enrollment deposits to be able
                                    to sign up for New Wings.
                                </p>
                                <p className="font-italic">
                                    If prompted to log in when selecting an event to register for,
                                    please use your personal email address that was used when you
                                    started an application with us (not your official Oregon Tech
                                    email address).
                                </p>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className="mt-16 yellow-croped-bg py-20">
                    <Container className="w-full flex justify-between flex-wrap md:flex-nowrap gap-8 md:gap-0 content-column">
                        {dummyData.map((item) => (
                            <div className="w-full" key={item.id}>
                                <h4 className="text-4xl font-bold mb-4">
                                    {item.name}
                                </h4>
                                {item.items.map((cardItem, index) => (
                                    <CampusOptionCard key={index} {...cardItem} />
                                ))}
                            </div>
                        ))}
                    </Container>
                </div>
            </section>
        </SubtleBg>
    );
}
