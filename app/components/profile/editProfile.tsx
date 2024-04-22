'use client';
import updateUserInfo from '@/app/actions/updateUserInfo';
import {
  Button,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../Loader';
import EditProfileItem from '../edit-profile/EditProfileItem';
import ProfileItem from './ProfileItem';
import ProfileImage from './image';

const EditProfile = ({
  user,
  isEditOpen,
  setEditOpen,
  changed,
  setChanged,
  viewer,
}) => {
  /* Data from the profile page */
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [loading, setLoading] = useState(1);

  const [updateData, setUpdateData] = useState(user);

  const onCloseHandler = async () => {
    const toastId = toast.loading('Loading...');
    const response = await updateUserInfo(updateData);
    toast.dismiss(toastId);
    if (response.result === 'success') {
      toast.success(response.message);
      setEditOpen(!isEditOpen);
      setChanged(!changed);
    } else {
      toast.error(response.message);
    }

    onClose();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response: any = await getProfileData(userId);
        // if (response.result === 'success') {
        //   setProfileData(response.data);
        // } else {
        //   router.replace('/404');
        // }
        const userString = {
          name: user.name,
          email: user.email,
          image: user.image ? user.image : '',
          designation: user.designation ? user.designation : '',
          department: user.department ? user.department : '',
          school: user.school ? user.school : '',
          bankinfo: user.bankinfo ? user.bankinfo : '',
          contact: user.contact ? user.contact : '',
          role: user.role,
        };
        setUpdateData(userString);
        setLoading(0);
      } catch (error) {
        // console.error('Error fetching data:', error);
        // toast.error('No such user');
        // router.replace("/404");
        setLoading(0);
      }
    };
    fetchData();
  }, []);

  const handleChange = (fieldName, value) => {
    setUpdateData({ ...updateData, [fieldName]: value });
  };

  return (
    <div>
      <Card className="mt-10 mb-10 px-10 pt-10 pb-16">
        <CardBody>
          {loading ? (
            <Loader />
          ) : (
            <div>
              <div className="flex items-center m-10 max-w-6xl mx-auto">
                <ProfileImage src={updateData?.image} />

                <div className="flex-col py-2 ml-6 max-w-4xl">
                  <div className="font-bold text-4xl">{updateData?.name}</div>
                  {updateData?.role !== '' && (
                    <div className="font-semibold text-md mt-4">
                      {updateData?.role}
                    </div>
                  )}
                </div>
                {(viewer?.role === 'ADMIN' || user.email === viewer.email) && (
                  <div className="flex-1 flex justify-end items-center">
                    <Button
                      onClick={(e) => setEditOpen(!isEditOpen)}
                      isIconOnly
                      className="bg-white"
                    >
                      <Image
                        src={'/editProfile.png'}
                        width={35}
                        height={35}
                        alt={'right'}
                      />
                    </Button>
                  </div>
                )}
              </div>

              <hr className="border-b border-gray-300 w-1/2 mx-auto my-4" />

              <div className="flex-col justify-center max-w-6xl mx-auto">
                <div className="my-2">
                  <h1 className="font-bold text-3xl mb-4">
                    Personal Information
                  </h1>
                  <EditProfileItem
                    title="Name: "
                    value={updateData?.name}
                    onChange={(value) => handleChange('name', value)}
                  />
                  <ProfileItem title="Email: " info={updateData?.email} />
                  <EditProfileItem
                    title="Phone: "
                    value={updateData?.contact}
                    onChange={(value) => handleChange('contact', value)}
                  />
                </div>
              </div>

              <div className="flex-col justify-center max-w-6xl mx-auto my-6">
                <div className="my-2">
                  <h1 className="font-bold text-3xl mb-4">
                    Professional Information
                  </h1>
                  <EditProfileItem
                    title="Department: "
                    value={updateData?.department}
                    onChange={(value) => handleChange('department', value)}
                  />
                  <EditProfileItem
                    title="School: "
                    value={updateData?.school}
                    onChange={(value) => handleChange('school', value)}
                  />
                  <EditProfileItem
                    title="Designation: "
                    value={updateData?.designation}
                    onChange={(value) => handleChange('designation', value)}
                  />
                </div>
              </div>

              <div className="flex-col justify-center max-w-6xl mx-auto my-6">
                <div className="my-2">
                  <h1 className="font-bold text-3xl mb-4">Bank Information</h1>
                  <EditProfileItem
                    title="Account No: "
                    value={updateData?.bankinfo}
                    onChange={(value) => handleChange('bankinfo', value)}
                  />
                </div>
              </div>

              <div className="flex justify-center mb-4 max-w-6xl mx-auto mt-10">
                <button
                  className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={onOpen}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          <div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Edit Profile
                    </ModalHeader>
                    <ModalBody>
                      <p>Do you want to make these changes?</p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        No
                      </Button>
                      <Button color="primary" onPress={onCloseHandler}>
                        Yes
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default EditProfile;
