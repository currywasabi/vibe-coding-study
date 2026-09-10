import profile from "@/data/profile.json";
import type { Profile } from "@/types/profile";

const data: Profile = profile;
const HOST = "guest@vibe-coding-study";

function Prompt({ cmd }: { cmd: string }) {
  return (
    <p className="text-sm sm:text-base">
      <span className="text-[var(--term-dim)]">{HOST}</span>
      <span className="text-[var(--term-fg)]">:~$ </span>
      <span>{cmd}</span>
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-16">
        <pre className="mb-8 text-[10px] leading-tight sm:text-xs overflow-x-auto">
{String.raw`+------------------------------------------+
| VIBE-CODING-STUDY TERMINAL  v1.0          |
| last login: ${new Date().getFullYear()}-01-01 on ttys000        |
+------------------------------------------+`}
        </pre>

        {/* 소개 */}
        <section className="mb-10">
          <Prompt cmd="whoami" />
          <p className="mt-1 text-2xl font-bold sm:text-3xl">{data.name}</p>
          <p className="mt-1 text-[var(--term-dim)]">{data.major}</p>

          <div className="mt-4">
            <Prompt cmd="cat about.txt" />
            <p className="mt-1 leading-relaxed">{data.intro}</p>
          </div>
        </section>

        {/* 프로젝트 */}
        <section className="mb-10">
          <Prompt cmd="ls -la ./projects" />
          <ul className="mt-2 space-y-3">
            {data.projects.map((project) => (
              <li key={project.title} className="border border-[var(--term-dim)] p-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="term-link flex flex-wrap items-baseline justify-between gap-2"
                >
                  <span>
                    <span className="text-[var(--term-amber)]">
                      [{project.status}]
                    </span>{" "}
                    {project.title}
                  </span>
                  <span className="text-[var(--term-dim)]">-&gt; {project.url}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* 관심사 & 취미 */}
        <section className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <Prompt cmd="cat interests.txt" />
            <ul className="mt-2 space-y-1">
              {data.interests.map((interest) => (
                <li key={interest}>&gt; {interest}</li>
              ))}
            </ul>
          </div>
          <div>
            <Prompt cmd="cat hobbies.txt" />
            <ul className="mt-2 space-y-1">
              {data.hobbies.map((hobby) => (
                <li key={hobby}>&gt; {hobby}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 링크 */}
        <section className="mb-10">
          <Prompt cmd="cat links.txt" />
          <ul className="mt-2 space-y-1">
            {data.links.map((link) => (
              <li key={link.label}>
                &gt;{" "}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="term-link"
                >
                  {link.label} ({link.url})
                </a>
              </li>
            ))}
          </ul>
        </section>

        <p className="blink-cursor">
          <span className="text-[var(--term-dim)]">{HOST}</span>
          <span>:~$ </span>
        </p>
      </div>
    </main>
  );
}
