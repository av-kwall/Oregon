import { Container, SubtleBg, Accordion } from "../components";
import { Link } from "react-router-dom";
import { accordionData } from "./StudentLifePage";
import { useEffect } from "react";

export function StudentLifePage2() {
  useEffect(() => {
    document.title = "Student Life 2";
  }, []);
  return (
    <SubtleBg>
      <section className="py-5">
        <Container className="w-full">
          <div className="flex flex-wrap justify-between mt-5">
            <div className="w-full flex md:hidden order-1 justify-center flex-col items-center my-5">
              <div className="flex gap-3 items-center w-full">
                <Link
                  to="/request-info"
                  className="uppercase no-underline text-[#003767] font-bold bg-[#FFD24F] py-2 px-2 hover:scale-105 transition-all ease-in duration-300 text-[14px] w-1/2 text-center"
                >
                  Request Information
                </Link>
                <Link
                  to="/"
                  className="uppercase no-underline text-[#003767] font-bold bg-[#FFD24F] py-2 px-2 hover:scale-105 transition-all ease-in duration-300 text-[14px] w-1/2 text-center"
                >
                  Take a Virtual Tour
                </Link>
              </div>
              <Link
                to="/"
                className="uppercase no-underline text-[#003767] font-bold bg-[#FFD24F] py-2 px-2 hover:scale-105 transition-all ease-in duration-300 text-[14px] w-[55%] mt-3 text-center"
              >
                Schedule a Campus Visit
              </Link>
            </div>
            <div className="w-full lg:w-[70%] p-2 order-2">
              <div className="flex flex-col gap-4">
                <h5 className="text-3xl head-title">
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
                  Interested in seeing what life is like for our students or
                  want to get involved with the community and ask them
                  questions?{" "}
                  <a href="/" className="text-[#003767] font-semibold">
                    Join us on Zeeme
                  </a>{" "}
                  and check below to learn more about student life on the
                  Klamath Falls campus:
                </p>

                <Accordion items={accordionData} />
              </div>
            </div>

            <div className="w-full lg:w-[30%] flex flex-col gap-5 relative top-0 sm:-top-[200px] order-3">
              <div className="w-full p-2">
                <img
                  src="/student-life.webp"
                  alt="Student life activities"
                  className="w-full h-auto lg:h-[250px] aspect-auto lg:aspect-square object-cover"
                />
              </div>

              <div className="w-full p-2">
                <img
                  src="/student-life-2.webp"
                  alt="Students participating in campus activities"
                  className="w-full h-auto lg:h-[250px] aspect-auto lg:aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </SubtleBg>
  );
}
