import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FilterButtonList from "../../components/FilterButtonList";
import FilterModal from "../../components/FilterModal";
import { getExFilterListThunk } from "../../thunk/filter";

function Checkup() {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("");
  const handleModalState = useCallback(() => {
    setModalState((prev) => !prev);
  }, []);
  const handlecurrentFilter = useCallback((filter: string) => {
    setCurrentFilter(filter);
  }, []);
  useEffect(() => {
    dispatch(getExFilterListThunk());
  }, []);
  return (
    <div>
      <FilterButtonList
        handlecurrentFilter={handlecurrentFilter}
        handleModalState={handleModalState}
      />
      {modalState && (
        <FilterModal
          currentFilter={currentFilter}
          handleModalState={handleModalState}
        />
      )}
    </div>
  );
}

export default Checkup;
