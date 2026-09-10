import profile from "@/data/profile.json";
import type { Profile } from "@/types/profile";

const data: Profile = profile;

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        {/* 소개 */}
        <section>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {data.name}
          </h1>
          <p className="mt-1 text-sm text-gray-500">{data.major}</p>
          <p className="mt-6 text-base leading-relaxed text-gray-700">
            {data.intro}
          </p>
        </section>

        {/* 프로젝트 */}
        <section className="mt-14">
          <h2 className="text-lg font-semibold text-gray-900">
            진행한 프로젝트
          </h2>
          <ul className="mt-4 space-y-3">
            {data.projects.map((project) => (
              <li
                key={project.title}
                className="rounded-lg border border-gray-200 p-4 transition hover:border-gray-300"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-wrap items-center justify-between gap-2"
                >
                  <span className="font-medium text-gray-900">
                    {project.title}
                  </span>
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                    {project.status}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* 관심사 & 취미 */}
        <section className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">관심사</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {data.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">취미</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {data.hobbies.map((hobby) => (
                <span
                  key={hobby}
                  className="rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 링크 */}
        <section className="mt-14">
          <h2 className="text-lg font-semibold text-gray-900">링크</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {data.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
