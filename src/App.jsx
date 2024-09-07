import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative items-center">
       <h1 className="absolute bg-white rounded-lg w-11/12 text-center mt-[40px] font-bold text-xl">Random GIFS</h1>

       <div className="flex flex-col relative mt-28 w-full items-center">
        <Random/>
        <Tag/>
       </div>
    </div>
  );
}
