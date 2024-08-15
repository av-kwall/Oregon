import { Container, AccordionItem } from "../components";
import { Accordion } from "@szhsin/react-accordion";
import { Link } from "react-router-dom";
import { accordionData } from "./StudentLifePage";
import { useEffect } from "react";


export function StudentLifePage2() {
  useEffect(() => {
    document.title = "Student Life 2";
  }, []);
  return (
    <section className="py-5">
      <Container className="w-full">
        <div className="flex flex-wrap justify-between mt-5">
          <div className="w-full block md:hidden p-2 order-1">
            <div className="flex flex-wrap  gap-3 items-center justify-center">
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
          </div>
          <div className="w-full lg:w-[70%] p-2  order-2">
            <div className=" flex flex-col gap-4">
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

          <div className="w-full lg:w-[30%] flex flex-col gap-5 relative top-0 sm:-top-[200px]  order-3">
            <div className="w-full p-2">
              <img
                src="/student-life.webp"
                alt="student-left"
                className="w-full h-auto lg:h-[250px] aspect-auto  lg:aspect-square object-cover"
              />
            </div>

            <div className="w-full p-2">
              <img
                src="/student-life-2.webp"
                alt="student-left"
                className="w-full h-auto lg:h-[250px] aspect-auto lg:aspect-square  object-cover"
              />
            </div>
          </div>
        </div>


      </Container>

      {/* <div className="mt-5 flex gap-5 justify-center">
        <Link
          to="/request-info"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Request Information page
        </Link>
        <Link
          to="/student-life"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Student Life page
        </Link>
      </div> */}
    </section>
  );
}
