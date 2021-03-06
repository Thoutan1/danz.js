import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <Link href="/">@Renci11</Link>
      </Heading>
    </Flex>
  );
};

export default Header;
