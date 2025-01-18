import type { Project } from "@/types/project";

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "子ども食堂の運営支援",
    organization: "NPO法人 子ども支援センター",
    description:
      "地域の子どもたちに無料で食事を提供する子ども食堂の運営をサポートしていただける団体を探しています。子ども食堂は、子どもの貧困対策や地域コミュニティの形成に重要な役割を果たしています。私たちは、食材の提供、調理ボランティア、会場の提供など、様々な形での支援を必要としています。",
    category: "子ども・教育",
    createdAt: "2024-01-10",
    contact: "support@kodomo-shien.org",
    website: "https://kodomo-shien.org",
    location: "東京都新宿区",
  },
  {
    id: "2",
    title: "ホームレス支援のための食事提供活動",
    organization: "NPO法人 未来の希望",
    description:
      "ホームレスの方々に温かい食事を提供する支援活動を行っています。ボランティア活動や食品の提供、会場の提供など、皆さまのご協力を必要としています。地域社会の一員として、支援を必要とする方々に手を差し伸べていただける方々をお待ちしています。",
    category: "福祉・地域支援",
    createdAt: "2024-01-12",
    contact: "info@mirai-kibou.org",
    website: "https://mirai-kibou.org",
    location: "東京都渋谷区",
  },
  {
    id: "3",
    title: "障害者支援施設の改修費用支援",
    organization: "NPO法人 障害者福祉協会",
    description:
      "障害者支援施設の施設改善のために支援を募っています。特に、バリアフリー化のための改修工事が必要です。この施設では、日常的に障害を持つ方々への生活支援や職業訓練を行っています。支援者の皆様のご協力により、より多くの方々が快適に利用できる施設に生まれ変わることを目指しています。",
    category: "福祉・障害者支援",
    createdAt: "2024-01-14",
    contact: "support@shougaisya-fukushi.org",
    website: "https://shougaisya-fukushi.org",
    location: "神奈川県横浜市",
  },
  {
    id: "4",
    title: "環境保護活動のための資金支援",
    organization: "グリーン未来財団",
    description:
      "環境保護活動を推進するための資金支援をお願いしています。この活動は、自然保護区の設立や森林再生プロジェクトに向けたものです。今後、地球温暖化や生物多様性の損失に対応するための具体的な取り組みを行っていく予定です。皆様の支援により、持続可能な環境を守るための活動が展開されます。",
    category: "環境保護",
    createdAt: "2024-01-16",
    contact: "contact@green-mirai.org",
    website: "https://green-mirai.org",
    location: "東京都港区",
  },
];
