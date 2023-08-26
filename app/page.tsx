import Booking from "@/components/Booking/Booking";



export default function Home() {
  
  return (
   <div className="grid grid-cols-1 md:grid-cols-3">
   <div >
    <Booking />
    </div>
   <div className="col-span-2 bg-slate-500">map</div>
   </div>
  )
}
