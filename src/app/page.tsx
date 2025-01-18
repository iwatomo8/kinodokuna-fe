import { ProjectCard } from "@/components/ProjectCard";
import { SupportStats } from "@/components/SupportStats";
import { Button } from "@/components/ui/button";
import { mockProjects } from "@/data/mockProjects";
import Link from "next/link";

// この部分は実際のアプリケーションでは、APIやデータベースから取得することになります
const mockStats = {
  totalProjects: 150,
  totalSupport: 15000000,
  activeProjects: 45,
  completedProjects: 105,
};

export default function Home() {
  const recentProjects = mockProjects.slice(0, 3); // 最新の3件を表示

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        支援マッチングプラットフォーム
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">累積支援状況</h2>
        <SupportStats {...mockStats} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">最近の支援案件</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button asChild>
            <Link href="/projects">すべての案件を見る</Link>
          </Button>
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          プラットフォームについて
        </h2>
        <p className="mb-4">
          当プラットフォームは、支援を必要とする団体と支援を提供できる団体をつなぐことを目的としています。
          様々な分野での支援案件を掲載し、効果的なマッチングを実現します。
        </p>
        <p className="mb-4">
          支援を求める方も、支援を提供したい方も、ぜひご参加ください。
          一緒に、より良い社会づくりに貢献しましょう。
        </p>
        <Button asChild>
          <Link href="/projects">案件を探す</Link>
        </Button>
      </section>
    </div>
  );
}
