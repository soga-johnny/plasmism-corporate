'use client'

export default function CompanyOverview() {
  return (
    <section className="w-full">
      <h2 className="text-4xl md:text-5xl font-thin mb-12">会社概要</h2>
      <div className="space-y-8 md:space-y-10">
        <div className="border-b border-white/10 pb-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[120px] text-white/60 font-thin text-lg md:text-base mb-2 md:mb-0">会社名</div>
            <div className="hidden md:block text-xl">：</div>
            <div className="md:ml-4 text-xl md:text-xl font-thin">Plasmism株式会社</div>
          </div>
        </div>
        
        <div className="border-b border-white/10 pb-6">
          <div className="flex flex-col md:flex-row md:items-start">
            <div className="w-full md:w-[120px] text-white/60 font-thin text-lg md:text-base mb-2 md:mb-0">所在地</div>
            <div className="hidden md:block text-xl">：</div>
            <div className="md:ml-4">
              <div className="text-xl md:text-xl font-thin">〒530-0001</div>
              <div className="text-xl md:text-xl font-thin mt-1">大阪府大阪市北区梅田1丁目2番2号 大阪駅前第2ビル12-12</div>
            </div>
          </div>
        </div>
        
        <div className="border-b border-white/10 pb-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[120px] text-white/60 font-thin text-lg md:text-base mb-2 md:mb-0">設立</div>
            <div className="hidden md:block text-xl">：</div>
            <div className="md:ml-4 text-xl md:text-xl font-thin">2024年7月</div>
          </div>
        </div>
        
        <div className="border-b border-white/10 pb-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[120px] text-white/60 font-thin text-lg md:text-base mb-2 md:mb-0">代表取締役</div>
            <div className="hidden md:block text-xl">：</div>
            <div className="md:ml-4 text-xl md:text-xl font-thin">曽我 星一</div>
          </div>
        </div>
        
        <div className="border-b border-white/10 pb-6">
          <div className="flex flex-col md:flex-row md:items-start">
            <div className="w-full md:w-[120px] text-white/60 font-thin text-lg md:text-base mb-2 md:mb-0">事業内容</div>
            <div className="hidden md:block text-xl">：</div>
            <div className="md:ml-4 text-xl md:text-xl font-thin">サービス/プロダクトの企画・設計・開発・運用</div>
          </div>
        </div>
      </div>
    </section>
  )
} 