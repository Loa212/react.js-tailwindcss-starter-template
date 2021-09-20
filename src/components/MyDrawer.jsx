import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"


function MyDrawer(props) {
  return (
    <Drawer
      isOpen={props.isOpen}
      placement="left"
      onClose={props.onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
          <input placeholder="Type here..." />
        </DrawerBody>

        <DrawerFooter>
            drawer footer
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default MyDrawer