const RightFooter = () => {
    return (
        <div className='fixed bottom-24 right-16'>
          <div className='flex-col items-center relative'>
            <div className=" text-sm font-roboto text-gray-500 hover:text-green-200">
              <p className="[writing-mode:vertical-lr] mb-8 cursor-pointer">omkar.pit@gmail.com</p>  
            </div>
            <div className='absolute left-1/3 border-r-[2px] border-gray-500 h-24'></div>
          </div>
        </div>
    );
};

export default RightFooter;