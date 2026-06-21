import React from "react";

export function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0"
      style={{
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid #1f1f1f',
        padding: '24px 40px',
      }}
    >
      <span style={{ color: '#fff', fontWeight: 700, fontSize: '16px' }}>Rankly</span>
      <span style={{ color: '#888', fontSize: '13px' }}>© 2026 Aayush Lamichhane. All rights reserved.</span>
      <a href="https://github.com" style={{ color: '#888' }}>GitHub</a>
    </footer>
  );
}
