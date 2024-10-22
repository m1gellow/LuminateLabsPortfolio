"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import Button from "./Button";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <div className="flex justify-end gap-4 ">
        <Button onClick={() => setTheme("light")}>
          <Sun />
        </Button>
        <Button onClick={() => setTheme("dark")}>
          <Moon />
        </Button>
        <Button onClick={() => setTheme("system")}>System</Button>
      </div>
    </>
  );
}
