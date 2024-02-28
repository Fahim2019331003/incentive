import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PinDropIcon from '@mui/icons-material/PinDrop';

const Contact = () => {
  return (
    <div className="pl-20">
      <div className="text-3xl">Contact</div>
      <div className="mt-5">
        <div className="flex items-center">
          <div>
            <PhoneIcon />
          </div>
          <div className="text-s mt-2 ml-2">01705-814064</div>
        </div>
        <div className="flex items-center">
          <div>
            <EmailIcon />
          </div>
          <div className="text-s mt-2 ml-2">researchcenter@gmail.com </div>
        </div>
        <div className="flex items-center">
          <div>
            <PinDropIcon />
          </div>
          <div className="text-s mt-2 ml-2">Kumargaon, Sylhet-3114, Bangladesh</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
