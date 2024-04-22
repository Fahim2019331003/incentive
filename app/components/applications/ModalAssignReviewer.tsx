import { isValidUser } from '@/app/actions/checkApplication';
import updateApplicationStatus from '@/app/actions/updateApplicationStatus';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import CustomRadioGroup from './CustomRadioGroup';

const ModalAssignReviewer = ({ applicationId,changed,setChanged }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionName, setSelectedOptionName] = useState('');
  const {
    isOpen: isOpenA,
    onOpen: onOpenA,
    onOpenChange: onOpenChangeA,
    onClose: onCloseA,
  } = useDisclosure();
  const {
    isOpen: isOpenB,
    onOpen: onOpenB,
    onOpenChange: onOpenChangeB,
    onClose: onCloseB,
  } = useDisclosure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await isValidUser(selectedOption);
        if (response?.data?.name) {
          setSelectedOptionName(response?.data?.name);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [selectedOption]);

  const OnClickHandlerA = () => {
    onOpenA();
  };
  const onCloseHandlerA = async () => {
    const valueId = [applicationId];
    const toastId = toast.loading('Loading...');
    const response = await updateApplicationStatus(
      valueId,
      'processing',
      selectedOption,
      '',
      ''
    );
    toast.dismiss(toastId);
    if (response.result === 'success') {
      toast.success(response.message);
      setChanged(!changed);
    } else {
      toast.error(response.message);
    }

    onCloseA();
  };

  const OnClickHandlerB = () => {
    onOpenB();
  };
  const onCloseHandlerB = async () => {
    if (selectedOption === '') {
      toast.error('Select a reviewer');
    } else {
      onCloseB();
      onOpenA();
    }
  };

  return (
    <>
      <Button
        variant="solid"
        className="bg-black text-white"
        onPress={OnClickHandlerB}
      >
        Assign Reviewer
      </Button>

      <div>
        <Modal
          backdrop="opaque"
          isOpen={isOpenA}
          onOpenChange={onOpenChangeA}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: 'easeOut',
                },
              },
              exit: {
                y: -20,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: 'easeIn',
                },
              },
            },
          }}
        >
          <ModalContent>
            {(onCloseA) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Assign Reviewer
                </ModalHeader>
                <ModalBody>
                  <p>
                    Do you want to ASSIGN this application to{' '}
                    {selectedOptionName} for review?
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onCloseA}>
                    No
                  </Button>
                  <Button color="primary" onClick={onCloseHandlerA}>
                    Yes
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <div>
        <Modal
          backdrop="opaque"
          isOpen={isOpenB}
          onOpenChange={onOpenChangeB}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: 'easeOut',
                },
              },
              exit: {
                y: -20,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: 'easeIn',
                },
              },
            },
          }}
        >
          <ModalContent>
            {(onCloseB) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Select A Reviewer
                </ModalHeader>
                <ModalBody>
                  <p>
                    Select A reviewer to ASSIGN this application(s) for
                    evaluation.
                  </p>
                  <CustomRadioGroup
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onCloseB}>
                    Close
                  </Button>
                  <Button color="primary" onClick={onCloseHandlerB}>
                    Assign
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};
export default ModalAssignReviewer;
