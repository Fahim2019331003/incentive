import updateApplicationStatus from '@/app/actions/updateApplicationStatus';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from '@nextui-org/react';
import { useState } from 'react';
import toast from 'react-hot-toast';

const ModalCoordinator = ({ applicationId, changed, setChanged }) => {
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
  const [rejectionCause, setRejectionCause] = useState('');

  const OnClickHandlerA = () => {
    onOpenA();
  };
  const onCloseHandlerA = async () => {
    const valueId = [applicationId];
    //   console.log(valueId);
    const toastId = toast.loading('Loading...');
    const response = await updateApplicationStatus(
      valueId,
      'assigned',
      '',
      'accept',
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
    if (rejectionCause === '') {
      toast.error('Rejection cause missing');
      return;
    }

    const valueId = [applicationId];
    //   console.log(valueId);
    const toastId = toast.loading('Loading...');
    const response = await updateApplicationStatus(
      valueId,
      'assigned',
      '',
      'reject',
      rejectionCause
    );
    toast.dismiss(toastId);
    if (response.result === 'success') {
      toast.success(response.message);
      setChanged(!changed);
    } else {
      toast.error(response.message);
    }

    onCloseB();
  };

  return (
    <>
      <div className="flex mx-10">
        <Button
          variant="solid"
          className="bg-black text-white mx-3"
          onPress={OnClickHandlerB}
        >
          Reject
        </Button>
        <Button
          variant="solid"
          className="bg-black text-white"
          onPress={OnClickHandlerA}
        >
          Accept For Incentive
        </Button>
      </div>

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
                  Accept For Incentive
                </ModalHeader>
                <ModalBody>
                  <p>Do you want to ACCEPT this application for payment?</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onCloseA}>
                    Close
                  </Button>
                  <Button color="primary" onClick={onCloseHandlerA}>
                    Accept
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
                  Reject Application
                </ModalHeader>
                <ModalBody>
                  <p>Do you want to REJECT application?</p>
                  <div>
                    <Textarea
                      isRequired
                      label="Cause of rejection"
                      variant="bordered"
                      placeholder="Enter your description"
                      disableAnimation
                      disableAutosize
                      classNames={{
                        base: 'max-w-sm',
                        input: 'resize-y min-h-[80px]',
                      }}
                      value={rejectionCause}
                      onValueChange={(value) => setRejectionCause(value)}
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onCloseB}>
                    Close
                  </Button>
                  <Button color="primary" onClick={onCloseHandlerB}>
                    Reject
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
