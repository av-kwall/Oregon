import { Container, AccordionItem, SubtleBg } from "../components";
import { Accordion } from "@szhsin/react-accordion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const accordionData = [
    {
        title: "Student Clubs",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
    },
    {
        title: "Gaming",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
    },
    {
        title: "Medai",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
    },
    {
        title: "Diversity",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
    },
    {
        title: "Honors Program",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
    },
    {
        title: "Student Government",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
    },
];

export function StudentLifePage() {
    useEffect(() => {
        document.title = "Student Life 1";
    }, []);
    return (
        <SubtleBg>
            <section className="py-5">
                <Container className="w-full">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full sm:w-1/2 p-2">
                            <img
                                src="/student-life.webp"
                                alt="student-left"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="w-full sm:w-1/2 p-2">
                            <img
                                src="/student-life-2.webp"
                                alt="student-left"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    <div className="w-full sm:hidden flex justify-center flex-col items-center">
                        <h6 className="text-lg font-bold mb-5">Curious about Oregon Tech?</h6>
                        <div className="flex gap-3 items-center w-full">
                            <Link
                                to="/request-info"
                                className="uppercase no-underline text-[#003767] font-bold bg-[#FFD24F] py-2 px-2 hover:scale-105 transition-all ease-in duration-300 text-[14px] w-1/2 text-center"
                            >
                                request information
                            </Link>
                            <Link
                                to="/"
                                className="uppercase no-underline text-[#003767] font-bold bg-[#FFD24F] py-2 px-2 hover:scale-105 transition-all ease-in duration-300 text-[14px] w-1/2 text-center"
                            >
                                Take a virtual tour
                            </Link>
                        </div>
                        <Link
                            to="/"
                            className="uppercase no-underline text-[#003767] font-bold bg-[#FFD24F] py-2 px-2 hover:scale-105 transition-all ease-in duration-300 text-[14px] w-[55%] mt-3 text-center"
                        >
                            schedule a campus visit
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-between mt-10">
                        <div className="w-full md:w-[70%] p-2">
                            <div className=" flex flex-col gap-4">
                                <h5 className="head-title font-bold">
                                    Oregon Tech Owls are Involved!
                                </h5>
                                <p className="text-[15px]">
                                    No matter your interests, our student life has something for
                                    you! We have many interesting and unique clubs you might not
                                    expect, like our beekeeping club, our fencing club, and our
                                    unmanned vehicle systems club.
                                </p>
                                <p className="text-[15px]">
                                    If we don't have a club you're interested in, you can always
                                    start your own club!
                                </p>
                                <p className="text-[15px]">
                                    interested in seeing what life for our students or want to get
                                    involved with community and ask them questions?{" "}
                                    <a href="/">Join us on Zeeme</a>
                                    and check below to learn more about student life on the Klamath
                                    Falls campus:
                                </p>
                                <Accordion transition transitionTimeout={200}>
                                    {accordionData.map((item, index) => (
                                        <AccordionItem key={index} header={item?.title}>
                                            {item?.content}
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>

                        <aside className="w-full md:w-[30%] p-2 hidden sm:block">
                            <h6 className="text-lg font-bold mb-5">
                                Curious about Oregon Tech?
                            </h6>
                            <div className="flex flex-col gap-3">
                                <Link
                                    to="/request-info"
                                    className="uppercase no-underline text-[#003767] font-bold bg-[#FFD24F] w-fit py-2 px-3 hover:scale-105 transition-all ease-in duration-300"
                                >
                                    request information
                                </Link>
                                <Link
                                    to="/"
                                    className="uppercase no-underline text-[#003767] font-bold bg-[#FFD24F] w-fit py-2 px-3 hover:scale-105 transition-all ease-in duration-300"
                                >
                                    Take a virtual tour
                                </Link>
                                <Link
                                    to="/"
                                    className="uppercase no-underline text-[#003767] font-bold bg-[#FFD24F] w-fit py-2 px-3 hover:scale-105 transition-all ease-in duration-300"
                                >
                                    schedule a campus visit
                                </Link>
                            </div>
                        </aside>
                    </div>
                </Container>
            </section>
        </SubtleBg>
    );
}
