'use client'
import React from "react";
import { ThemeProvider } from "next-themes";

interface Props{
    children: React.ReactNode
}

export const Provider = ({ children }: Props) => {
    return <ThemeProvider attribute="class" defaultTheme='dark'>{ children}</ThemeProvider>
}