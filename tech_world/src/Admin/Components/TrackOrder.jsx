import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";

import ProjectTables from "./dataStatas/ProjectTable";

const TrackOrder = () => {
  return (
    <Box overflowWrap="anywhere">
      <ProjectTables />
    </Box>
  );
};

export default TrackOrder;
