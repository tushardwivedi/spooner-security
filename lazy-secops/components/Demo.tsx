/** @jsxImportSource preact */

export default function Demo() {
  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Experience the Power of TUI
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Imagine your entire security workflow, responsive and efficient, right in your terminal. 
          Spooners TUI offers a clean, multi-pane layout for unparalleled control.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto terminal-window">
        {/* Terminal Header */}
        <div className="terminal-header flex justify-between items-center px-4 py-2 bg-slate-800 text-white rounded-t">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm">spooners-tui - bash</span>
          <span className="text-xs text-slate-400">⌘+W</span>
        </div>

        {/* Terminal Content */}
        <div className="terminal-content bg-slate-900 text-slate-500 font-mono p-4 rounded-b overflow-auto text-sm">
          <div className="whitespace-pre-wrap">
            <div>┌────────────────────┬────────────────────┬────────────────────┐</div>
            <div>│ Vulnerabilities    │ Audit Checklist    │ Threat Feed        │</div>
            <div>├────────────────────┼────────────────────┼────────────────────┤</div>
            <div>│ (HIGH) CVE-2024-1234 │ [ ] GDPR Art. 32   │ CISA Alert 2024-06-18 │</div>
            <div>│      - Description...│      - Data Enc... │   - New Ransomware...│</div>
            <div>│ (MED) Lynis: Insecure│ [x] ISO 27001      │ CVE-2024-5678 (Nmap) │</div>
            <div>│      - Remediation...│      - Anti-Malw...│   - Critical Port... │</div>
            <div>│ (LOW) Nmap: Open Port│ [ ] Internal: SAST │ Security Blog: Best  │</div>
            <div>│      - Port 8080...  │      - CI/CD...    │   - Practices...     │</div>
            <div>└────────────────────┴────────────────────┴────────────────────┘</div>
            <div>Status: Scanning network (1/10 hosts)...</div>
            <div>Press 's' to Scan, 'a' for Audit, 'q' to Quit.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
