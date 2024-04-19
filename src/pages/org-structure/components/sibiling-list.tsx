import SibilingCard from "./sibiling-card";

const SibilingList = () => {
    
  return (
    <div className="w-full flex gap-7 overflow-x-scroll no-scrollbar mt-2 border-t-2  border-slate-300">
      {Array.from({ length: 4 }).map((_, idx) => (
        <SibilingCard key={idx} />
      ))}
    </div>
  );
};

export default SibilingList;
