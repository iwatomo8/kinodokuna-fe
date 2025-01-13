import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/types/project";

// この部分は実際のアプリケーションでは、APIやデータベースから取得することになります
const mockProjects: Project[] = [
  {
    id: "1",
    title: "子ども食堂の運営支援",
    organization: "NPO法人 子ども支援センター",
    description:
      "地域の子どもたちに無料で食事を提供する子ども食堂の運営をサポートしていただける団体を探しています。",
    type: "support",
    category: "子ども・教育",
    createdAt: "2024-01-10",
  },
  {
    id: "2",
    title: "IT機器寄贈プログラム",
    organization: "株式会社テックサポート",
    description:
      "使用済みのパソコンやタブレットを整備し、必要としている教育機関や福祉施設に寄贈いたします。",
    type: "offer",
    category: "IT・技術",
    createdAt: "2024-01-12",
  },
  // 他の案件をここに追加...
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">案件一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
