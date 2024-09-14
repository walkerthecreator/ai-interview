"use client";
import { useBears } from "@/stores/Bears.stores";
import BearChild from "@/components/BearChild";

const Page = () => {
  const { bears, addBears, killBears } = useBears();
  return (
    <div className="mt-10 w-3/4 mx-auto">
      <h1>Bears : {bears}</h1>
      <button className="p-1 bg-blue-700 rounded me-3" onClick={addBears}>
        add more bears
      </button>
      <button className="p-1 bg-red-700 rounded " onClick={killBears}>
        reduce more bears
      </button>
      <BearChild ></BearChild>
    </div>
  );
};

export default Page;
