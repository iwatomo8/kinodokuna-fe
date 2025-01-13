import type { Project } from "@/types/project";

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "子ども食堂の運営支援",
    organization: "NPO法人 子ども支援センター",
    description:
      "地域の子どもたちに無料で食事を提供する子ども食堂の運営をサポートしていただける団体を探しています。子ども食堂は、子どもの貧困対策や地域コミュニティの形成に重要な役割を果たしています。私たちは、食材の提供、調理ボランティア、会場の提供など、様々な形での支援を必要としています。",
    type: "support",
    category: "子ども・教育",
    createdAt: "2024-01-10",
    contact: "support@kodomo-shien.org",
    website: "https://kodomo-shien.org",
    location: "東京都新宿区",
  },
  {
    id: "2",
    title: "IT機器寄贈プログラム",
    organization: "株式会社テックサポート",
    description:
      "使用済みのパソコンやタブレットを整備し、必要としている教育機関や福祉施設に寄贈いたします。デジタルデバイドの解消と、環境負荷の軽減を目指すこのプログラムでは、企業や個人から不要になったIT機器を回収し、専門技術者がデータの完全消去とOSの再インストールを行います。その後、教育支援や高齢者支援を行う非営利団体に無償で提供します。",
    type: "offer",
    category: "IT・技術",
    createdAt: "2024-01-12",
    contact: "donate@techsupport.co.jp",
    website: "https://techsupport.co.jp/donate",
    location: "大阪府大阪市",
  },
  {
    id: "3",
    title: "高齢者向けデジタルリテラシー教室",
    organization: "シニアITサポート協会",
    description:
      "高齢者向けにスマートフォンやタブレットの使い方を教える教室の開催を支援します。デジタル技術の進歩により、高齢者が社会から取り残されることのないよう、基本的なスマートフォンの操作方法やインターネットの安全な利用方法などを丁寧に指導します。ボランティア講師や会場の提供、教材の寄付など、様々な形での支援を募集しています。",
    type: "offer",
    category: "高齢者支援",
    createdAt: "2024-01-15",
    contact: "info@senior-it-support.org",
    website: "https://senior-it-support.org",
    location: "福岡県福岡市",
  },
  {
    id: "4",
    title: "フードバンク活動への食品寄付",
    organization: "フードシェア株式会社",
    description:
      "賞味期限が近い食品や規格外の食品を、フードバンク活動を行う団体へ寄付いたします。食品ロスの削減と、食料支援を必要とする人々への助けを同時に実現するこの取り組みでは、小売店や食品メーカーから提供された食品を、適切に管理・配布するフードバンク団体と連携しています。定期的な食品の寄付や、配送のサポートなど、様々な形での参加を歓迎しています。",
    type: "offer",
    category: "食品支援",
    createdAt: "2024-01-18",
    contact: "donate@foodshare.co.jp",
    website: "https://foodshare.co.jp/foodbank",
    location: "神奈川県横浜市",
  },
];
