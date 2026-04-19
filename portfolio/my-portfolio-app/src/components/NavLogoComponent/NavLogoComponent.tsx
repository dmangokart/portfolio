"use client";
import React, { useState, useEffect, useCallback } from "react";
import { NavLogoFlippingBoard } from "@/components/ui/navlogoflippingboardUI";
import "./NavLogoComponent.css";

const MESSAGES: string[] = [
  "Hi, I'm Dev",
  "Dev the Developer",
  "Software Engineer",

];

export default function TextFlippingBoardHero() {
  const [msgIdx, setMsgIdx] = useState(0);

  const next = useCallback(
    () => setMsgIdx((i) => (i + 1) % MESSAGES.length),
    [],
  );

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="nav-logo-wrapper">
      <NavLogoFlippingBoard text={MESSAGES[msgIdx]} duration={0.5} />
    </div>
  );
}
