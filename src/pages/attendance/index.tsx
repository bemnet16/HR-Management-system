import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const AttendancePage = () => {
  return (
    <div className="py-4 md:px-4">
      {/* <SearchHeader /> */}
      <div className="p-2">
        {/* <div className="flex flex-col md:flex-row items-start md:justify-between md:items-center mb-2"> */}
          <h1 className="text-[#383E49]/80 text-xl font-semibold mb-5">
            Attendance Type
          </h1>
        {/* </div> */}
      </div>

      <div className="h-[2px] bg-slate-400/15 mb-6" />

      <div className="grid grid-cols-1 mob-L:grid-cols-2 laptop-M:grid-cols-3 gap-4 p-2">
        <Link to={""}>
          <div className="bg-[#ECECEC]/20 border-2 border-[#C1C1C1]/30 shadow-sm rounded-xl p-2 flex flex-col gap-2 pb-4">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/2184126347/display_1500/stock-vector--d-face-recognition-illustration-concept-of-facial-recognition-face-id-system-biometric-2184126347.jpg"
              alt=""
              className="h-40 rounded-lg w-full object-cover"
            />
            <h1 className="text-slate-700 text-lg font-medium">Geofnece</h1>
            <p className="text-sm text-slate-500">
              You can track employess attence with only the mobile phone
            </p>
          </div>
        </Link>
        <Link to={""}>
          <div className="bg-[#ECECEC]/20 border-2 border-[#C1C1C1]/30 shadow-sm rounded-xl p-2 flex flex-col gap-2 pb-4">
            <img
              src="https://c8.alamy.com/comp/2BM4PKK/face-recognition-for-authentication-and-access-to-device-or-app-2BM4PKK.jpg"
              alt=""
              className="h-40 rounded-lg w-full object-cover"
            />
            <h1 className="text-slate-700 text-lg font-medium">Face ID</h1>
            <p className="text-sm text-slate-500">
              You can track employess attence with only the mobile phone
            </p>
          </div>
        </Link>
        <Link to={""}>
          <div className="bg-[#ECECEC]/20 border-2 border-[#C1C1C1]/30 shadow-sm rounded-xl p-2 flex flex-col gap-2 pb-4">
            <img
              src="https://thumbs.dreamstime.com/b/fingerprint-scan-provides-security-access-biometrics-identification-business-technology-safety-internet-network-concept-100570658.jpg"
              alt=""
              className="h-40 rounded-lg w-full object-cover"
            />
            <h1 className="text-slate-700 text-lg font-medium">Finger ID</h1>
            <p className="text-sm text-slate-500">
              You can track employess attence with only the mobile phone
            </p>
          </div>
        </Link>
        <Link to={""}>
          <div className="bg-[#ECECEC]/20 border-2 border-[#C1C1C1]/30 shadow-sm rounded-xl p-2 flex flex-col gap-2 pb-4">
            <img
              src="https://res.cloudinary.com/kisi-kloud/image/upload/c_fill_pad,f_png,g_auto:none,h_627,w_1200/v1//collections/academy/lessons/how-to-differentiate-between-different-access-cards/how-to-differentiate-between-different-access-cards-1"
              alt=""
              className="h-40 rounded-lg w-full object-cover"
            />
            <h1 className="text-slate-700 text-lg font-medium">Access Card</h1>
            <p className="text-sm text-slate-500">
              You can track employess attence with only the mobile phone
            </p>
          </div>
        </Link>
        <Link to={""}>
          <div className="bg-[#ECECEC]/20 border-2 border-[#C1C1C1]/30 shadow-sm rounded-xl p-2 flex flex-col gap-2 pb-4">
            <img
              src="https://d1sr9z1pdl3mb7.cloudfront.net/wp-content/uploads/2019/12/05172231/biometric-iris-recognition-for-healthcare.png"
              alt=""
              className="h-40 rounded-lg w-full object-cover"
            />
            <h1 className="text-slate-700 text-lg font-medium">Iris</h1>
            <p className="text-sm text-slate-500">
              You can track employess attence with only the mobile phone
            </p>
          </div>
        </Link>
        <Link to={"/attendance/manual"}>
          <div className="bg-[#ECECEC]/20 border-2 border-[#C1C1C1]/30 shadow-sm rounded-xl p-2 flex flex-col gap-2 pb-4">
            <div className="h-32 w-40 flex justify-center items-center mx-auto">
              <div className="h-24 w-24 rounded-full mx-auto bg-[#C1C1C1]/40 flex justify-center items-center">
                <Plus className="w-12 h-12 text-slate-500" />
              </div>
            </div>
            <h1 className="text-slate-700 text-lg font-medium w-full">
              Create manual attendance
            </h1>
            <p className="text-sm text-slate-500">
              You can track employess attence with only the mobile phone
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AttendancePage;
