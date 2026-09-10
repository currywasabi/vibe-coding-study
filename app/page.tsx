import profile from "@/data/profile.json";
import type { Profile } from "@/types/profile";
import Clock from "@/components/Clock";

const data: Profile = profile;

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 유명한 XP 기본 배경화면 재현 */}
      <div className="xp-bliss" aria-hidden>
        <div className="xp-cloud xp-cloud-1" />
        <div className="xp-cloud xp-cloud-2" />
        <div className="xp-hill-back" />
        <div className="xp-hill-front" />
      </div>

      <div className="mx-auto max-w-[900px] px-4 pb-28 pt-9 sm:px-6">
        {/* 윈도우 프레임 (파란 테두리) */}
        <div
          className="rounded-t-[9px] rounded-b p-[3px] shadow-[0_18px_44px_rgba(0,20,60,0.45)]"
          style={{ background: "#0f5bb5" }}
        >
          {/* 타이틀 바 */}
          <div
            className="flex h-8 items-center gap-2 rounded-t-[7px] px-2 text-white"
            style={{
              background:
                "linear-gradient(180deg, #3f8ee6 0%, #1157ba 8%, #0b47a5 42%, #1a63c4 88%, #4a92e0 100%)",
            }}
          >
            <div
              className="h-3.5 w-3.5 flex-none rounded-sm"
              style={{
                background: "linear-gradient(#fff8c8, #e8c04a)",
                boxShadow: "0 0 0 1px rgba(0,0,0,.25)",
              }}
            />
            <span
              className="truncate text-[13px] font-bold"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,.6)" }}
            >
              박건우 — 소개.exe
            </span>
            <div className="ml-auto flex flex-none gap-1">
              {["_", "□", "✕"].map((s) => (
                <div
                  key={s}
                  className="flex h-[21px] w-[22px] items-center justify-center rounded-sm text-[11px] text-white"
                  style={{
                    background: "linear-gradient(#6ba7ea, #0e51ae)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,.5), 0 0 0 1px rgba(0,0,0,.25)",
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* 메뉴 바 */}
          <div
            className="flex gap-4 overflow-x-auto px-2.5 py-1 text-[11px] whitespace-nowrap"
            style={{
              background: "#ece9d8",
              borderBottom: "1px solid #c8c3ac",
              color: "#1a1a1a",
            }}
          >
            <span>파일</span>
            <span>편집</span>
            <span>보기</span>
            <span>즐겨찾기</span>
            <span>도구</span>
            <span>도움말</span>
          </div>

          {/* 주소 바 */}
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px]"
            style={{
              background: "#ece9d8",
              borderBottom: "1px solid #c8c3ac",
              color: "#333",
            }}
          >
            <span className="flex-none">주소</span>
            <div
              className="flex min-w-0 flex-1 items-center gap-1.5 border bg-white px-1.5 py-0.5"
              style={{ borderColor: "#7f9db9" }}
            >
              <div
                className="h-2.5 w-2.5 flex-none"
                style={{
                  background: "linear-gradient(#fff8c8, #e8c04a)",
                  boxShadow: "0 0 0 1px rgba(0,0,0,.3)",
                }}
              />
              <span className="truncate font-mono text-[11px] text-[#111]">
                내 컴퓨터\박건우\소개
              </span>
            </div>
            <span
              className="flex-none"
              style={{ color: "var(--xp-link)" }}
            >
              이동
            </span>
          </div>

          {/* 본문: 사이드바 + 콘텐츠 */}
          <div
            className="m-1.5 flex border bg-white"
            style={{ borderColor: "#7f9db9", borderTopColor: "#4d6a86" }}
          >
            {/* 사이드바 */}
            <div
              className="hidden w-[170px] flex-none flex-col gap-2.5 p-3 sm:flex"
              style={{ background: "linear-gradient(180deg, #7ba7e8, #5a8fd8)" }}
            >
              <div className="rounded bg-white p-2.5">
                <div
                  className="mb-1.5 text-[11px] font-bold"
                  style={{ color: "var(--xp-heading)" }}
                >
                  목차
                </div>
                <div className="flex flex-col gap-1 text-[11px]">
                  <a href="#intro">소개</a>
                  <a href="#projects">프로젝트</a>
                  <a href="#interests">관심사 · 취미</a>
                  <a href="#links">링크</a>
                </div>
              </div>
              <div className="rounded bg-white p-2.5">
                <div
                  className="mb-1.5 text-[11px] font-bold"
                  style={{ color: "var(--xp-heading)" }}
                >
                  내 정보
                </div>
                <div className="text-[11px] leading-relaxed" style={{ color: "#333" }}>
                  이름: {data.name}
                  <br />
                  학과: {data.major}
                  <br />
                  프로젝트: {data.projects.length}개
                </div>
              </div>
            </div>

            {/* 콘텐츠 */}
            <div className="min-w-0 flex-1 p-6 sm:p-8">
              {/* 소개 */}
              <section id="intro" className="mb-9">
                <span className="xp-section-header mb-3">소개</span>
                <h1
                  className="mt-3 text-3xl font-bold"
                  style={{ color: "var(--xp-heading)" }}
                >
                  {data.name}
                </h1>
                <p className="mt-1 text-sm" style={{ color: "var(--xp-muted)" }}>
                  {data.major}
                </p>
                <p className="mt-4 leading-relaxed">{data.intro}</p>
              </section>

              {/* 프로젝트 */}
              <section id="projects" className="mb-9">
                <span className="xp-section-header mb-3">진행한 프로젝트</span>
                <ul className="mt-3 space-y-3">
                  {data.projects.map((project) => (
                    <li
                      key={project.title}
                      className="rounded-sm border bg-[#f7f9fc] p-4 transition hover:bg-[#eef4fc]"
                      style={{ borderColor: "#b9c9dc" }}
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-wrap items-center justify-between gap-2 no-underline"
                      >
                        <span className="font-medium" style={{ color: "var(--xp-text)" }}>
                          {project.title}
                        </span>
                        <span
                          className="rounded-full border px-2.5 py-0.5 text-xs font-bold"
                          style={{
                            background: "var(--xp-tag-bg)",
                            borderColor: "var(--xp-tag-border)",
                            color: "var(--xp-link)",
                          }}
                        >
                          {project.status}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 관심사 & 취미 */}
              <section id="interests" className="mb-9 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <span className="xp-section-header mb-3">관심사</span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {data.interests.map((interest) => (
                      <span
                        key={interest}
                        className="rounded-full border px-3 py-1 text-xs font-bold"
                        style={{
                          background: "var(--xp-tag-bg)",
                          borderColor: "var(--xp-tag-border)",
                          color: "var(--xp-link)",
                        }}
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="xp-section-header mb-3">취미</span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {data.hobbies.map((hobby) => (
                      <span
                        key={hobby}
                        className="rounded-full border px-3 py-1 text-xs font-bold"
                        style={{
                          background: "var(--xp-green-bg)",
                          borderColor: "var(--xp-green-border)",
                          color: "var(--xp-green)",
                        }}
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* 링크 */}
              <section id="links">
                <span className="xp-section-header mb-3">링크</span>
                <ul className="mt-3 space-y-1.5">
                  {data.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {link.label} ({link.url})
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* 창 하단 정보 줄 */}
          <div
            className="flex justify-between px-2.5 pb-1 text-[11px]"
            style={{ color: "#f0f4ff" }}
          >
            <span>{data.projects.length}개 프로젝트</span>
            <span>내 컴퓨터</span>
          </div>
        </div>
      </div>

      {/* 작업 표시줄 */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 flex h-9 items-center gap-2.5 pr-2.5"
        style={{
          background:
            "linear-gradient(180deg, #3d92e8 0%, #1a5fbd 9%, #1055b4 42%, #2a74d4 92%, #5a9ee8 100%)",
          borderTop: "1px solid #6fa9ea",
          boxShadow: "0 -2px 8px rgba(0,0,0,.3)",
        }}
      >
        <div
          className="flex h-full flex-none items-center gap-1.5 rounded-r-xl py-0 pr-5 pl-3 text-[15px] font-bold italic text-white"
          style={{
            background:
              "linear-gradient(180deg, #6ec24a 0%, #4f9c22 45%, #3c7f18 100%)",
            textShadow: "1px 1px 2px rgba(0,0,0,.5)",
          }}
        >
          <div
            className="h-4 w-4 flex-none rounded-full"
            style={{
              background:
                "radial-gradient(circle at 32% 30%, #fff, #cfe6ff 60%, #8fb8e8)",
            }}
          />
          start
        </div>
        <div
          className="flex h-6 max-w-[160px] flex-none items-center gap-1.5 rounded px-3 text-[11px] text-white"
          style={{
            background: "linear-gradient(180deg, #2f7fdd, #12509f)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,.35)",
          }}
        >
          <div
            className="h-2.5 w-2.5 flex-none rounded-sm"
            style={{ background: "linear-gradient(#fff8c8, #e8c04a)" }}
          />
          <span className="truncate">박건우 — 소개.exe</span>
        </div>
        <div
          className="ml-auto flex h-6 flex-none items-center border-l px-2 text-[11px] text-white"
          style={{ borderColor: "rgba(255,255,255,.28)" }}
        >
          <Clock />
        </div>
      </div>
    </main>
  );
}
