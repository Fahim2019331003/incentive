import Contact from './Contact';
import Details from './Details';

const Footer = () => {
  return (
    <div className="bg-black text-white py-10 px-10 z-10">
      <div className="flex space-between gap-60">
        <div className="basis-1/2 ml-20">
          <Details />
        </div>
        <div className="basis-1/2">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Footer;
