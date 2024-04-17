function convertToBengaliNumber(number) {
  const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

  const englishNumberString = String(number);
  let bengaliNumberString = '';

  for (let i = 0; i < englishNumberString.length; i++) {
    const englishDigitIndex = englishDigits.indexOf(englishNumberString[i]);
    if (englishDigitIndex !== -1) {
      bengaliNumberString += bengaliDigits[englishDigitIndex];
    } else {
      bengaliNumberString += englishNumberString[i];
    }
  }

  return bengaliNumberString;
}

const ListItem = ({ data, index, key }) => {
  return (
    <li className="py-3 px-28 mt-3" key={key}>
      <div className="flex mx-10 bg-white rounded-xl shadow-lg p-3 text-lg">
        <div>{convertToBengaliNumber(index)}.</div>
        <div className="ml-3">{data}</div>
      </div>
    </li>
  );
};

export default ListItem;


/*
const ListItem = ({ data, index, key }) => {
  return (
    <li className="p-3 mt-3 " key={key}>
      <div className="flex mx-10 bg-white rounded-xl shadow-lg p-3">
        <div>{index}.</div>
        <div className="ml-3">{data}</div>
      </div>
    </li>
  );
};

export default ListItem;

*/