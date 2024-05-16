export const Skeleton = () => {
    return <div className="border-b border-gray-200 pb-4 animate-pulse">
    <div className="flex">
      <div className="flex justify-center flex-col">
        <div className="h-6 w-6 rounded-full bg-gray-200"></div>
      </div>
      <div className="flex justify-center flex-col font-normal text-sm pl-2">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
      <div className="flex justify-center flex-col pl-2">
        <div className="h-1 w-1 rounded-full bg-gray-200"></div>
      </div>
      <div className="flex justify-center flex-col font-sm text-xs pl-2 text-gray-500">
         <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
    <div className="text-xl font-bold pt-1">
      <div className="h-6 bg-gray-200 rounded w-full"></div>
    </div>
    <div className="font-normal text-gray-700 pt-1">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-full mt-1"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3 mt-1"></div>
    </div>
    <div className="font-normal text-sm text-gray-500 pt-6">
      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
    </div>
  </div>
}