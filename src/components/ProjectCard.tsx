import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/types/project";
import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="line-clamp-1">{project.title}</CardTitle>
        <CardDescription className="line-clamp-1">
          {project.organization}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
          {project.description}
        </p>
        <div className="flex gap-2">
          <Badge
            variant={project.type === "support" ? "destructive" : "default"}
          >
            {project.type === "support" ? "支援要請" : "支援提供"}
          </Badge>
          <Badge variant="outline">{project.category}</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-sm text-muted-foreground">
          作成日: {project.createdAt}
        </p>
        <Button variant="outline" asChild>
          <Link href={`/projects/${project.id}`}>詳細を見る</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
