export interface FilterProps {
  select: string;
  filters: { text: string; id: string }[];
}
export default function ({ filters, select }: FilterProps) {
  return (
    <div className="flex flex-row justify-start flex-wrap p-8 filter">
      {filters.map(({ id, text }) => (
        <button className={`${id === select && "select"}`} key={id}>
          {text}
        </button>
      ))}
    </div>
  );
}