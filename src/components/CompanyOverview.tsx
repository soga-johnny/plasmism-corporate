'use client'

export default function CompanyOverview() {
  return (
    <section className="w-full">
      <h2 className="text-2xl md:text-4xl mb-12">会社概要</h2>
      <div className="space-y-4 md:space-y-8">
        <div className="border-b border-[var(--foreground)]/10 pb-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[120px] text-[var(--foreground)]/60 text-base md:text-base mb-2 md:mb-0">会社名</div>
            <div className="hidden md:block text-base">：</div>
            <div className="md:ml-4 text-base md:text-xl">Plasmism株式会社</div>
          </div>
        </div>
        
        <div className="border-b border-[var(--foreground)]/10 pb-6">
          <div className="flex flex-col md:flex-row md:items-start">
            <div className="w-full md:w-[120px] text-[var(--foreground)]/60 text-base md:text-base mb-2 md:mb-0">所在地</div>
            <div className="hidden md:block text-base">：</div>
            <div className="md:ml-4">
              <div className="text-base md:text-xl">〒530-0001</div>
              <div className="text-base md:text-xl mt-1">大阪府大阪市北区梅田1丁目2番2号 大阪駅前第2ビル12-12</div>
            </div>
          </div>
        </div>
        
        <div className="border-b border-[var(--foreground)]/10 pb-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[120px] text-[var(--foreground)]/60 text-base md:text-base mb-2 md:mb-0">設立</div>
            <div className="hidden md:block text-base">：</div>
            <div className="md:ml-4 text-base md:text-xl">2024年7月</div>
          </div>
        </div>
        
        <div className="border-b border-[var(--foreground)]/10 pb-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[120px] text-[var(--foreground)]/60 text-base md:text-base mb-2 md:mb-0">代表取締役</div>
            <div className="hidden md:block text-base">：</div>
            <div className="md:ml-4 text-base md:text-xl">曽我 星一</div>
          </div>
        </div>
        
        <div className="border-b border-[var(--foreground)]/10 pb-6">
          <div className="flex flex-col md:flex-row md:items-start">
            <div className="w-full md:w-[120px] text-[var(--foreground)]/60 text-base md:text-base mb-2 md:mb-0">事業内容</div>
            <div className="hidden md:block text-base">：</div>
            <div className="md:ml-4 text-base md:text-xl">サービス/プロダクトの企画・設計・開発・運用</div>
          </div>
        </div>
      </div>
    </section>
  )
} 