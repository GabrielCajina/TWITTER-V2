import { Grid } from "@chakra-ui/react";
import React from "react";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";

interface LayoutProps {
  leftPanel?: JSX.Element;
  rightPanel?: JSX.Element;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  leftPanel = <LeftBar />,
  rightPanel = <RightBar />,
  children,
}) => {
  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        md: "64px 1fr",
        lg: "200px 1fr 300px",
      }}
      h="100vh"
      overflow={"scroll"}
      maxW={{ base: "full", md: 800, lg: 1100 }}
      margin="auto"
      className="scroll-none"
    >
      {leftPanel}
      {children}
      {rightPanel}
    </Grid>
  );
};

export default Layout;

export const withLayout = () => {};
