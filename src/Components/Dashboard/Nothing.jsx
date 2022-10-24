import { SiTailwindcss, SiRedux, SiReact } from "react-icons/si";
import { BsEmojiSmileFill } from "react-icons/bs";

const Nothing = () => {
  return (
    <div className="w-[1650px] flex flex-col my-40 items-center opacity-30  animate-pulse">
      <p className="text-[45px] font-semibold">Estudo feito utilizando:</p>
      <div className="flex item-center justify-center my-8 ">
        <SiRedux size={250} /> &nbsp; &nbsp; &nbsp; <SiReact size={250} />
        &nbsp; &nbsp; &nbsp;
        <SiTailwindcss size={250} />
      </div>
      <p className="text-[25px] font-semibold flex items-center">
        É só clicar em algum modúlo e testar&nbsp;&nbsp; <BsEmojiSmileFill />
      </p>
    </div>
  );
};

export default Nothing;
