export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <header className="bg-white shadow p-6 rounded-2xl mb-6">
        <img src="/logo.png" alt="Logo" className="mx-auto w-24 h-24 mb-4" />
        <h1 className="text-4xl font-bold text-center mb-2">أنيما ويب للقنوات</h1>
        <p className="text-center text-lg">أفضل خدمات IPTV بجودة عالية وأسعار منافسة</p>
      </header>

      <section className="bg-white p-6 rounded-2xl shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">من نحن</h2>
        <p>
          أنيما ويب هي منصتك الموثوقة لمشاهدة القنوات العالمية والعربية عبر الإنترنت. نقدم خدمات IPTV عالية الجودة، بث مستقر بدون تقطيع، دعم فني متواصل، وأسعار مناسبة للجميع.
        </p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">خدماتنا</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>اشتراكات IPTV بجودة FHD و 4K</li>
          <li>سيرفرات مستقرة وسريعة</li>
          <li>دعم فني عبر واتساب والتليجرام</li>
          <li>تجربة مجانية عند الطلب</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">الأسعار</h2>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="border p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2">1 شهر</h3>
            <p className="text-2xl font-semibold">5$</p>
          </div>
          <div className="border p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2">3 شهور</h3>
            <p className="text-2xl font-semibold">12$</p>
          </div>
          <div className="border p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2">12 شهر</h3>
            <p className="text-2xl font-semibold">25$</p>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">الأسئلة الشائعة</h2>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">هل تعمل الخدمة على جميع الأجهزة؟</h4>
            <p>نعم، تعمل على جميع الأجهزة مثل الهواتف، الشاشات الذكية، الكمبيوتر، وأجهزة TV Box.</p>
          </div>
          <div>
            <h4 className="font-bold">هل يوجد تجربة مجانية؟</h4>
            <p>نعم، يمكن طلب تجربة مجانية لمدة 24 ساعة.</p>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">تواصل معنا</h2>
        <p className="text-center">للطلب أو الاستفسار، تواصل معنا عبر:</p>
        <div className="text-center mt-4 space-y-2">
          <p>🌐 <a href="https://animaweb.net/iptv-best-service/" className="text-blue-600 underline">موقعنا الرسمي</a></p>
          <p>📱 واتساب: +90 XXX XXX XXXX</p>
          <p>📧 البريد الإلكتروني: support@animaweb.net</p>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-6">
        &copy; 2025 أنيما ويب - جميع الحقوق محفوظة
      </footer>
    </main>
  );
}
