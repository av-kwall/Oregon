import { Container } from "../components";
import { CampusOptionCard } from "../components/campus-option-card";
import { Link } from "react-router-dom";

const dummyData = [
  {
    id: 1,
    name: "On-Campus Options",
    items: [
      {
        name: "Klamath Falls New Wings",
        time: "9:45 AM",
        date: "June 31, 2024",
        institute: "Oregon Institute of Technology"
      },
      {
        name: "Klamath Falls New Wings",
        time: "7:45 AM",
        date: "June 21, 2024",
        institute: "Oregon Institute of Technology"
      },
    ]
  },
  {
    id: 2,
    name: "Virtual Options",
    items: [
      {
        name: "Klamath Falls New Wings",
        time: "6:30 AM",
        date: "June 24, 2024",
        institute: "Online Event"
      },
      {
        name: "Klamath Falls New Wings",
        time: "8:00 AM",
        date: "June 21, 2024",
        institute: "Online Event"
      },
    ]
  },
]

export function HomePage() {
  return (
    <section className="py-20">
      <Container className="relative">
        <div className="flex flex-col justify-center items-center">
          <div className="wings-head relative gap-28 hidden md:flex">
            {/* Left wing */}
            <img src="/wing.png" alt="left-wing" />
            {/* Center container */}
            <div className="absolute left-0 w-full -top-12">
              <div className="flex justify-center">
                <h3 className="yellow-shadow text-center italic text-[80px] font-extrabold">
                  New <br /> Wings
                </h3>
              </div>
            </div>
            {/* Right wing */}
            <img
              src="/wing.png"
              alt="right-wing"
              className="transform scale-x-[-1]"
            />
            {/* Small Log between wigns */}
            <div className="flex flex-col items-center justify-center absolute top-[55%]  w-full">
              <img src="/logo-sm.png" alt="logo-sm" className="w-36" />
              <p className="text-sm font-bold text-blue-800 text-center max-w-32">
                Oregon Institute of Technology
              </p>
            </div>
          </div>

          <div className="mt-5">
            <div className="max-w-3xl text-center flex flex-col gap-4">
              <p className="font-bold">
                Attend a New Wings event to finalize your calss schedule and
                ensure a smooth transition to campus. New Wings is a mandatory
                event for incoming students.
              </p>
              <p>
                Student must have paid their enrollement deposits to be able to sign up for New Wings.
              </p>
              <p>
                If prompted to log in when selecting an event to register for, please use your personal email address that was used when you started an application with us (not your official Oregon Tech email address).
              </p>
            </div>
          </div>

          <div className="mt-10 max-w-4xl w-full flex justify-between flex-wrap md:flex-nowrap gap-8 md:gap-0">
            {dummyData.map((item) => (
              <div className="w-full" key={item.id}>
                <h4 className="text-4xl font-bold mb-4">
                  {item.name}
                </h4>
                {item.items.map((cardItem, index) => (
                  <CampusOptionCard key={index} {...cardItem} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex gap-5 justify-center">
          <Link
            to="/home-2"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Home Page 2
          </Link>
          <Link
            to="/student-life"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Student Life page
          </Link>
        </div>
      </Container>
    </section>
  );
}
