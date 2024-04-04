import { useGetOrdersQuery } from "../../Redux/API/RTK.js";
import { MainTitle, ListOfOrders } from "./Admin.styled.js";
import Loader from "../UI/Loader.jsx";
import Filters from "./Filters/Filters.jsx";
import { useSearchParams } from "react-router-dom";
import OrderElement from "./OrderElement/OrderElement.jsx";

const Admin = () => {
  const [searchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());
  const { data, isLoading, error } = useGetOrdersQuery({
    params: {
      ...searchParamsObject,
    },
  });

  return (
    <>
      <ListOfOrders>
        <Filters />
        <MainTitle>Історія замовлень</MainTitle>
        {isLoading ? <Loader /> : data.orders.map((item) => <OrderElement key={item._id} item={item} />)}
        {error && <h1>Something went wrong</h1>}
      </ListOfOrders>
    </>
  );
};

export default Admin;
