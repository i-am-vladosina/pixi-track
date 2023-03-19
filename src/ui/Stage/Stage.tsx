import React, { useEffect, useRef } from "react";
import { Application } from "src/Application/Application";
import "./Stage.scss";

export function Stage() {
  const containerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (containerRef.current) {
      const app = new Application(containerRef.current);
      return () => app.destroy();
    }
  }, []);

  return <div ref={containerRef} className="stage"></div>;
}
