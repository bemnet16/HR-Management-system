import { useEffect, useRef } from "react";
import VacancyForm from "./components/vacancy-form";
import VancayItem from "./components/vacancy-item";

function ApplyVacancy() {
  const fourthDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fourthDivRef.current) {
      fourthDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="py-4 md:p-6">
      <VancayItem />

      <div ref={fourthDivRef}>
        <VacancyForm />
      </div>
    </div>
  );
}

export default ApplyVacancy;
