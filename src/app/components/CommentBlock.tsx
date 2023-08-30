import person from "../../assets/icons/person.svg";

export default function CommentBlock() {
  return (
    <div className='rounded-[20px] max-h-[484px] w-full max-w-[446px] h-full bg-white px-[14px] py-[26px] relative shadow-[0px_11px_20px_0px_rgba(0,0,0,0.2)]'>
      <p className="text-gray-theme100">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit
        suscipit porttitor. Suspendisse ex lorem, rhoncus nec ante eu, venenatis
        aliquam turpis. Nulla facilisi. Curabitur nec mattis dolor. Nulla
        finibus bibendum ligula tempus vehicula. Ut at tristique libero, nec
        efficitur dui. Aliquam erat volutpat. Fusce quam sem, tempus nec justo
        eget, luctus scelerisque velit. Nam sollicitudin purus urna, vitae
        ornare neque tincidunt vel. Proin ac lacinia erat, et commodo felis.
        Phasellus tempor tellus eu vulputate tempus.
      </p>

      <img src={person} alt='person-illustration' className='absolute bottom-[-59px]' />
    </div>
  );
}
