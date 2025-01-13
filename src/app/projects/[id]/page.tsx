import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockProjects } from "@/data/mockProjects";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = mockProjects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <Link
        href="/projects"
        className="inline-flex items-center mb-4 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        案件一覧に戻る
      </Link>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <div className="grid gap-6">
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={project.type === "support" ? "destructive" : "default"}
          >
            {project.type === "support" ? "支援要請" : "支援提供"}
          </Badge>
          <Badge variant="outline">{project.category}</Badge>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">団体情報</h2>
          <p>{project.organization}</p>
          <p>{project.location}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">案件詳細</h2>
          <p className="whitespace-pre-wrap">{project.description}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">連絡先</h2>
          <p>Email: {project.contact}</p>
          <p>
            Webサイト:{" "}
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {project.website}
            </a>
          </p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">
            作成日: {project.createdAt}
          </p>
        </div>
        <div className="mt-4">
          <Button asChild>
            <Link href={`/projects/${params.id}/offer`}>支援を申し出る</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
