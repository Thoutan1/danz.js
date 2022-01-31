import {
  Box,
  Grid,
  Heading,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import MotionBox from "lib/components/motion/Box";

const SomeText = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "sm",
  });

  return (
    <Grid gap={2}>
      <MotionBox
        animate={{ y: 20, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        marginY={8}
        maxWidth={[240, 320]}
        marginX="auto"
      >
        <Heading as="h2" fontSize={{ base: "lg", sm: "2xl" }}>
          Hi Im DanZDi :)
        </Heading>
      </MotionBox>
    </Grid>
  );
};

export default SomeText;
