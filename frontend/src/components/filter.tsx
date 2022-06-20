export interface FilterProps {
  select: string;
  filters: { text: string; id: string }[];
  onFilterChange: (filter: string) => void;
}
export default function ({ filters, select, onFilterChange }: FilterProps) {
  return (
    <div className="flex flex-row justify-start flex-wrap p-8 filter">
      {filters.map(({ id, text }) => (
        <button
          className={`${id === select && "select"}`}
          key={id}
          role={id}
          onClick={() => onFilterChange(id)}
        >
          {text}
        </button>
      ))}
    </div>
  );
}
