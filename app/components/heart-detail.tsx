import { CiHeart } from "react-icons/ci";

export const HeartDetail = () => {
  return (
    <div className="mb-8 flex w-full items-center gap-2 text-gray-300 dark:text-gray-500 lg:flex">
      <div className="flex h-[1px] w-full flex-1 bg-gray-300 dark:bg-gray-500" />
      <CiHeart className="h-6 w-6 scale-90 transform" />
      <div className="flex h-[1px] w-full flex-1 bg-gray-300 dark:bg-gray-500" />
    </div>
  );
};
