import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function Reports() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-[#5D6679]">Report for Day 1: User Activity Summary</AccordionTrigger>
        <AccordionContent>
            <div className="p-4">
                <h1 className="text-[16px] font-medium text-gray-600 p-2">Accomplishments</h1>
                <ul className="p-3">
                    <li>Task 1: Implemented a new feature in the project</li>
                    <li>Task 2: Conducted a successful client presentation.</li>
                </ul>
                <h1 className="text-[16px] font-medium text-gray-600 p-2">Challenges Faced</h1>
                <ul className="p-3">
                    <li>Encountered a challenge with a software bug, reported it to the development team for resolution.</li>
                </ul>
                <h1 className="text-[16px] font-medium text-gray-600 p-2">Goals for Tomorrow</h1>
                <ul className="p-3">
                    <li>Encountered a challenge with a software bug, reported it to the development team for resolution.</li>
                    <li>Encountered a challenge with a software bug, reported it to the development team for resolution.</li>
                </ul>
                <div className="w-full flex flex-col items-end gap-8 py-4">
                    <div className="w-full flex justify-end items-center">
                        <p className="text-[#DBA362] px-4">Report rate  </p> 
                    <Progress value={76} className="w-[40%] h-2"  />
                    </div>
                    <div className="w-full flex justify-end items-center">
                <p className="text-[#DBA362] px-4">Project progress</p>
                    <Progress value={50} className="w-[40%] h-2"  />
                    </div>
                </div>
            </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-[#5D6679]">Report for Day 2: Work Metrics and Highlights</AccordionTrigger>
        <AccordionContent>
            <div className="p-4">
                <h1 className="text-[16px] font-medium text-gray-600 p-2">Accomplishments</h1>
                <ul className="p-3">
                    <li>Task 1: Implemented a new feature in the project</li>
                    <li>Task 2: Conducted a successful client presentation.</li>
                </ul>
                <h1 className="text-[16px] font-medium text-gray-600 p-2">Challenges Faced</h1>
                <ul className="p-3">
                    <li>Encountered a challenge with a software bug, reported it to the development team for resolution.</li>
                </ul>
                <h1 className="text-[16px] font-medium text-gray-600 p-2">Goals for Tomorrow</h1>
                <ul className="p-3">
                    <li>Encountered a challenge with a software bug, reported it to the development team for resolution.</li>
                    <li>Encountered a challenge with a software bug, reported it to the development team for resolution.</li>
                </ul>
                <div className="w-full flex flex-col items-end gap-8 py-4">
                    <div className="w-full flex justify-end items-center">
                        <p className="text-[#DBA362] px-4">Report rate  </p> 
                    <Progress value={76} className="w-[40%] h-2"  />
                    </div>
                    <div className="w-full flex justify-end items-center">
                <p className="text-[#DBA362] px-4">Project progress</p>
                    <Progress value={50} className="w-[40%] h-2"  />
                    </div>
                </div>
            </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-[#598847]">Report for Day 3: Departmental Performance Review <span className="border-2 rounded-2xl px-2 text-slate-200 flex items-center no-underline bg-slate-950">To be rated</span></AccordionTrigger>
        <AccordionContent>
            <div className="p-4">
                <h1 className="text-[16px] font-medium text-gray-600 p-2">Accomplishments</h1>
                <ul className="p-3">
                    <li>Task 1: Implemented a new feature in the project</li>
                    <li>Task 2: Conducted a successful client presentation.</li>
                </ul>
                <h1 className="text-[16px] font-medium text-gray-600 p-2">Challenges Faced</h1>
                <ul className="p-3">
                    <li>Encountered a challenge with a software bug, reported it to the development team for resolution.</li>
                </ul>
                <h1 className="text-[16px] font-medium text-gray-600 p-2">Goals for Tomorrow</h1>
                <ul className="p-3">
                    <li>Encountered a challenge with a software bug, reported it to the development team for resolution.</li>
                    <li>Encountered a challenge with a software bug, reported it to the development team for resolution.</li>
                </ul>
                <div className="w-full flex flex-col items-end gap-8 py-4">
                    {/* <div className="w-full flex justify-end items-center">
                        <p className="text-[#DBA362] px-4">Report rate  </p> 
                    <Progress value={76} className="w-[40%] h-2"  />
                    </div> */}
                    <Button variant="ghost" className="border-2"> Rate report</Button>
                    <div className="w-full flex justify-end items-center">
                <p className="text-[#DBA362] px-4">Project progress</p>
                    <Progress value={50} className="w-[40%] h-2"  />
                    </div>
                </div>
            </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
