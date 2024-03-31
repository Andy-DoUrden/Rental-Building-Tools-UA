import { useState, useRef, useEffect } from "react";
import {
  FormElementContainer,
  SelectBtn,
  SelectBtnText,
  SelectBtnIcon,
  SelectContent,
  SelectOptions,
  SelectOptionsItem,
} from "./Dropdown.styled";
import icons from "../../../images/icons.svg";
import { nanoid } from "nanoid";

const Dropdown = ({ filters, typeValue, setTypeValue }) => {
  const [isBrandDropDownOpen, setIsBrandDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownSelectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !dropdownSelectRef.current.contains(event.target)
      ) {
        setIsBrandDropDownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <FormElementContainer>
      <SelectBtn
        ref={dropdownSelectRef}
        id="selectButton"
        onClick={() => {
          setIsBrandDropDownOpen(!isBrandDropDownOpen);
        }}
      >
        <SelectBtnText>{typeValue ? typeValue : "оберіть тип"}</SelectBtnText>
        <SelectBtnIcon width={20} height={20} isBrandDropDownOpen={isBrandDropDownOpen}>
          <use href={icons + "#arrowDown"} />
        </SelectBtnIcon>
      </SelectBtn>

      <SelectContent ref={dropdownRef}>
        <SelectOptions isBrandDropDownOpen={isBrandDropDownOpen}>
          {filters.map((filter) => (
            <SelectOptionsItem
              key={nanoid()}
              onClick={() => {
                setTypeValue(filter);
              }}
              itemValue={filter}
              isItemActive={typeValue}
            >
              {filter}
            </SelectOptionsItem>
          ))}
        </SelectOptions>
      </SelectContent>
    </FormElementContainer>
  );
};

export default Dropdown;
