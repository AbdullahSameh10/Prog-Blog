// I used ChatGPT to solve a tiny problem with the coming html code 
// as i wanted to edit in it by delete something and add something but it didn't work 
// so i got help from ChatGPT 😅

import { useEffect, useRef } from "react";
import styles from "@Components/Styles/BlogContent.module.css";

export default function Blog({ html }: { html: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const enhanceCodeBlocks = () => {
      container
        .querySelectorAll(".highlight__panel")
        .forEach((el) => el.remove());

      container
        .querySelectorAll(".highlight.js-code-highlight pre")
        .forEach((block) => {          
          if (block.querySelector(".copy-btn")) return;

          const code = block.querySelector("pre code");
          if (!code) return;

          const span = document.createElement("span");
          span.className = "code-lang";
          span.textContent = block.classList[1];

          const button = document.createElement("button");
          button.className = "copy-btn";
          button.textContent = "📋";
          button.title = "Copy";

          button.onclick = async () => {
            await navigator.clipboard.writeText(code.textContent || "");
            button.textContent = "Copied ✓";
            setTimeout(() => (button.textContent = "📋"), 1500);
          };
          block.parentElement?.prepend(span);
          block.appendChild(button);
        });
    };

    enhanceCodeBlocks();

    const observer = new MutationObserver(enhanceCodeBlocks);
    observer.observe(container, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [html]);

  return (
    <div
      ref={containerRef}
      className={styles.blog}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
