import { Header, Footer } from "./components";
import {
  HomePage,
  HomePage2,
  StudentLifePage,
  StudentLifePage2,
  RequestInformationPage,
} from "./pages";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home-2" element={<HomePage2 />} />
          <Route path="/student-life" element={<StudentLifePage />} />
          <Route path="/student-life-2" element={<StudentLifePage2 />} />
          <Route path="/request-info" element={<RequestInformationPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
