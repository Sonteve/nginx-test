import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ExCheckbox, ExCheckboxList, ExFilterList } from "../../@types/filter";
import { changeExFilter } from "../../reducer/filter";
import ApplyButton from "../common/ApplyButton";

interface Props {
  exFilterList: ExFilterList;
  exFilter: string[];
  handleModalState: () => void;
}
function ExFilter({ exFilterList, exFilter, handleModalState }: Props) {
  const dispatch = useDispatch();
  const getPrevCheckValue = useCallback(() => {
    let checkList: any = {};
    if (exFilter.length === 0) {
      Object.keys(exFilterList).forEach((filtername) => {
        const detail: ExCheckbox[] = [];
        exFilterList[filtername].forEach((item) => {
          detail.push({
            ...item,
            isChecked: false,
          });
        });
        checkList[filtername] = detail;
      });
    } else if (exFilter.length > 0) {
      Object.keys(exFilterList).forEach((filtername) => {
        const detail: ExCheckbox[] = [];
        exFilterList[filtername].forEach((item) => {
          detail.push({
            ...item,
            isChecked: exFilter.includes(item.checks_code) ? true : false,
          });
        });
        checkList[filtername] = detail;
      });
    }
    return checkList;
  }, [exFilterList, exFilter]);

  const [checkbox, setCheckbox] = useState<ExCheckboxList>(getPrevCheckValue());

  const handleClickFilterBox = useCallback(
    (checks_code: string) => {
      const newCheck: any = {};
      Object.keys(checkbox).forEach((filtername) => {
        newCheck[filtername] = checkbox[filtername].map((item) =>
          item.checks_code === checks_code
            ? { ...item, isChecked: !item.isChecked }
            : item
        );
      });
      setCheckbox(newCheck);
    },
    [checkbox]
  );
  const handleClickApplyButton = useCallback(() => {
    const filter: string[] = [];
    Object.keys(checkbox).forEach((filtername) => {
      checkbox[filtername].forEach((item) => {
        if (item.isChecked) {
          filter.push(item.checks_code);
        }
      });
    });

    dispatch(changeExFilter(filter));
    handleModalState();
  }, [checkbox, handleModalState, dispatch]);

  useEffect(() => {
    console.log(checkbox);
  }, [checkbox]);

  if (!checkbox) return null;

  return (
    <div>
      {Object.keys(checkbox).map((filtername) => (
        <div key={filtername}>
          <div>{checkbox[filtername][0].checks_ca_name}</div>
          {checkbox[filtername].map((item) => (
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => handleClickFilterBox(item.checks_code)}
            >
              <div key={item.checks_code}>{item.checks_name}</div>
              <input type="checkbox" checked={item.isChecked} readOnly />
            </div>
          ))}
        </div>
      ))}
      <ApplyButton handleClickApplyButton={handleClickApplyButton} />
    </div>
  );
}

export default ExFilter;
