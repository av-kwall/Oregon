import { Container, SubtleBg } from "../components";
import { Label, Select, TextInput, Datepicker } from "flowbite-react";
import { useEffect } from "react";

export function RequestInformationPage() {
    useEffect(() => {
        document.title = "Request form";
    }, []);
    return (
        <section className="pb-10 request-form">
            <SubtleBg>
                <Container className="w-full">
                    <div className="mb-10">
                        <h2 className="text-3xl font-[600] text-[42px] heading-font mb-7">
                            Your Academic Plans
                        </h2>
                        <div className="pl-1">
                            <h6 className="text-2xl font-bold mb-5 text-[34px]">
                                Student Type:
                            </h6>
                            <p className="text-[16px]">
                                <span className="font-semibold">First Year:</span> You are
                                currently in high school or have graduated high school but have
                                never taken college courses.
                            </p>
                            <p>
                                <span className="font-semibold">Transfer:</span> You have
                                graduated high school and taken college courses since you
                                graduated, or you have completed a bachelor's degree and would
                                like to earn a second bachelor's degree.
                            </p>
                            <p>
                                <span className="font-semibold">Graduate:</span> You have
                                completed a bachelor's degree and would like to earn a master's
                                or doctoral degree.
                            </p>

                            <div className="flex gap-5 my-5">
                                <div>
                                    <div className="mb-2">
                                        <Label
                                            htmlFor="studentType"
                                            value="* What type of student are you?"
                                        />
                                    </div>
                                    <Select id="studentType" required>
                                        <option>First Year</option>
                                        <option>Transfer</option>
                                        <option>Graduate</option>
                                    </Select>
                                </div>
                                <div>
                                    <div className="mb-2">
                                        <Label
                                            htmlFor="campusLocation"
                                            value="* Which campus location would you like to attend?"
                                        />
                                    </div>
                                    <Select id="campusLocation" required>
                                        <option>Location 1</option>
                                        <option>Location 2</option>
                                        <option>Location 3</option>
                                    </Select>
                                </div>
                            </div>

                            <p>
                                <span className="font-semibold">Names:</span> Preferred First
                                Name is the name we will use on all official communications to
                                you and across campus. If you do not provide a preferred name,
                                we will default to your first name.
                            </p>
                        </div>
                    </div>

                    <div className="mb-10">
                        <h5 className="text-3xl font-semibold mb-5 text-[42px]">
                            About You
                        </h5>
                        <div className="pl-1">
                            <div className="flex gap-5 flex-wrap sm:flex-nowrap my-5">
                                <div className="w-full mb-3 sm:mb-0">
                                    <div className="mb-2">
                                        <Label htmlFor="firstName" value="* First Name" />
                                    </div>
                                    <TextInput
                                        id="firstName"
                                        type="text"
                                        placeholder="Enter your first name"
                                        required
                                        shadow
                                    />
                                </div>

                                <div className="w-full mb-2 sm:mb-0">
                                    <div className="mb-2">
                                        <Label
                                            htmlFor="preferredName"
                                            value="Preferred First Name"
                                        />
                                    </div>
                                    <TextInput
                                        id="preferredName"
                                        type="text"
                                        placeholder="Enter your preferred first name"
                                        shadow
                                    />
                                </div>

                                <div className="w-full mb-2 sm:mb-0">
                                    <div className="mb-2">
                                        <Label htmlFor="lastName" value="* Last Name" />
                                    </div>
                                    <TextInput
                                        id="lastName"
                                        type="text"
                                        placeholder="Enter your last name"
                                        shadow
                                    />
                                </div>

                                <div className="w-full mb-2 sm:mb-0">
                                    <div className="mb-2">
                                        <Label htmlFor="birthDate" value="* Birthdate" />
                                    </div>
                                    <Datepicker id="birthDate" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-10">
                        <h5 className="text-3xl font-semibold mb-5 text-[42px]">
                            Contact Information
                        </h5>
                        <div className="pl-1">
                            <p>
                                Use only a standard email provider for your preferred email
                                address, such as Gmail or Yahoo.
                            </p>

                            <p>
                                Add oit@oit.edu to your email contacts to ensure inbox delivery.
                            </p>
                            <p>
                                Emails assigned by your school or work often block messages sent
                                from .edu domains.
                            </p>

                            <div className="flex gap-5 flex-wrap sm:flex-nowrap mt-5">
                                <div className="w-full sm:w-1/3 mb-3 sm:mb-0">
                                    <div className="mb-2">
                                        <Label htmlFor="email" value="* Email Address" />
                                    </div>
                                    <TextInput
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        shadow
                                    />
                                </div>

                                <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
                                    <div className="mb-2">
                                        <Label htmlFor="phone" value="Cell Phone Number" />
                                    </div>
                                    <TextInput
                                        id="phone"
                                        type="tel"
                                        placeholder="Enter your cell phone number"
                                        shadow
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="mt-8 uppercase text-[#003767] font-bold bg-[#FFD24F] w-fit py-2 px-3 hover:scale-105 transition-all ease-in duration-300 text-[18px]"
                            >
                                Send Me Information
                            </button>
                        </div>
                    </div>
                </Container>
            </SubtleBg>
        </section>
    );
}
