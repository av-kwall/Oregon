import { Container } from "./Container";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaLinkedin,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { CiPhone, CiMail } from "react-icons/ci";

export function Footer() {
    return (
        <footer
            className="px-3 text-white overflow-hidden"
            style={{
                background:
                    "linear-gradient(90deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.20) 100%), url('/header-bg.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Container className="pb-10">
                <div className="flex h-full gap-5 flex-wrap items-center md:flex-nwarp pb-8">
                    <div className="flex flex-col justify-between">
                        <img
                            src="/footer-bg.png"
                            alt="logo"
                            loading="lazy"
                            className="h-48"
                        />
                        <div className="mt-5 flex gap-4 pl-20">
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

                    <div className="pt-20">
                        <div className="pl-5">
                            <img src="/logo.png" alt="logo" loading="lazy" className="w-52" />
                            <div className="flex flex-col gap-4 mt-5">
                                <p className="flex gap-3 text-sm relative">
                                    <span className="relative top-1">
                                        <IoLocationSharp size={18} />
                                    </span>
                                    <span>
                                        3201, Campus Drive <br /> Klamath Falls, OR 97601
                                    </span>
                                </p>
                                <p className="flex gap-3 text-sm relative">
                                    <span className="relative top-1">
                                        <CiPhone size={18} />
                                    </span>
                                    <span>800.422.2017 | 541.855.1000</span>
                                </p>
                                <p className="flex gap-3 text-sm relative">
                                    <span className="relative top-1">
                                        <CiMail size={18} />
                                    </span>
                                    <span>oit@oit.edu</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-8 pl-5 border-t-2 border-blue-700">
                    <p className="text-gray-400">
                        @ Oregon Institute of Technology | 3201 Campus Drive, Klamath Falls,
                        OR 97601 | 1.800.422.2017
                    </p>
                </div>
            </Container>
        </footer>
    );
}
