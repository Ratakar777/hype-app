import {
  Autoplay,
  AboutUs,
  Header,
  Projects,
  VideoBlock,
  ContactUs,
  Footer,
} from "@/components";
import { Box, Container } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflow: "hidden", // Prevents any scrolling on the root element
      }}
    >
      <Header />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          overflowY: "auto", // Only main content scrolls
          display: "flex",
          flexDirection: "column",
        }}
      >
        <VideoBlock />
        <Container
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box mt={8}>
            <AboutUs />
          </Box>
          <Box mt={8}>
            <Projects />
          </Box>
          <Box mt={8}>
            <Autoplay />
          </Box>
          <Box mt={8} mb={4}>
            <ContactUs />
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
