import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";
import { CurrencyData } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const CurrencyCardInfo = ({ data }: { data: CurrencyData }) => {
  const isPositiveDiff = parseFloat(data.Diff) > 0 || data.Diff === "0";
  const { language } = useSelector((state: RootState) => state.language);

  //   const flagUrl = `https://countryflagsapi.netlify.app/flag/${data.Ccy.slice(
  //     0,
  //     2
  //   )}.svg`;

  return (
    <Card className=" w-full hover:scale-105 duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {(language === "en" && data.CcyNm_EN) ||
            (language === "ru" && data.CcyNm_RU) ||
            (language === "uzc" && data.CcyNm_UZC) ||
            (language === "uz" && data.CcyNm_UZ)}{" "}
          ({data.Ccy})
        </CardTitle>
        <Badge
          variant={isPositiveDiff ? "default" : "destructive"}
          className="font-mono"
        >
          {isPositiveDiff ? (
            <TrendingUp className="mr-1 h-3 w-3" />
          ) : (
            <TrendingDown className="mr-1 h-3 w-3" />
          )}

          {data.Diff}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{data.Rate}</div>
        <p className="text-xs text-muted-foreground">
          1 {data.Ccy} = {data.Rate} UZS
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col">
            <span className="text-muted-foreground">
              {(language === "en" && "Code") ||
                (language === "ru" && "Код") ||
                (language === "uzc" && "Код") ||
                (language === "uz" && "Kod")}
            </span>
            <span className="font-medium">{data.Code}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">
              {(language === "en" && "Nominal") ||
                (language === "ru" && "Номинальный") ||
                (language === "uzc" && "Номинал") ||
                (language === "uz" && "Nominal")}
            </span>
            <span className="font-medium">{data.Nominal}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">
              {(language === "en" && "Date") ||
                (language === "ru" && "Дата") ||
                (language === "uzc" && "Сана") ||
                (language === "uz" && "Sana")}{" "}
            </span>
            <span className="font-medium">{data.Date}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground ">
              {(language === "en" && "Name") ||
                (language === "ru" && "Название") ||
                (language === "uzc" && "Номи") ||
                (language === "uz" && "Nomi")}{" "}
            </span>
            <span className="font-medium">
              {(language === "en" && data.CcyNm_EN) ||
                (language === "ru" && data.CcyNm_RU) ||
                (language === "uzc" && data.CcyNm_UZC) ||
                (language === "uz" && data.CcyNm_UZ)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrencyCardInfo;
