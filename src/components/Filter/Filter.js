import { useDispatch, useSelector } from "react-redux";
import { FilterInput, FilterLabel } from "./Filter.styled";
import { selectFilter } from "redux/selectors";
import { setFilter } from "redux/filterSlice";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = event => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return (
    <div>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={filter} onChange={onChange} />
      </FilterLabel>
    </div>
  );
};

export default Filter;