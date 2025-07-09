export default function Download() {
    return (
      <section id="download" class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-200">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-slate-900">
            Get Started with Spooners TUI
          </h2>
          <p class="mt-4 text-lg text-slate-700">
            Spooners Security TUI is a GoLang application, easy to install and run.
          </p>
          
          <div class="mt-10 bg-slate-800 text-white rounded-lg p-6 shadow-xl">
            <h3 class="text-xl font-bold mb-4 text-orange-400">Prerequisites</h3>
            <p class="text-sm text-slate-300 mb-4">
              Ensure you have{" "}
              <a 
                href="https://go.dev/doc/install" 
                target="_blank" 
                rel="noopener noreferrer"
                class="underline text-sky-400 hover:text-sky-300 transition-colors"
              >
                GoLang (1.22+)
              </a>{" "}
              installed on your system.
            </p>
            
            <h3 class="text-xl font-bold mb-4 text-orange-400">
              Installation (Go `go install`)
            </h3>
            <p class="text-sm text-slate-300 mb-4">
              The simplest way to get the Spooners TUI is via `go install`. 
              This command will download, compile, and install the latest version of the tool.
            </p>
            
            <div class="bg-slate-900 rounded-md p-4 text-left font-mono text-green-300 text-sm overflow-x-auto">
              <pre><code>go install github.com/spooners/security-tui@latest</code></pre>
            </div>
            
            <p class="text-xs text-slate-400 mt-2">
              This command will place the executable in your GOBIN directory 
              (usually `$GOPATH/bin` or `$HOME/go/bin`). Ensure this directory is in your system's PATH.
            </p>
  
            <h3 class="text-xl font-bold mt-8 mb-4 text-orange-400">
              Running the TUI
            </h3>
            <p class="text-sm text-slate-300 mb-4">
              Once installed, simply open your terminal and run the command.
            </p>
            
            <div class="bg-slate-900 rounded-md p-4 text-left font-mono text-green-300 text-sm overflow-x-auto">
              <pre><code>spooners-tui</code></pre>
            </div>
            
            <p class="text-xs text-slate-400 mt-2">
              Refer to the tool's built-in help (`spooners-tui --help`) for more options.
            </p>
          </div>
          
          <div class="mt-8 text-center">
            <p class="text-base text-slate-700">
              Want to explore the project's technical roadmap or contribute?
            </p>
            <a 
              href="/project-hub" 
              class="inline-block mt-4 text-orange-700 border-b-2 border-orange-700 pb-1 hover:text-orange-600 hover:border-orange-600 transition-colors"
            >
              Visit the Project Hub
            </a>
          </div>
        </div>
      </section>
    );
  }