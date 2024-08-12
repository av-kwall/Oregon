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
            className={`px-3 text-white ${pathname === "/student-life-2" ? "min-h-[250px]" : "h-48"} relative`}
            style={{
                background:
                    "linear-gradient(90deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.20) 100%), url('/header-bg.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <img
                src="/logo.png"
                alt="logo"
                loading="lazy"
                className="cursor-pointer "
                onClick={handleImageClick}
            />
            <Container>
                <h1 className={`font-extrabold absolute ${pathname === "/student-life-2" ? "bottom-[100px]" : "bottom-8"}   text-3xl`}>
                    {getTitle(pathname)}
                </h1>
                {pathname === "/student-life-2" && (
                    <div className="w-full hidden md:block p-2 absolute bottom-5">
                        <div className="flex flex-wrap  gap-3">
                            <Link
                                to="/request-info"
                                className="uppercase no-underline text-blue-800 font-bold bg-yellow-300 w-fit py-2 px-3 hover:scale-105 transition-all ease-in duration-300"
                            >
                                request information
                            </Link>
                            <Link
                                to="/"
                                className="uppercase no-underline text-blue-800 font-bold bg-yellow-300 w-fit py-2 px-3 hover:scale-105 transition-all ease-in duration-300"
                            >
                                Take a virtual tour
                            </Link>
                            <Link
                                to="/"
                                className="uppercase no-underline text-blue-800 font-bold bg-yellow-300 w-fit py-2 px-3 hover:scale-105 transition-all ease-in duration-300"
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
