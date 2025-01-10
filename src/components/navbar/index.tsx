import { SiConvertio } from "react-icons/si";
import Container from "../container";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AppDispatch, RootState } from "@/redux/store";
import { setLanguage } from "@/redux/slices/langSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleChange = (value: string) => {
    dispatch(setLanguage(value));
  };
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div className="w-full fixed top-0 left-0 shadow-xl z-10  bg-white bg-opacity-30  backdrop-blur-sm">
      <Container>
        <div className="w-full ">
          <div className="w-full pt-2 flex justify-end ">
            <Select onValueChange={handleChange}>
              <SelectTrigger className="w-[150px] h-[30px]">
                <SelectValue
                  placeholder={
                    (language === "en" && "English") ||
                    (language === "ru" && "Русский") ||
                    (language === "uzc" && "Ўзбекча") ||
                    "O'zbekcha"
                  }
                />
              </SelectTrigger>
              <SelectContent className="w-[150px]">
                <SelectGroup>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ru">Русский</SelectItem>
                  <SelectItem value="uz">O'zbekcha</SelectItem>
                  <SelectItem value="uzc">Ўзбекча</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full py-4 flex items-center justify-between">
            <h1 className="text-3xl font-bold first-letter:uppercase">
              Exchange rates
            </h1>

            <Button>
              Convetor
              <SiConvertio />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
