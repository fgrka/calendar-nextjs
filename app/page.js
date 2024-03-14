"use client";
import Calendar from "./(components)/calendar";
import AppContextProvider from "./(context)/context";

export default function Home() {

  return (
    <AppContextProvider>
            <Calendar/>
    </AppContextProvider>
  );
}
