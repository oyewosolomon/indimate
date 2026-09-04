import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Gallery from "./components/home/Gallery";
import Venue from "./components/home/Venue";
import ContactUs from "./components/home/ContactUs";
import Rsvp from "./components/home/Rsvp";
import Contacts from "./components/home/Contacts";

export default function Home() {
  return (
    <div>
      <Hero />      
      <Services/>
      <Gallery/>
      <Venue/>
      <ContactUs/>
      <Rsvp/>
      <Contacts/>
    </div>
  );
}
