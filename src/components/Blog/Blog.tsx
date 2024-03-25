import { flowData } from "@/data/flowData";
import { FlowDataInterface } from "@/interfaces/data.interface";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="px-5 md:px-0">
      <h1
        className="noto-sans text-[30px]
           font-normal md:text-[35px] 
           leading-[42px] text-center 
           capitalize"
      >
        read our blog posts
      </h1>
      <h2 className="nunito text-[15px] md:text-[18px] pb-5 md:pb-0 text-center font-normal leading-[22px] max-w-[469px] m-auto pt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing ectetur elit, sed do
        eiusmod.
      </h2>
      <div className="flex flex-col px-0 md:items-start items-center justify-center gap-10 md:flex-row md:px-10 lg:px-[140px] mt-5">
        {flowData.map((item: FlowDataInterface, index: number) => (
          <div key={index} className="">
            <Image
              src={item.imageSrc}
              alt={`Image ${index + 1}`}
              width={526}
              height={560}
              className="Img"
            />
            <div className="nunito text-[15px] border-black border-b-[1px] py-3 md:text-[12px] leading-[16px] text-center spacing-[0.6px] capitalize">
              {item.text}
            </div>
            <h1 className="noto-sans text-[20px] leading-[33px] pt-2 text-clip text-center capitalize">
              {item.text2}
            </h1>
            <Link
              href=""
              className="noto-sans text-[15px] hover:underline md:text-[12px] font-semibold leading-[17px] spacing-[1.2px] flex justify-center pt-7"
            >
              {item.link}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
