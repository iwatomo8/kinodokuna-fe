"use client";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFilters } from "@/components/ProjectFilters";
import type { Project } from "@/types/project";
import { useEffect, useState } from "react";

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
  {
    id: "3",
    title: "高齢者向けデジタルリテラシー教室",
    organization: "シニアITサポート協会",
    description:
      "高齢者向けにスマートフォンやタブレットの使い方を教える教室の開催を支援します。",
    type: "offer",
    category: "高齢者支援",
    createdAt: "2024-01-15",
  },
  {
    id: "4",
    title: "フードバンク活動への食品寄付",
    organization: "フードシェア株式会社",
    description:
      "賞味期限が近い食品や規格外の食品を、フードバンク活動を行う団体へ寄付いたします。",
    type: "offer",
    category: "食品支援",
    createdAt: "2024-01-18",
  },
  // 他の案件をここに追加...
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(mockProjects);

  const categories = Array.from(
    new Set(mockProjects.map((project) => project.category)),
  );

  useEffect(() => {
    const filtered = mockProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "" || project.category === selectedCategory),
    );
    setFilteredProjects(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">案件一覧</h1>
      <ProjectFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
