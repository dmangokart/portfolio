"use client";
import React, { useState, useEffect, useCallback } from "react";
import { TextFlippingBoard } from "@/components/ui/textflippingboardUI";
import "./TextFlippingBoardComponent.css";

const MESSAGES: string[] = [
  "Hi, Im Dev",
  "I'm a developer",
];

export default function TextFlippingBoardHero() {
  const [msgIdx, setMsgIdx] = useState(0);

  const next = useCallback(
    () => setMsgIdx((i) => (i + 1) % MESSAGES.length),
    [],
  );

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="text-flipping-board-wrapper">
      <TextFlippingBoard text={MESSAGES[msgIdx]} duration={0.5} />
    </div>
  );
}
