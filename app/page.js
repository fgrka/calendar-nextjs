"use client";
import Calendar from "./(components)/calendar";
import Sidebar from "./(components)/sidebar";
import DayView from "./(components)/dayView";
import styles from "./page.module.css";
import { Container } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [isDayOpen, setIsDayOpen ] = useState(false);

  const handleVievChange = () => {    //prop drilling?
      setIsDayOpen((prev) => !prev);
  }


  return (
    <main className={styles.main}>
      <Container sx={{ display:"flex", flexDirection:"row"}} disableGutters> 
            <Sidebar/>
            {isDayOpen ? <DayView onReturn={handleVievChange}/> : <Calendar handleClick={handleVievChange}/>}
      </Container>
    </main>
  );
}
