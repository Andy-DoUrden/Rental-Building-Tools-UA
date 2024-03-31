import { useState } from "react";

import { FormContainer, FormInput, FormSubmitBtn } from "./Filters.styled";

import { filters } from "./filtersValues";
import { useSearchParams } from "react-router-dom";
import Dropdown from "../../UI/dropDown/dropDown";

const CatalogFilters = () => {
  const [typeValue, setTypeValue] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [dateValue, setDateValue] = useState(null);

  const [, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = {};

    if (typeValue) params.status = typeValue;
    if (searchValue) params.query = searchValue;
    if (dateValue) params.date = dateValue;

    setSearchParams(Object.keys(params).length > 0 ? params : {});

    setTypeValue(null);
  };

  return (
    <>
      {
        <FormContainer onSubmit={handleSubmit}>
          <Dropdown filters={filters} typeValue={typeValue} setTypeValue={setTypeValue} />

          <FormInput placeholder="Вкажіть назву" onChange={(e) => setSearchValue(e.target.value)} />
          <FormInput type="date" placeholder="Вкажіть дату" onChange={(e) => setDateValue(e.target.value)} />

          <FormSubmitBtn type="submit">Пошук</FormSubmitBtn>
        </FormContainer>
      }
    </>
  );
};

export default CatalogFilters;
