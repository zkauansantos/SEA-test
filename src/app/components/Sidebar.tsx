export default function Sidebar() {
  const items = [
    { id: 1, icon: "home.svg" },
    { id: 2, icon: "edit.svg" },
    { id: 3, icon: "connections.svg" },
    { id: 4, icon: "rollback.svg" },
    { id: 5, icon: "user.svg" },
    { id: 6, icon: "sino.svg" },
  ];

  return (
    <aside className='w-[58px] bg-blue-theme h-screen gap-8 flex absolute left-0 justify-center flex-col items-center rounded-r-[48px]'>
      {items.map((item) => (
        <div key={item.id}>
          <img src={`/assets/icons/${item.icon}`} className='h-8 w-8' />
        </div>
      ))}
    </aside>
  );
}
