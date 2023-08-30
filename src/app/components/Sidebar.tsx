import { images } from "../../constants/imagesNavList";

export default function Sidebar() {
  return (
    <aside className='w-[58px] bg-blue-theme h-screen gap-8 flex fixed left-0 top-0 justify-center flex-col items-center rounded-r-[48px]'>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.icon} className='h-8 w-8' />
        </div>
      ))}
    </aside>
  );
}
