import Image from 'next/image';

const imageStyle = {
  borderRadius: '5%',
};

const ProfileImage = ({ src }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '200px',
        height: '200px',
        marginRight: '2rem',
      }}
    >
      <Image
        alt="person"
        src={src === '' ? '/images/person2.jpg' : src}
        layout="fill"
        objectFit="cover"
        style={imageStyle}
      />
    </div>
  );
};

export default ProfileImage;
