import { Grid, Link, Heading } from "@chakra-ui/react";
import MotionBox from "lib/components/motion/Box";
import HelperImage from "./HelperImage";

const SomeText = () => {
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

        <Link
          href="https://github.com/DanZvaa"
          isExternal
          rel="noopener noreferrer"
        >
          <HelperImage src="/github.svg" label="Github"></HelperImage>
        </Link>
      </MotionBox>
    </Grid>
  );
};

export default SomeText;
