import IconList from "./IconList";

const LeftFooter = () => {
    return (
        <div className='fixed bottom-24 left-16'>
          <div className='flex-col items-center relative'>
            <IconList></IconList>
            <div className='absolute left-1/3 border-r-[2px] border-gray-500 h-24'></div>
          </div>
        </div>
    );
};

export default LeftFooter;