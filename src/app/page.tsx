import Image from "next/image";

import Homepage from "./Home/page"
import Contact from "./contact/page";
import About from "./About/page"

export default function Home() {
  return (
    
         <div>

<Homepage/>
<About/>
<Contact />

         </div>
  );
}
