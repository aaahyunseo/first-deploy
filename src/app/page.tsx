import Image from "next/image";

type Project = {
  project_name: string;
  project_introduction: string;
  project_period: string;
  project_github: string;
};

async function getGeneralInfo() {
  const res = await fetch(
    "https://raw.githubusercontent.com/aaahyunseo/first-deploy/refs/heads/0.3/resume-improvement/src/service/resume_general_info_service.json",
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch general info");
  return res.json();
}

async function getPortfolio(): Promise<Project[]> {
  const res = await fetch(
    "https://raw.githubusercontent.com/aaahyunseo/first-deploy/refs/heads/0.3/resume-improvement/src/service/resume_portfolio_service.json",
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch portfolio info");
  return res.json();
}

export default async function Home() {
  const generalInfo = await getGeneralInfo();
  const portfolio = await getPortfolio();

  return (
    <main className="font-sans min-h-screen p-10 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">RESUME</h1>
        </header>

        {/* Profile Section */}
        <section className="mb-12 flex flex-col sm:flex-row items-center gap-8">
          <div className="w-45 h-45 relative rounded-full overflow-hidden shadow-md">
            <Image
              src="/IMG_7876.jpg"
              alt="Profile"
              fill
              className="object-cover"/>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{generalInfo.name}</h2>
            <p className="text-gray-700 mb-4">{generalInfo.introduction}</p>
            <p className="text-gray-700 mb-2">
              <strong>Email</strong> : <span className="font-medium">{generalInfo.email}</span>
            </p>
            <p className="text-gray-700 mb-2">
              <strong>GitHub</strong> : <a href={generalInfo.github} className="font-medium">{generalInfo.github}</a>
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Blog</strong> : <a href={generalInfo.blog} className="font-medium">{generalInfo.blog}</a>
            </p>
          </div>
        </section>

        {/* About Me Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">👩🏻‍💻 About Me</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>RESTful</strong> 하고 유지보수가 쉬운 SW를 개발하고 싶어요.</li>
              <li><strong>사용자 피드백</strong>을 적극적으로 반영하는 개발을 하고 싶어요.</li>
              <li>새로운 기술에 <strong>도전</strong>하고 항상 <strong>성장</strong>하려고 노력해요.</li>
            </ul>
          </div>
        </section>

        {/* Educations Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">📖 Educations</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>{generalInfo.major}</strong> (2022.03 ~ 2026.02)
              </li>
            </ul>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">💼 Portfolio</h2>

          <div className="space-y-6">
            {portfolio.map((project, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.project_name}</h3>
                <p className="text-gray-700 mb-4">{project.project_introduction}</p>
                <p className="text-gray-700 mb-4">{project.project_period}</p>
                <a
                  href={project.project_github}
                  target="_blank"
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                  📂 GitHub Repository
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}