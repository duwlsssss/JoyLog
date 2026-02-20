import { Card } from '@components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl py-10">
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
        </TabsList>

        <TabsContent value="posts">
          <Card className="p-4">준비된 게시글이 없습니다.</Card>
        </TabsContent>

        <TabsContent value="resume">
          <Card className="p-4">이력서 내용</Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
