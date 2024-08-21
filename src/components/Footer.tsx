import { Container } from "./Container";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaLinkedin,
    FaLocationArrow,
    FaVoicemail,
} from "react-icons/fa";
import { CiPhone } from "react-icons/ci";

export function Footer() {
    return (
        <footer className="px-3 text-white overflow-hidden bg-[#003767] h-full">
            <img
                src="/images/mobile-footer-map-bg.webp"
                alt="footer-map"
                className="w-full block md:hidden"
            />
            <Container className="pb-10">
                <div className="footer-container flex h-full gap-5 flex-wrap items-center md:flex-nwarp pb-8">
                    <div className="hidden md:flex flex-col justify-between column-1">
                        <div className="social-icons mt-5 flex gap-4 pl-6">
                            <a href="/">
                                <FaFacebook />
                            </a>
                            <a href="/">
                                <FaTwitter />
                            </a>
                            <a href="/">
                                <FaInstagram />
                            </a>
                            <a href="/">
                                <FaYoutube />
                            </a>
                            <a href="/">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Desktop */}
                    <div className="hidden md:block">
                        <div className="flex md:hidden w-full social-icons  gap-4 justify-center">
                            <a href="/">
                                <FaFacebook />
                            </a>
                            <a href="/">
                                <FaTwitter />
                            </a>
                            <a href="/">
                                <FaInstagram />
                            </a>
                            <a href="/">
                                <FaYoutube />
                            </a>
                            <a href="/">
                                <FaLinkedin />
                            </a>
                        </div>

                        <div className="pt-20 column-2 pl-0">
                            <div className="pl-5 md:pl-16">
                                <img
                                    src="/images/footer-logo.png"
                                    alt="logo"
                                    loading="lazy"
                                    className="w-52"
                                />
                                <div className="flex flex-col gap-4 mt-5">
                                    <p className="flex gap-3 text-sm relative font-weight-300">
                                        <span className="relative top-1">
                                            <FaLocationArrow size={18} />
                                        </span>
                                        <span>
                                            3201, Campus Drive <br /> Klamath Falls, OR 97601
                                        </span>
                                    </p>
                                    <p className="flex gap-3 text-sm relative font-weight-300">
                                        <span className="relative top-1">
                                            <CiPhone size={18} />
                                        </span>
                                        <span>800.422.2017 | 541.855.1000</span>
                                    </p>
                                    <p className="flex gap-3 text-sm relative font-weight-300">
                                        <span className="relative top-1">
                                            <FaVoicemail size={18} />
                                        </span>
                                        <span>oit@oit.edu</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="flex flex-col items-center justify-center w-full md:hidden">
                        <div className="flex w-full social-icons  gap-4 justify-center">
                            <a href="/">
                                <FaFacebook />
                            </a>
                            <a href="/">
                                <FaTwitter />
                            </a>
                            <a href="/">
                                <FaInstagram />
                            </a>
                            <a href="/">
                                <FaYoutube />
                            </a>
                            <a href="/">
                                <FaLinkedin />
                            </a>
                        </div>
                        <div className="w-full mt-5">
                            <div className="w-full flex justify-center">
                                <img
                                    src="/images/footer-logo.png"
                                    alt="logo"
                                    loading="lazy"
                                    className="w-52"
                                />
                            </div>
                            <div className="flex flex-col gap-4 mt-5 justify-start w-full">
                                <p className="flex gap-3 text-sm relative font-weight-300">
                                    <span className="relative top-1">
                                        <FaLocationArrow size={18} />
                                    </span>
                                    <span>
                                        3201, Campus Drive <br /> Klamath Falls, OR 97601
                                    </span>
                                </p>
                                <p className="flex gap-3 text-sm relative font-weight-300">
                                    <span className="relative top-1">
                                        <CiPhone size={18} />
                                    </span>
                                    <span>800.422.2017 | 541.855.1000</span>
                                </p>
                                <p className="flex gap-3 text-sm relative font-weight-300">
                                    <span className="relative top-1">
                                        <FaVoicemail size={18} />
                                    </span>
                                    <span>oit@oit.edu</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="txt-copyright text-left">
                        @ Oregon Institute of Technology | 3201 Campus Drive, Klamath Falls,
                        OR 97601 | 1.800.422.2017
                    </p>
                </div>
            </Container>
        </footer>
    );
}
