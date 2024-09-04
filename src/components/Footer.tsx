import { Container } from "./Container";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaLinkedin,
    FaMapPin,
    FaEnvelope,
    FaMapMarker,
    FaPhoneAlt,
} from "react-icons/fa";

const socialLinks = [
    {
        icon: <FaFacebookF />,
        url: "/",
    },
    {
        icon: <FaTwitter />,
        url: "/",
    },
    {
        icon: <FaInstagram />,
        url: "/",
    },
    {
        icon: <FaYoutube />,
        url: "/",
    },
    {
        icon: <FaLinkedin />,
        url: "/",
    },
];

export function Footer() {
    return (
        <footer
            className="px-3 text-white overflow-hidden bg-[#003767] h-full"
            role="contentinfo"
        >
            <img
                src="/images/mobile-footer-map-bg.webp"
                alt="Map background"
                className="w-full block md:hidden"
                aria-hidden="true"
            />
            <Container className="pb-10">
                <div className="footer-container flex h-full gap-8 flex-wrap items-center md:flex-nowrap pb-8">
                    {/* Desktop View */}
                    <div className="hidden md:flex flex-col justify-between column-1">
                        <div className="social-icons mt-5 flex gap-4 md:pl-24 xl:pl-10">
                            {socialLinks.map(({ icon, url }, index) => (
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={index}
                                    aria-label={`Follow us on ${icon.props.alt}`}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Social Icons */}
                    <div className="hidden md:block">
                        <div className="flex md:hidden w-full social-icons gap-4 justify-center">
                            {socialLinks.map(({ icon, url }, index) => (
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={index}
                                    aria-label={`Follow us on ${icon.props.alt}`}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>

                        <div className="pt-20 column-2 pl-0">
                            <div className="pl-5">
                                <img
                                    src="/images/footer-logo.png"
                                    alt="Oregon Institute of Technology logo"
                                    loading="lazy"
                                    className="w-52"
                                />
                                <div className="flex flex-col gap-4 mt-5">
                                    <p className="flex gap-3 text-sm font-weight-300">
                                        <span className="relative top-1">
                                            <FaMapMarker size={18} />
                                        </span>
                                        <span>
                                            3201, Campus Drive <br /> Klamath Falls, OR 97601
                                        </span>
                                    </p>
                                    <p className="flex gap-3 text-sm font-weight-300">
                                        <span className="relative top-1">
                                            <FaPhoneAlt size={18} />
                                        </span>
                                        <span>800.422.2017 | 541.855.1000</span>
                                    </p>
                                    <p className="flex gap-3 text-sm font-weight-300">
                                        <span className="relative top-1">
                                            <FaEnvelope size={18} />
                                        </span>
                                        <span>oit@oit.edu</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile View */}
                    <div className="flex flex-col items-center justify-center w-full md:hidden">
                        <div className="flex w-full social-icons gap-4 justify-center">
                            {socialLinks.map(({ icon, url }, index) => (
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={index}
                                    aria-label={`Follow us on ${icon.props.alt}`}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                        <div className="w-full mt-5">
                            <div className="w-full flex justify-center">
                                <img
                                    src="/images/footer-logo.png"
                                    alt="Oregon Institute of Technology logo"
                                    loading="lazy"
                                    className="w-52"
                                />
                            </div>
                            <div className="flex flex-col gap-4 mt-5 justify-start w-full">
                                <p className="flex gap-3 text-sm font-weight-300">
                                    <span className="relative top-1">
                                        <FaMapPin size={18} />
                                    </span>
                                    <span>
                                        3201, Campus Drive <br /> Klamath Falls, OR 97601
                                    </span>
                                </p>
                                <p className="flex gap-3 text-sm font-weight-300">
                                    <span className="relative top-1">
                                        <FaPhoneAlt size={18} />
                                    </span>
                                    <span>800.422.2017 | 541.855.1000</span>
                                </p>
                                <p className="flex gap-3 text-sm font-weight-300">
                                    <span className="relative top-1">
                                        <FaEnvelope size={18} />
                                    </span>
                                    <span>oit@oit.edu</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="txt-copyright text-left">
                        @ Oregon Institute of Technology | 3201 Campus Drive, Klamath
                        Falls, OR 97601 | 1.800.422.2017
                    </p>
                </div>
            </Container>
        </footer>
    );
}
