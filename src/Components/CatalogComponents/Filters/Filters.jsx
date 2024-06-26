import { useState } from "react";
import { FormContainer, FormInput, FormSubmitBtn } from "./Filters.styled";

import { filters } from "./filtersValues";
import { useSearchParams } from "react-router-dom";

import Dropdown from "../../UI/Dropdown/Dropdown";

const CatalogFilters = () => {
  const [searchValue, setSearchValue] = useState(null);
  const [, setSearchParams] = useSearchParams();
  const [typeValue, setTypeValue] = useState(null);

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
          <Dropdown filters={filters} typeValue={typeValue} setTypeValue={setTypeValue} />
          <FormInput placeholder="Вкажіть назву" onChange={(e) => setSearchValue(e.target.value)} />

          <FormSubmitBtn type="submit">Пошук</FormSubmitBtn>
        </FormContainer>
      }
    </>
  );
};

export default CatalogFilters;
