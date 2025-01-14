"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFilters } from "@/components/ProjectFilters";
import { mockProjects } from "@/data/mockProjects";
import { useEffect, useState } from "react";

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
