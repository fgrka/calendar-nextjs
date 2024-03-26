"use client";
import React from "react";
import Calendar from "./(components)/Calendar";
import AppContextProvider from "./(context)/context";

export default function Home() {

  return (
    <AppContextProvider>
            <Calendar/>
    </AppContextProvider>
  );
}
