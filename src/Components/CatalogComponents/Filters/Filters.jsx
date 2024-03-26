import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";
import icons from "../../../images/icons.svg";
import {
  FormContainer,
  FormInput,
  FormElementContainer,
  FormSubmitBtn,
  SelectBtn,
  SelectBtnIcon,
  SelectBtnText,
  SelectContent,
  SelectOptions,
  SelectOptionsItem,
} from "./Filters.styled";

import { filters } from "./filtersValues";
import { useSearchParams } from "react-router-dom";
const CatalogFilters = () => {
  const [typeValue, setTypeValue] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [isBrandDropDownOpen, setIsBrandDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownSelectRef = useRef(null);
  const [, setSearchParams] = useSearchParams();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = {};

    if (typeValue) params.type = typeValue;
    if (searchValue) params.query = searchValue;

    setSearchParams(Object.keys(params).length > 0 ? params : {});

    setTypeValue(null);
  };

  return (
    <>
      {
        <FormContainer onSubmit={handleSubmit}>
          <FormElementContainer>
            <SelectBtn
              ref={dropdownSelectRef}
              id="selectButton"
              onClick={() => {
                setIsBrandDropDownOpen(!isBrandDropDownOpen);
              }}
            >
              <SelectBtnText>{typeValue ? typeValue : "Тип інструменту"}</SelectBtnText>
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

          <FormInput placeholder="Вкажіть назву" onChange={(e) => setSearchValue(e.target.value)} />

          <FormSubmitBtn type="submit">Пошук</FormSubmitBtn>
        </FormContainer>
      }
    </>
  );
};

export default CatalogFilters;
