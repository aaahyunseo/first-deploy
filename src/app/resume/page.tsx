import Link from "next/link";
import generalInfo from "@/service/resume_general_info_service.json";
import portfolio from "@/service/resume_portfolio_service.json";

export default function ResumePage() {
  return (
    <main className="font-sans min-h-screen p-10 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-center">Resume</h1>

        {/* General Info */}
        <section className="mb-8 p-6 bg-white shadow rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            👤 기본정보
          </h2>
          <p className="mb-2">
            <strong>이름:</strong> {generalInfo.name}
          </p>
          <p className="mb-2">
            <strong>GitHub:</strong>{" "}
            <a
              href={generalInfo.git_url}
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800"
            >
              {generalInfo.git_url}
            </a>
          </p>
          <p>
            <strong>소개:</strong> {generalInfo.introduction}
          </p>
        </section>

        {/* Portfolio */}
        <section className="p-6 bg-white shadow rounded-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            💻 포트폴리오
          </h2>
          <p className="mb-2">
            <strong>프로젝트명:</strong> {portfolio.project_name}
          </p>
          <p className="mb-2">
            <strong>소개:</strong> {portfolio.project_introduction}
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href={portfolio.project_github_url}
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800"
            >
              {portfolio.project_github_url}
            </a>
          </p>
        </section>

        {/* 🔘 메인으로 돌아가기 버튼 */}
        <div className="text-center">
          <Link
            href="/"
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            ⬅ 메인으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
}
