import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

import MotionBox from "lib/components/motion/Box";

import HelperImage from "./HelperImage";

const SomeImage = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <MotionBox
        animate={{ y: 20, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        marginY={8}
        maxWidth={[240, 320]}
        marginX="auto"
      >
        <Image
          src="/Visual-data-pana.svg"
          width={400}
          height={400}
          alt="Launching Illustration"
        />
      </MotionBox>
      <Text textAlign="center" fontSize={{ sm: "1xs" }}>
        A Language/Framework/Tools Used
      </Text>

      <Flex marginY={4} justifyContent="center" alignItems="center">
        <HelperImage src="/ts-logo-512.svg" label="TypeScript" />
        <HelperImage src="/javascript-logo.svg" label="Javascript" />
        <HelperImage src={`/nextjs-icon-${colorMode}.svg`} label="NextJS" />
        <HelperImage src="/chakra-ui-logomark-colored.svg" label="Chakra-UI" />
        <HelperImage src="/ruby.svg" label="Ruby" />
        <HelperImage src="/371617.svg" label="Code" />
        <HelperImage src="/git-icon.svg" label="Git" />
        <HelperImage src="/371378.svg" label="React" />
      </Flex>
    </Box>
  );
};

export default SomeImage;
