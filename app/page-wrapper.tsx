"use client"
import { motion, AnimatePresence } from 'framer-motion'

const PageWrapper = ({
    children,
    }: Readonly<{
    children: React.ReactNode;
}>) => {
  return (
      <>
        <AnimatePresence>
              <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{delay: 0.25}}
              >{children}</motion.div>
        </AnimatePresence>
      </>
  )
}

export default PageWrapper
