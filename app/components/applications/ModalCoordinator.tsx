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
import toast from 'react-hot-toast';

const ModalCoordinator = ({applicationId ,changed,setChanged}) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();


  const OnClickHandler = () => {
    onOpen();
  };
  const onCloseHandler = async () => {
    
      const valueId=[applicationId];
      const toastId = toast.loading('Loading...');
      const response = await updateApplicationStatus(
        valueId,
        'pending',
        '',
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
      
    
    onClose();
  };

  return (
    <>
      <Button
            variant="solid"
            className="bg-black text-white"
            onPress={OnClickHandler}
          >
            Accept For Review
          </Button>
      <div>
          <Modal
            backdrop="opaque"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
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
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Accept For Review
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Do you want to send this
                      application for review?
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onClick={onCloseHandler}>
                      Send For Review
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
export default ModalCoordinator;
