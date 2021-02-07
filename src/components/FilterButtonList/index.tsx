import React, { useCallback, useState } from "react";
import FilterModal from "../FilterModal";
import * as S from "./style";

interface Props {
  handleModalState: () => void;
  handlecurrentFilter: (filter: string) => void;
}

const filterList = ["지역", "정렬", "검사", "성별"];

function FilterList({ handleModalState, handlecurrentFilter }: Props) {
  const onClickFilterButton = useCallback((filter: string) => {
    handlecurrentFilter(filter);
    handleModalState();
  }, []);
  return (
    <div>
      <S.FilterButtonContainer>
        {filterList.map((item) => (
          <S.FilterButton key={item} onClick={() => onClickFilterButton(item)}>
            {item}
          </S.FilterButton>
        ))}
      </S.FilterButtonContainer>
    </div>
  );
}

export default FilterList;
