import { Button, IconButton } from '@chakra-ui/button';
import { ViewIcon } from '@chakra-ui/icons';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const ProfileModal = ({ user, children}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
  <>
    {
        children ? (
        <span onClick={onOpen}>{children}</span>
    ): (
        <IconButton
        display={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen}/>
    )}
    <Modal isOpen ={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
                xyz
            </ModalBody>

            <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                </Button>
                <Button variant="ghonst"> Secondary Action</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
  </>
  );
};

export default ProfileModal
