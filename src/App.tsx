/* eslint-disable @typescript-eslint/no-unused-vars */
// import CurrencyCard from "./components/card/CurrencyCard";
import Container from "./components/container";
import Navbar from "./components/navbar";
import { Card } from "./components/ui/card";
import { Skeleton } from "./components/ui/skeleton";
import { useGetCurrencyQuery } from "./redux/api/currencyApi";
import CurrencyCardInfo from "./components/card/CurrencyCardInfo";

const App = () => {
  const { data: CurrencyDatas, isLoading, isError } = useGetCurrencyQuery();

  if (isError) {
    <div>{isError}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="mt-[140px] mb-[60px] ">
        <Container>
          <Card className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 p-5 xl:grid-cols-3 ">
            {isLoading ? (
              Array.from({ length: 12 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="h-[130px] w-full flex items-center justify-center"
                >
                  Loading...
                </Skeleton>
              ))
            ) : CurrencyDatas && CurrencyDatas.length > 0 ? (
              CurrencyDatas.map((item) => (
                <CurrencyCardInfo data={item} key={item.Ccy} />
              ))
            ) : (
              <div>No data available</div>
            )}
            {}
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default App;
