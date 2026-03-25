import { WizJobGrey } from "@/assets";

export function WizJobGreyBackDrop() {
  return (
    <div
    className="
      select-none
      pointer-events-none 
      opacity-25 
      absolute left-0 
      top-[84px]
      z-0  
      -translate-x-[45%] 
      lg:w-[min(50vw,56rem)] 
      lg:-translate-x-[5%]"
    aria-hidden
  >
    <WizJobGrey className="h-auto" />
  </div>
  );
}