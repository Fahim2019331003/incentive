import Logo from './Logo';

const Details = () => {
  return (
    <div className="mx-10">
      <div className="flex gap-10 items-center">
        <div>
          <Logo />
        </div>
        <div>
          <div className="text-3xl">
            Shahjalal University Of Science & Technology, Sylhet
          </div>
          <div className="text-xs mt-6 text-justify">
            Shahjalal University of Science and Technology also known as SUST is
            the only state supported university located in Sylhet, Bangladesh.
            It is the 8th oldest university and the first Science and Technology
            university in Bangladesh.
          </div>
        </div>
      </div>
      <div className="text-zinc-400 mt-7">
        © All rights reserved by CSE Department, SUST
      </div>
    </div>
  );
};

export default Details;
