import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StatsProps = {
  totalProjects: number;
  totalSupport: number;
  activeProjects: number;
  completedProjects: number;
};

export function SupportStats({
  totalProjects,
  totalSupport,
  activeProjects,
  completedProjects,
}: StatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">総案件数</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalProjects}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">累計支援額</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {totalSupport.toLocaleString()}円
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">進行中の案件</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{activeProjects}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">完了した案件</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{completedProjects}</div>
        </CardContent>
      </Card>
    </div>
  );
}
