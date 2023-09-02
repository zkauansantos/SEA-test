import { images } from "../constants/imagesNavList";
import cn from "../utils/cn";

export default function Sidebar() {
  return (
    <aside className='w-[58px] bg-blue-theme h-screen gap-8 flex fixed left-0 top-0 justify-center flex-col items-center rounded-r-[48px]'>
      <div className='absolute h-[41px] w-full bg-white top-[50px] left-0'></div>

      {images.map((image, index) => (
        <div 
          key={image.id}
          className={cn(
            'w-full flex justify-center relative',
            index === 1 && 'opacity-80',
            index !== 1 && 'cursor-not-allowed hover:opacity-80'
          )}
        >
          {index === 1 && (
            <span className='bg-white absolute h-8 w-1.5 left-0'></span>
          )}
          <img src={image.icon} className='h-8 w-8' />
        </div>
      ))}
    </aside>
  );
}
