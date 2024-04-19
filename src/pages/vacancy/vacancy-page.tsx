import VancayItem from "./components/vacancy-item";

const VacancyPage = () => {
  return (
    <div className="py-4 md:p-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <VancayItem key={i} />
      ))}
    </div>
  );
};

export default VacancyPage;
