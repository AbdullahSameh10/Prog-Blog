import { Card } from "@mui/material";
import { Box, CardContent, Skeleton } from "@mui/material";
import styled from "styled-components";

const StyledCard = styled(Card)(() => ({
  margin: "0",
  width: "392px",
}));

export default function LoadingCard() {
  return (
    <StyledCard>
      <Skeleton animation="wave" variant="rectangular" height={240} width={360} sx={{ margin: 2, borderRadius: 2, marginBottom: 0 }}/>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Skeleton animation="wave" variant="text" width={100} height={45} />
        <Skeleton animation="wave" variant="text" sx={{ fontSize: "5rem" }} />
      </CardContent>
        <Box sx={{ p: 2, display: "flex", gap: 3 }}>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Skeleton animation="wave" variant="circular" height={32} width={32} />
            <Skeleton animation="wave" variant="text" width={150} sx={{ fontSize: "1.5rem" }} />
          </Box>
          <Skeleton animation="wave" variant="text" width={100} sx={{ fontSize: "1.5rem" }} />
        </Box>
    </StyledCard>
  );
}
