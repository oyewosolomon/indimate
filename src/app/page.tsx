import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Venue from "@/components/sections/Venue";
import Testimonial from "@/components/sections/Testimonial";
import ContactUs from "@/components/sections/ContactUs";
import Rsvp from "@/components/sections/Rsvp";
import Contacts from "@/components/sections/Contacts";

export default function Home() {
  return (
    <div>
      <Hero />      
      <Services/>
      <Gallery/>
      <Venue/>
      <Testimonial/>
      <ContactUs/>
      <Rsvp/>
      <Contacts/>
    </div>
  );
}
