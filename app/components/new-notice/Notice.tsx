'use client';

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, useDisclosure } from '@nextui-org/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import postNewNotice from "../../actions/postNewNotice";

const Notice = () => {
  const { isOpen, onOpen, onOpenChange,onClose } = useDisclosure();

  const [noticeText, setNoticeText] = useState('');

  const onCloseHandler = async () => {

      console.log(noticeText);

      const toastId = toast.loading('Loading...');
      const response = await postNewNotice(noticeText);
      toast.dismiss(toastId);
      if (response.result === 'success') {
        toast.success(response.message);
        setNoticeText("");
      } else {
        toast.error(response.message);
      }
    
    onClose();
  };

  const OnClickHandler = () => {
    if (noticeText.length == 0) {
      toast.error("The text area is empty!")
    } else {
      onOpen();
    }
  };

  return (
    <div>

      <div className="flex justify-center max-w-7xl mx-auto pb-4">
        <div className="flex justify-center pt-8 pb-4 text-3xl font-semibold max-w-7xl">
          <h1>New Notice</h1>
        </div>
      </div>

      <div className="flex justify-center">
        <form className="w-full max-w-6xl">
          <div className="flex flex-col items-center py-2 px-4 transition duration-300 hover:border-gray-900">
            <Textarea
              isRequired
              label="Notice"
              variant="bordered"
              placeholder="Enter Notice text"
              disableAnimation
              disableAutosize
              classNames={{
                base: 'flex-1',
                input: 'resize-y min-h-[250px]',
            }}
              value={noticeText}
              onValueChange={(value) => setNoticeText(value)}
              />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end my-4">
            <button
              className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={OnClickHandler}
            >
              Submit
            </button>
          </div>
        </form>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
              <>
              <ModalHeader className="flex flex-col gap-1">Post New Notice</ModalHeader>
              <ModalBody>
                <p> 
                  Do you want to post this notice?
                </p>
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
      </div>
  );
};

export default Notice;
