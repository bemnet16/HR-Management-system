import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

function VancayItem() {
  const [show, setShow] = useState(false);
  const res = `Conduct thorough analysis of business requirements and processes to
          identify areas for improvement and propose effective solutions. Elicit
          and document detailed requirements, user stories, use cases, ensuring
          clarity, accuracy, and completeness. Collaborate closely with
          stakeholders to understand their needs, priorities, and expectations,
          and ensure alignment between business objectives and technical
          solutions. Facilitate workshops, interviews, and requirement gathering
          sessions to gather insights and drive consensus among diverse
          stakeholders. Analyze complex systems and technical documentation to
          understand the underlying architecture and data models. Create and
          maintain comprehensive documentation, including requirement
          specifications, functional specifications, and process flows. Perform
          thorough testing and validation of softwaresolutions to ensure they
          meet the defined business requirements. Stay updated with industry
          trends, emerging technologies, and best practices in business
          analysis.`;

  return (
    <div className="bg-white flex flex-col w-full p-3 md:p-8 gap-1 rounded-md mb-6">
      <div className="flex justify-between">
        <div className="mb-5">
          <h1 className="text-slate-600 text-2xl font-bold">
            Job Title: Business Analyst
          </h1>
          <h2 className="text-slate-400 font-normal text-sm">
            Job Type: On-site - Permanent (Full-time)
          </h2>
        </div>
        <Link to={`/vacancy/${new Date().toISOString()}`}>
        <Button className="bg-[#12B76A] hover:bg-[#42a374] font-bold text-[16px] px-10 py-0 text-end">
          Apply
        </Button>
        </Link>
      </div>
      <h3 className="text-lg font-medium text-slate-600">
        Job Sector:{" "}
        <Link to={"to organization"} className="underline">
          #Information_technology
        </Link>
      </h3>
      <h4 className="text-lg font-medium text-slate-600 italic">
        Work Location: Addis Ababa, Ethiopia
      </h4>
      <h4 className="text-lg font-medium text-slate-600 italic">
        Experience Level: Intermediate
      </h4>
      <h4 className="text-lg font-medium text-slate-600 italic">
        Vacancies: 10
      </h4>
      <div className="w-full text-end">
        <h4 className="font-semibold text-[#0c3e83]">
          Salary/Compensation: Monthly
        </h4>
        <h4 className="font-semibold text-[#aa3028]">Deadline: 13/2/2024</h4>
      </div>
      <div className="text-justify text-[#5d6679] font-normal my-2">
        <p className="font-medium text-[#5D6679] py-1">Responsibility</p>
        <p>
          {show ? (
            res
          ) : (
            <>
              {res.slice(0, 200)}...
              <Button
                onClick={() => setShow(!show)}
                variant={"ghost"}
                className="text-blue-600 underline hover:bg-white"
              >
                show more
              </Button>
            </>
          )}
        </p>
        {show && (
          <>
            <p className="font-medium text-[#5D6679] py-1">Qualifications</p>
            Bachelor's or Master's degree in Computer Science, Information
            Technology, Business Administration, or a related field 1- 2 years
            of work experience as a Business Analyst, data analysis, or a
            related field. Proven experience as a Software Business Analyst,
            with a strong understanding of software development methodologies
            and business analysis frameworks.
            <p className="font-medium text-[#5D6679] py-1">Requirement</p>
            <p>
              1- 2 years of work experience as a Business Analyst, data
              analysis, or a related field. Proven experience as a Software
              Business Analyst, with a strong understanding of software
              development methodologies and business analysis frameworks.
              Skill,Knowledge and Attitude Proficiency in gathering and
              analysing business requirements, translating them into functional
              specifications, and documenting use cases. Familiarity with
              software development life cycle (SDLC) processes and best
              practices. Excellent communication and interpersonal skills, with
              the ability to effectively collaborate with stakeholders at all
              levels. Technical aptitude and the ability to understand technical
              documentation, system architectures, and data models. Adaptability
              to changing project requirements and deadlines, with a continuous
              learning mindset.
              <Button
                onClick={() => setShow(!show)}
                variant={"ghost"}
                className="text-blue-600 underline hover:bg-white"
              >
                show less
              </Button>
            </p>
          </>
        )}
      </div>
      {/* <div className="py-2 flex justify-between w-full"> */}
      <p className="text-xl text-[#383E49] font-medium">
        IE Network Solutions PLC
      </p>
      <p className="text-slate-400 w-full text-end">10 people applied</p>
      {/* </div> */}
    </div>
  );
}

export default VancayItem;
