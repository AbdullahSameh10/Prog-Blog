import { Box, Skeleton } from "@mui/material";

const paragraphWidths = [
  "100%",
  "95%",
  "90%",
  "100%",
  "85%",
  "92%",
  "100%",
  "88%",
  "94%",
  "100%",
  "100%",
  "95%",
  "90%",
  "100%",
  "85%",
  "92%",
  "100%",
  "88%",
  "94%",
  "100%",
];

export default function LoadingBlog() {
  return (
    <Box
      sx={{
        maxWidth: "800px",
        width: "800px",
        mx: "auto",
        mt: 2,
        px: "0px",
      }}
    >
      <Skeleton variant="rectangular" width={100} height={28} />

      <Skeleton
        variant="text"
        sx={{ fontSize: "2.5rem", mt: 1 }}
      />

      <Box sx={{ display: "flex", gap: 3, alignItems: "center", mt: 1 }}>
        <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
          <Skeleton variant="circular" width={32} height={32} />
          <Skeleton variant="text" width={150} />
        </Box>
        <Skeleton variant="text" width={100} />
      </Box>

      <Skeleton
        variant="rectangular"
        height={462}
        sx={{ borderRadius: 2, my: 4 }}
      />

      <hr className="my-3"/>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {paragraphWidths.map((width, index) => (
          <Skeleton
            key={index}
            variant="text"
            width={width}
            sx={{ fontSize: "1.5rem", mb: "-5px" }}
          />
        ))}
      </Box>
    </Box>
  );
}