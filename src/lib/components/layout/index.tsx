import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";
import Particles from "react-tsparticles";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Particles
        id="tsparticles"
        /** @typescript-eslint/no-use-before-define */
        options={PARTICLE}
        style={{
          position: "fixed",
          zIndex: "-10",
        }}
      />
      <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
        <Box margin="8">
          <Header />
          <Box as="main" marginY={22}>
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
const PARTICLE = {
  fps_limit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: { enable: true, mode: "grab" },
      resize: true,
    },
    modes: {
      grab: {
        distance: 150,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
    },
  },
  background: {
    color: {
      value: "#F5F5F5",
    },
    image: "",
    position: "",
    repeat: "",
    size: "",
    opacity: 1,
  },
  particles: {
    color: { value: "#ADADAD" },
    links: {
      color: "#ADADAD",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "out",
      random: false,
      speed: 1.5,
      straight: false,
    },
    number: { density: { enable: true, area: 800 }, value: 100 },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { random: true, value: 5 },
  },
  detectRetina: true,
};
