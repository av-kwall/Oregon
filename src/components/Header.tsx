import { Container } from "./Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function getTitle(pathname: string) {
    switch (pathname) {
        case "/student-life":
        case "/student-life-2":
            return "Student Life";

        case "/request-info":
            return "Request for Information";

        default:
            return "New Wings";
    }
}

export function Header() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    function handleImageClick() {
        navigate("/");
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <header
            className={`header-main px-3 text-white ${pathname === "/student-life-2"
                    ? "big-head min-h-[389px]"
                    : "min-h-[261px]"
                } relative`}
            style={{
                background: "url(/header-bg.webp) no-repeat top center",
                maxHeight: "261px",
                backgroundSize: "cover",
            }}
            role="banner"
        >
            <img
                src="/images/header2x-logo.png"
                alt="Oregon Institute of Technology logo"
                loading="lazy"
                className="cursor-pointer w-[300px] pl-2"
                onClick={handleImageClick}
                role="button"
                aria-label="Oregon Institute of Technology logo"
            />
            <Container>
                <h1
                    className={`font-bold heading-font ${pathname === "/student-life-2" ? "bottom-[100px]" : ""
                        } text-[50px]`}
                    aria-level={1}
                >
                    {getTitle(pathname)}
                </h1>
                {pathname === "/student-life-2" && (
                    <div className="w-full hidden md:block p-2 absolute bottom-5 buttons">
                        <div className="flex flex-wrap gap-3">
                            <Link
                                to="/request-info"
                                className="uppercase no-underline text-[#003767] font-bold bg-[#FFD24F] w-fit py-2 px-3 hover:scale-105 transition-all ease-in duration-300"
                                aria-label="Request information"
                            >
                                request information
                            </Link>
                            <Link
                                to="/"
                                className="uppercase no-underline text-[#003767] font-bold bg-[#FFD24F] w-fit py-2 px-3 hover:scale-105 transition-all ease-in duration-300"
                                aria-label="Take a virtual tour"
                            >
                                Take a virtual tour
                            </Link>
                            <Link
                                to="/"
                                className="uppercase no-underline text-[#003767] font-bold bg-[#FFD24F] w-fit py-2 px-3 hover:scale-105 transition-all ease-in duration-300"
                                aria-label="Schedule a campus visit"
                            >
                                schedule a campus visit
                            </Link>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
}
