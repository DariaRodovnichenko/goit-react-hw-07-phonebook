import { FilterInput, FilterLabel } from "./Filter.styled";

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={value} onChange={onChange} />
      </FilterLabel>
    </div>
  );
};
