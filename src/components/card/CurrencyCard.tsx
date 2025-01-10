import { FaRegChartBar } from "react-icons/fa";
import { BiTrendingDown } from "react-icons/bi";
import { BiTrendingUp } from "react-icons/bi";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CurrencyData } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const CurrencyCard = ({ data }: { data: CurrencyData }) => {
  const isPositiveDiff = parseFloat(data.Diff) > 0;
  const { language } = useSelector((state: RootState) => state.language);
  const flagUrl = `https://countryflagsapi.netlify.app/flag/${data.Ccy.slice(
    0,
    2
  )}.svg`;

  return (
    <div className="">
      {/* <CurrencyCardInfo data={data} /> */}

      <Card className="hover:scale-105 duration-300 ">
        <CardHeader>
          <CardTitle>
            <div className="w-full flex items-center gap-5 ">
              <div className="w-full max-w-[35px] h-[35px]  shadow-custom rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={
                    data.Ccy == "EUR"
                      ? "https://cdn.britannica.com/66/96866-050-BBAE91CE/Flag-European-Union.jpg"
                      : flagUrl
                  }
                  alt={`${data.Ccy} flag`}
                  className="w-full h-full object-cover "
                />
              </div>

              <div className="w-full flex flex-col">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-sm font-medium">
                    {(language === "en" && data.CcyNm_EN) ||
                      (language === "ru" && data.CcyNm_RU) ||
                      (language === "uzc" && data.CcyNm_UZC) ||
                      (language === "uz" && data.CcyNm_UZ)}
                    ({data.Ccy})
                  </CardTitle>
                  <Badge
                    variant={isPositiveDiff ? "default" : "destructive"}
                    className="font-mono"
                  >
                    {isPositiveDiff ? (
                      <BiTrendingUp className="mr-1 h-4 w-4" />
                    ) : (
                      <BiTrendingDown className="mr-1 h-4 w-4" />
                    )}
                    <span>{data.Diff}</span>
                  </Badge>
                </div>
                <div className=" flex items-end justify-between">
                  <div className="">
                    <strong className="text-2xl font-bold">{data.Rate}</strong>
                    <p className="text-xs text-muted-foreground">
                      1 {data.Ccy} = {data.Rate} UZS
                    </p>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger data-side="bottom">
                        <FaRegChartBar className="h-6 w-6 mr-3" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Statistics</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Dialog>
                    <DialogTrigger>Open</DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] flex justify-center items-center">
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default CurrencyCard;
