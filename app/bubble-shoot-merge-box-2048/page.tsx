import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { content } from "./content";

export const metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: {
    canonical: content.metadata.url,
  },
};

export default function Page() {
  // 将content调整为GamePageTemplate期望的结构
  const gameConfig = {
    metadata: content.metadata,
    content: content
  };
  
  return <GamePageTemplate gameConfig={gameConfig} />;
}
