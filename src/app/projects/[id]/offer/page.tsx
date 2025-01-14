import { SupportOfferForm } from "@/components/SupportOfferForm";
import { mockProjects } from "@/data/mockProjects";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

export default async function SupportOfferPage({ params }: { params: Params }) {
  const { id } = await params;
  const project = mockProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <Link
        href={`/projects/${id}`}
        className="inline-flex items-center mb-4 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        案件詳細に戻る
      </Link>
      <h1 className="text-3xl font-bold mb-4">支援を申し出る</h1>
      <p className="mb-6">案件: {project.title}</p>
      <div className="max-w-2xl">
        <SupportOfferForm projectId={id} />
      </div>
    </div>
  );
}
