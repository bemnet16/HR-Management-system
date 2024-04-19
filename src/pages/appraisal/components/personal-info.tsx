import { Avatar, AvatarImage } from '@/components/ui/avatar'

const PersonalInfo = () => {
  return (
   <>
    <div className=" flex items-center gap-2">
          <Avatar className="w-14 h-14 ">
            <AvatarImage src="https://d2kf8ptlxcina8.cloudfront.net/YH5TFCE1QY-preview.png" />
          </Avatar>
          <h1 className="text-xl font-medium">Bemnet Adugnaw</h1>
        </div>

        <div className="w-full grid grid-cols-1 mob-L:grid-cols-2 gap-x-8 gap-2 justify-between mt-4">
          <div className="grid grid-cols-2 items-center gap-2">
            <h1 className="text-base text-slate-600">Departemnt</h1>
            <div className="w-full text-center">
              <span className="text-base text-slate-500 font-medium">
                Marketing
              </span>
              <div className="h-[2px] my-1 max-w-40 mx-auto bg-black/20" />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-2 w-full">
            <h1 className="text-base text-slate-600">Employee ID</h1>
            <div className="w-full  text-center">
              <span className="text-base text-slate-500 font-medium">
                Idnumber
              </span>
              <div className="h-[2px] my-1 max-w-40 mx-auto bg-black/20" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 items-center gap-2">
              <h1 className="text-base text-slate-600">Position</h1>
              <div className="w-full text-center">
                <span className="text-base text-slate-500 font-medium">
                  sales man
                </span>
                <div className="h-[2px] my-1 max-w-40 mx-auto bg-black/20" />
              </div>
            </div>
          </div>
        </div>

   </>
  )
}

export default PersonalInfo