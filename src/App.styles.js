import styled from "styled-components";
import posed from "react-pose";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

export const Container = styled(RouteContainer)`
  width: 100%;
  height: 100%;
`;
