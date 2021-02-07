import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../reducer";
import ExFilter from "../ExFilter";
import * as S from "./styls";

interface Props {
  handleModalState: () => void;
  currentFilter: string;
}

function FilterModal({ handleModalState, currentFilter }: Props) {
  const { exFilterList, exFilter } = useSelector(
    ({ filter }: RootState) => filter
  );
  const getFilterByFiltername = useCallback(() => {
    switch (currentFilter) {
      case "검사":
        return exFilterList ? (
          <ExFilter
            exFilter={exFilter}
            exFilterList={exFilterList}
            handleModalState={handleModalState}
          />
        ) : null;
      default:
        return null;
    }
  }, [currentFilter]);
  return (
    <S.Container>
      <div onClick={handleModalState}>X</div>
      <div>{getFilterByFiltername()}</div>
    </S.Container>
  );
}

export default FilterModal;
