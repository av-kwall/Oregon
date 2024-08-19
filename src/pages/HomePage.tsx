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

export function HomePage() {
  useEffect(() => {
    document.title = "Landing Page 1";
  }, []);
  return (
    <section>
      <SubtleBg className="py-20 content-section">
        <Container className="relative">
          <div className="flex flex-col justify-center items-center">
            <div className="wings-head relative gap-28 hidden md:flex">
              <img
                src="/images/newwings2x.png"
                alt="left-wing"
                className="relative right-1"
              />
            </div>

            <div className="content-below">
              <div className="max-w-3xl text-center flex flex-col">
                <p className="font-bold">
                  Attend a New Wings event to finalize your calss schedule and
                  ensure a smooth transition to campus. New Wings is a mandatory
                  event for incoming students.
                </p>
                <p>
                  Student must have paid their enrollement deposits to be able
                  to sign up for New Wings.
                </p>
                <p className="text-[15px] font-italic">
                  If prompted to log in when selecting an event to register for,
                  please use your personal email address that was used when you
                  started an application with us (not your official Oregon Tech
                  email address).
                </p>
              </div>
            </div>

            <div className="content-column">
              {dummyData.map((item) => (
                <div className="w-full" key={item.id}>
                  <h4 className="headline heading-font">{item.name}</h4>
                  {item.items.map((cardItem, index) => (
                    <CampusOptionCard key={index} {...cardItem} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </SubtleBg>
    </section>
  );
}
