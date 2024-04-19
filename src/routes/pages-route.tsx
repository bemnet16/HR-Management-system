import { Route, Routes } from "react-router-dom";

import {
  RootLayout,
  Dashboard_page,
  Addproduct_page,
  Supplier_page,
  Attendance_page,
  Vacancy_page,
  ApplyVacancy_page,
  Employee_page,
  Recuiremnt_page,
  JobApplicant,
  ApplicantsDetail,
  ManualAttendance,
  AppraisalPage,
  PayrollPage,
  AppraisalDetail,
  PayrollDetail,
  MonthlyAttendance,
  OrgStructurePage,
} from "@/pages/page-exporter";

const PagesRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Dashboard_page />} />
          <Route path="/add-product" element={<Addproduct_page />} />
          <Route path="/report" element={<h1>Reports</h1>} />
          <Route path="/supplier" element={<Supplier_page />} />
        
          <Route path="/employee/:employeeId" element={<Employee_page />} />

          <Route path="/org-structure" element={<OrgStructurePage />} />
        
          <Route path="/recuiremnt" element={<Recuiremnt_page />} />
          <Route path="/jobapplicant" element={<JobApplicant />} />
          <Route path="/applicantsdetail/:id" element={<ApplicantsDetail />} />
          
          <Route path="/vacancy" element={<Vacancy_page />} />
          <Route path="/vacancy/:vacancyId" element={<ApplyVacancy_page />} />

          <Route path="/attendance" element={<Attendance_page />} />
          <Route path="/attendance/manual" element={<ManualAttendance />} />
          <Route path="/attendance/monthly" element={<MonthlyAttendance />} /> 

          <Route path="/appraisal" element={<AppraisalPage />} />
          <Route path="/appraisal/:userId" element={<AppraisalDetail />} />

          <Route path="/payroll" element={<PayrollPage />} />
          <Route path="/payroll/:userId" element={<PayrollDetail />} />

          <Route path="/settings" element={<h1>Settings</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default PagesRoute;
