// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { TrendingUp, TrendingDown } from "lucide-react";
// import { CurrencyData } from "../types";

// const CurrencyCardInfo = ({ data }: { data: CurrencyData }) => {
//   const isPositiveDiff = parseFloat(data.Diff) > 0;

//   return (
//     <Card className="w-full max-w-md">
//       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//         <CardTitle className="text-sm font-medium">
//           {/* <span>
//             <img src={`https://flagsapi.com/${"US"}/flat/64.png`} />
//           </span>{" "} */}
//           {data.CcyNm_EN} ({data.Ccy})
//         </CardTitle>
//         <Badge
//           variant={isPositiveDiff ? "default" : "destructive"}
//           className="font-mono"
//         >
//           {isPositiveDiff ? (
//             <TrendingUp className="mr-1 h-3 w-3" />
//           ) : (
//             <TrendingDown className="mr-1 h-3 w-3" />
//           )}
//           {data.Diff}
//         </Badge>
//       </CardHeader>
//       <CardContent>
//         <div className="text-2xl font-bold">{data.Rate}</div>
//         <p className="text-xs text-muted-foreground">
//           1 {data.Ccy} = {data.Rate} UZS
//         </p>
//         <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
//           <div className="flex flex-col">
//             <span className="text-muted-foreground">Code</span>
//             <span className="font-medium">{data.Code}</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-muted-foreground">Nominal</span>
//             <span className="font-medium">{data.Nominal}</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-muted-foreground">Date</span>
//             <span className="font-medium">{data.Date}</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-muted-foreground">Name (UZ)</span>
//             <span className="font-medium">{data.CcyNm_UZ}</span>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default CurrencyCardInfo;
