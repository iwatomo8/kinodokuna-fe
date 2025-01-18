export default function TermsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 border-b pb-4">利用規約</h1>
      <div className="prose max-w-none leading-relaxed text-gray-700">
        <h2 className="text-2xl font-semibold mt-6">1. はじめに</h2>
        <p className="mb-4">
          この利用規約（以下、「本規約」といいます。）は、きのどくなー（以下、「当社」といいます。）がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. 利用登録</h2>
        <p className="mb-4">
          登録希望者が当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。
        </p>

        <h2 className="text-2xl font-semibold mt-6">3. ユーザーの責任</h2>
        <p className="mb-4">
          ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
        </p>

        {/* 他の条項を追加 */}

        <h2 className="text-2xl font-semibold mt-6">10. 規約の変更</h2>
        <p className="mb-4">
          当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
        </p>
      </div>
    </div>
  );
}
