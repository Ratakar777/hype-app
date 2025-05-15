"use client";
import { HEADER_HEIGHT, links } from "@/constants";
import { AppBar, Box, Container, Grid, IconButton, Link } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar
      sx={{
        position: "fixed",
        top: 0,
        height: HEADER_HEIGHT,
        backgroundColor: "black",
      }}
    >
      <Container>
        <Grid
          height='100%'
          container
          alignItems='center'
          justifyContent='space-between'
        >
          <Grid>
            <Image
              src='data:image/png;base64,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'
              alt='logo'
              width={100}
              height={60}
              style={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid sx={{ display: { xs: "none", md: "block" } }}>
            <Grid container gap={3}>
              {links.map(({ src, label }) => (
                <Grid key={label}>
                  <Link href={src} target='_blank'>
                    {label}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <Menu size={32} color='white' />
            </IconButton>
          </Grid>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                key='mobileMenu'
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ type: "spring", damping: 20, stiffness: 200 }}
                className='fixed top-0 left-0 w-full h-full bg-black z-50 px-6'
              >
                <IconButton
                  onClick={() => setIsOpen(false)}
                  sx={{ position: "absolute", top: 16, right: 16 }}
                >
                  <X size={32} color='white' />
                </IconButton>
                <Grid container gap={3} flexDirection='column' px={4} mt={12}>
                  {links.map(({ src, label }) => (
                    <Grid key={label}>
                      <Link href={src} target='_blank'>
                        {label}
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            )}
          </AnimatePresence>
        </Grid>
      </Container>
    </AppBar>
  );
};
