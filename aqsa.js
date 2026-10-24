/* ===== جناح المسجد الأقصى المبارك ===== */
(function () {
  'use strict';
  var FP = function (n) { return 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(n) + '?width=1200'; };
  var API = 'https://commons.wikimedia.org/w/api.php';

  // صور محلية: ضع صورك في images/aqsa/ وأضفها هنا لتظهر أولًا {tab:'out', src:'images/aqsa/1.jpg', cap:'...'}
  var LOCAL = [];

  var TABS = [
    { id: 'out', t: 'من الخارج', q: ['Al-Aqsa Mosque facade', 'Al-Qibli Mosque exterior Jerusalem'], ok: /aqsa|qibli/i, no: /interior|inside|mihrab|minbar|aerial|dome of the rock/i,
      fb: ['Jerusalem Al-Aqsa Mosque BW 2010-09-21 06-38-12.JPG', 'Al-Aqsa Mosque (Temple Mount, Jerusalem, 2007) 01.jpg', 'Al-Aqsa Mosque by David Shankbone.jpg'] },
    { id: 'in', t: 'من الداخل', q: ['Al-Aqsa Mosque interior', 'Al-Aqsa mihrab minbar', 'Dome of the Rock interior'], ok: /interior|inside|mihrab|minbar|carpet|nave|ceiling/i, no: /$^/, fb: ['Aqsa3.jpg'] },
    { id: 'air', t: 'من فوق', q: ['Temple Mount aerial view', 'Al-Aqsa aerial', 'Jerusalem Old City aerial Dome of the Rock'], ok: /aerial|drone|above|bird/i, no: /$^/, fb: ['Jerusalem 2013(2) Aerial Temple Mount Al Aqsa Mosque (east exposure).jpg'] },
    { id: 'dome', t: 'قبة الصخرة', q: ['Dome of the Rock', 'Dome of the Rock exterior tiles'], ok: /dome of the rock|qubbat|sakhra/i, no: /interior/i, fb: ['-Dome of the Rock, Jerusalem- MET DP320070.jpg'] },
    { id: 'east', t: 'من الشرق (جبل الزيتون)', q: ['Temple Mount from Mount of Olives', 'Jerusalem panorama Mount of Olives Dome of the Rock'], ok: /olives|panorama|view/i, no: /$^/, fb: [] },
    { id: 'gate', t: 'الأبواب والمآذن', q: ['Golden Gate Jerusalem Temple Mount', 'Bab al-Silsila minaret Jerusalem', 'Mercy Gate Bab al-Rahma Jerusalem', 'Bab al-Maghariba Jerusalem'], ok: /gate|bab|minaret|silsila|maghari|rahma|mercy/i, no: /$^/, fb: [] },
    { id: 'det', t: 'زخارف وتفاصيل', q: ['Dome of the Rock Arabic inscription', 'Dome of the Rock tiles detail', 'Al-Aqsa dome ceiling'], ok: /inscription|tile|detail|ceiling|calligraph|mosaic|arch/i, no: /$^/, fb: [] }
  ];
  var MUST = /jerusalem|aqsa|al-aqsa|temple mount|haram|dome of the rock|qibli|silsila|maghari|mercy gate|bab al|mount of olives|al-quds|qubbat/i;
  var BAD = /bridge|san francisco|yellowstone|beach|california|sunset|droplets|\b(map|plan|diagram|logo|flag|stamp|coin|drawing|painting|engraving|lithograph|poster|icon|svg|clash|riot|police|protest|soldier|army|settler|fire)\b/i;

  var EVENTS = [
    ['≈ 621م', 'الإسراء والمعراج', 'أُسري بالنبي ﷺ من المسجد الحرام إلى المسجد الأقصى ثم عُرج به إلى السماء.'],
    ['2هـ / 624م', 'تحويل القبلة', 'صلّى المسلمون إلى بيت المقدس نحو 16–17 شهرًا ثم أُمروا بالتوجه إلى الكعبة، فكان الأقصى أولى القبلتين.'],
    ['15هـ / ≈ 637م', 'الفتح العمري', 'دخل عمر بن الخطاب رضي الله عنه القدس سلمًا وأعطى أهلها «العهدة العمرية» وأقام مصلى في الحرم.'],
    ['72هـ / 691م', 'قبة الصخرة', 'شيّدها الخليفة الأموي عبد الملك بن مروان، وتُعد من أقدم الآثار الإسلامية الباقية وعليها نقوش عربية.'],
    ['705–715م', 'الجامع القبلي', 'أتمّ الأمويون عبد الملك وابنه الوليد بناء الجامع القبلي ذي القبة الفضية.'],
    ['1035م', 'ترميم الفاطميين من القاهرة', 'بعد زلزال 1033 أعاد الخليفة الفاطمي الظاهر (حاكم مصر) بناء الأقصى، وما زال مخطط بنائه قائمًا في المسجد اليوم.', 1],
    ['1099م', 'الاحتلال الصليبي', 'سيطر الصليبيون على القدس وحوّلوا الأقصى إلى مقر حكم وقبة الصخرة إلى كنيسة.'],
    ['1187م', 'حطين وتحرير القدس', 'حرّر صلاح الدين الأيوبي — سلطان مصر والشام — بيت المقدس وأعاد للأقصى هويته، ونُصب فيه منبر نور الدين الشهير.', 1],
    ['1260م', 'عين جالوت', 'هزم جيش مصر بقيادة قطز وبيبرس المغول وحمى الشام وفلسطين من الاجتياح.', 1],
    ['1260–1517م', 'العصر المملوكي (حكم القاهرة)', 'أكبر حركة عمارة في الحرم: مدارس وأروقة وأسبلة، منها المدرسة الأشرفية وسبيل السلطان قايتباي (1482م).', 1],
    ['القرن 16م', 'العثمانيون', 'جدّد السلطان سليمان القانوني كسوة قبة الصخرة بالقيشاني وعمّر الأسوار.'],
    ['1922–1925م', 'أول ترميم حديث', 'بإشراف المجلس الإسلامي الأعلى في فلسطين.'],
    ['أربعينيات القرن 20', 'الترميم المصري', 'شارك فنيون مصريون واستُوردت من مصر بلاطات القيشاني في أعمال عُرفت بـ«الترميم المصري».', 1],
    ['1950s–1964م', 'ترميم الأقصى والقبة', 'شارك مهندسون مصريون، واقترحت مصر الحفاظ على القبة الخشبية بدل هدمها.', 1],
    ['1967م', 'احتلال القدس الشرقية', 'احتلت إسرائيل القدس الشرقية، وبقيت إدارة المسجد بيد الأوقاف الإسلامية.'],
    ['21 أغسطس 1969م', 'حريق الأقصى', 'أشعل متطرف أسترالي النار في الجامع القبلي فاحترق منبر صلاح الدين، وعُقدت بعدها قمة الرباط (شاركت فيها مصر) وتأسست منظمة التعاون الإسلامي.', 1],
    ['2007م', 'عودة المنبر', 'أُعيد إلى مكانه منبر مُرمَّم بعد حريق 1969 (بحسب الديوان الملكي الأردني).'],
    ['2026م', 'مواقف مصر الرسمية', 'إدانات متكررة من الخارجية المصرية والأزهر لاقتحامات الأقصى وإغلاقه، وتأكيد أن المسجد كله للمسلمين وحدهم.', 1]
  ];

  var QUIZ = [
    ['ما هي أولى القبلتين؟', ['الكعبة', 'المسجد الأقصى', 'مسجد قباء'], 1],
    ['كم تبلغ مساحة المسجد الأقصى بكامل ساحاته؟', ['14 دونمًا', '144 دونمًا', '1440 دونمًا'], 1],
    ['من حرّر القدس عام 1187م بعد معركة حطين؟', ['بيبرس', 'قطز', 'صلاح الدين الأيوبي'], 2],
    ['أي سلطان مملوكي من القاهرة بنى المدرسة الأشرفية والسبيل في الحرم؟', ['قايتباي', 'الظاهر بيبرس', 'قلاوون'], 0],
    ['ما اسم المبنى ذو القبة الذهبية في ساحة الأقصى؟', ['الجامع القبلي', 'قبة الصخرة', 'المصلى المرواني'], 1],
    ['أي حدث عام 1969 سبق تأسيس منظمة التعاون الإسلامي؟', ['حريق الأقصى', 'حرب أكتوبر', 'افتتاح السد العالي'], 0]
  ];

  var SKY = '<svg class="aq-skyline" viewBox="0 0 900 260" role="img" aria-label="مجسم لقبة الصخرة والجامع القبلي"><defs><linearGradient id="aqG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6e08a"/><stop offset="1" stop-color="#b8891a"/></linearGradient></defs>' +
    '<g fill="#f3e4b0"><circle class="aq-star" cx="90" cy="40" r="2"/><circle class="aq-star" cx="200" cy="80" r="1.6"/><circle class="aq-star" cx="700" cy="50" r="2"/><circle class="aq-star" cx="800" cy="95" r="1.6"/><circle class="aq-star" cx="560" cy="30" r="1.5"/></g>' +
    '<path d="M780 30a22 22 0 1 0 12 40a17 17 0 1 1-12-40z" fill="#f3e4b0"/>' +
    '<rect x="0" y="236" width="900" height="24" fill="#07100c"/>' +
    '<rect x="150" y="165" width="220" height="71" fill="#d9d2bd"/><path d="M200 165a60 60 0 0 1 120 0z" fill="#9aa6a3"/><rect x="170" y="190" width="14" height="46" fill="#8a8670"/><rect x="215" y="190" width="14" height="46" fill="#8a8670"/><rect x="260" y="190" width="14" height="46" fill="#8a8670"/><rect x="305" y="190" width="14" height="46" fill="#8a8670"/>' +
    '<rect x="540" y="190" width="170" height="46" fill="#2a6d8f"/><polygon points="540,190 560,160 690,160 710,190" fill="#2f7fa6"/><rect x="580" y="150" width="90" height="10" fill="#2a6d8f"/><path d="M585 150a40 40 0 0 1 80 0z" fill="url(#aqG)"/><rect x="623" y="95" width="4" height="22" fill="#d4af37"/>' +
    '<rect x="425" y="110" width="10" height="126" fill="#e8dfc4"/><polygon points="425,110 430,80 435,110" fill="#9aa6a3"/><rect x="760" y="130" width="10" height="106" fill="#e8dfc4"/><polygon points="760,130 765,102 770,130" fill="#9aa6a3"/></svg>';

  var built = false, galleryData = [], lbIdx = 0, cache = {};
  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function plain(h) { try { return (new DOMParser().parseFromString(h || '', 'text/html').body.textContent || '').trim(); } catch (e) { return ''; } }

  function build() {
    var root = $('#aqsaView');
    root.innerHTML =
      '<button class="wing-back-btn" id="aqBack">⟶ العودة للأقسام</button>' +
      '<section class="aq-hero">' + '<h2>المسجد الأقصى المبارك</h2><p class="sub">أولى القبلتين وثالث الحرمين الشريفين — عربي إسلامي في قلب القدس</p>' +
      '<p class="aq-verse">﴿ سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ ﴾<small>سورة الإسراء — الآية 1</small></p>' + SKY + '</section>' +
      '<div class="aq-stats"><div class="aq-stat"><b data-n="144">0</b><span>دونمًا مساحة الأقصى كله</span></div><div class="aq-stat"><b data-n="3">0</b><span>ثالث الحرمين الشريفين</span></div><div class="aq-stat"><b data-n="4">0</b><span>مآذن تحيط بالحرم</span></div><div class="aq-stat"><b data-n="1380" data-p="+">0</b><span>عام على الفتح العمري تقريبًا</span></div></div>' +
      '<h3 class="aq-h">ما هو المسجد الأقصى بالضبط؟</h3><div class="aq-cards">' +
      '<div class="aq-card"><h4>الأقصى = الحرم كله</h4><p>المسجد الأقصى اسم للمساحة كاملة (144 دونمًا) بما فيها من مصليات وقباب ومآذن ومدارس وأبواب وساحات، وكلها مسجد واحد للمسلمين.</p></div>' +
      '<div class="aq-card"><h4>الجامع القبلي</h4><p>المبنى ذو القبة الرصاصية الفضية جنوب الساحة، وهو المصلى الرئيسي المسقوف.</p></div>' +
      '<div class="aq-card"><h4>قبة الصخرة</h4><p>المبنى المثمن ذو القبة الذهبية وسط الساحة، بناه عبد الملك بن مروان عام 72هـ وعليه نقوش عربية قرآنية.</p></div>' +
      '<div class="aq-card"><h4>مصليات ومعالم</h4><p>المصلى المرواني، مصلى البراق، باب الرحمة، قبة السلسلة، والمآذن الأربع: المغاربة، السلسلة، الغوانمة، والأسباط.</p></div></div>' +
      '<h3 class="aq-h">لماذا هو عربي إسلامي؟</h3><div class="aq-cards">' +
      '<div class="aq-card"><h4>مكانته في الإسلام</h4><p>أولى القبلتين، ومسرى النبي ﷺ، وأحد المساجد الثلاثة التي تُشد إليها الرحال (متفق عليه).</p></div>' +
      '<div class="aq-card"><h4>عمارة عربية</h4><p>بناه وعمّره خلفاء وسلاطين عرب ومسلمون، ونقوشه وخطوطه عربية، ولغة أوقافه وإدارته العربية.</p></div>' +
      '<div class="aq-card"><h4>الوقف الإسلامي</h4><p>تديره دائرة أوقاف القدس وشؤون المسجد الأقصى التابعة لوزارة الأوقاف الأردنية، في إطار الوصاية الهاشمية على المقدسات.</p></div></div>' +
      '<h3 class="aq-h">الأقصى من كل الزوايا</h3><div class="aq-tabs" id="aqTabs"></div><div class="aq-gallery" id="aqGal"></div>' +
      '<p class="aq-note" id="aqNote"></p>' +
      '<h3 class="aq-h">مصر والأقصى</h3><div class="aq-eg"><ul>' +
      '<li><b>الفاطميون (القاهرة):</b> أعادوا بناء الأقصى عام 1035م بعد زلزال 1033.</li>' +
      '<li><b>صلاح الدين:</b> سلطان مصر والشام، حرّر القدس عام 1187م بعد حطين.</li>' +
      '<li><b>قطز وبيبرس:</b> نصر عين جالوت 1260م حمى بلاد الشام وفلسطين من المغول.</li>' +
      '<li><b>سلاطين المماليك من القاهرة:</b> أقاموا المدارس والأسبلة في الحرم، منها أشرفية قايتباي.</li>' +
      '<li><b>القرن العشرون:</b> «الترميم المصري» في الأربعينيات وإسهام المهندسين المصريين في ترميم الخمسينيات والستينيات.</li>' +
      '<li><b>الأزهر الشريف:</b> أدان في 27 مارس 2026 إغلاق الأقصى، وأكد أنه صرح إسلامي خالص. <a target="_blank" rel="noopener" href="https://egyptianstreets.com/2026/03/28/al-azhar-condemns-continued-closure-of-al-aqsa-mosque/">المصدر</a></li>' +
      '<li><b>الخارجية المصرية (2026):</b> أدانت اقتحامات الأقصى في أبريل ويوليو وأكتوبر، وأكدت أن أي محاولة لفرض أمر واقع جديد مرفوضة. <a target="_blank" rel="noopener" href="https://www.egypttoday.com/Article/1/148502/Egypt-condemns-Al-Aqsa-storming-by-Ben-Gvir-and-thousands">المصدر</a></li>' +
      '<li><b>بيان مشترك (23 يوليو 2026):</b> مصر وسبع دول عربية وإسلامية أكدت أن الـ144 دونمًا مكان عبادة خالص للمسلمين. <a target="_blank" rel="noopener" href="https://www.egypttoday.com/Article/1/148514/Egypt-seven-other-countries-condemn-Al-Aqsa-incursions-and-warn">المصدر</a></li></ul></div>' +
      '<h3 class="aq-h">رحلة عبر الزمن</h3><div class="aq-tl" id="aqTl"></div>' +
      '<h3 class="aq-h">اختبر معلوماتك</h3><div class="aq-quiz" id="aqQuiz"></div>' +
      '<p class="aq-note">المصادر: ويكيبيديا (Al-Aqsa)، الديوان الملكي الهاشمي، الأهرام أونلاين، مصر اليوم، إيجيبشن ستريتس. الصور من ويكيميديا كومنز بتراخيصها.</p>' +
      '<div class="aq-lb" id="aqLb"><button class="x" aria-label="إغلاق">×</button><button class="nx" aria-label="التالي">‹</button><button class="pv" aria-label="السابق">›</button><img alt=""><p></p></div>';

    $('#aqBack').onclick = close;
    // الخط الأميري للآية
    if (!$('#aqFont')) { var l = document.createElement('link'); l.id = 'aqFont'; l.rel = 'stylesheet'; l.href = 'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap'; document.head.appendChild(l); }
    // التايم لاين
    $('#aqTl').innerHTML = EVENTS.map(function (e) { return '<div class="aq-ev' + (e[3] ? ' eg' : '') + '"><time>' + esc(e[0]) + '</time><h4>' + esc(e[1]) + '</h4><p>' + esc(e[2]) + '</p></div>'; }).join('');
    var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { threshold: .15 }) : null;
    root.querySelectorAll('.aq-ev').forEach(function (n) { io ? io.observe(n) : n.classList.add('in'); });
    // العدادات
    var co = 'IntersectionObserver' in window ? new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { count(x.target); co.unobserve(x.target); } }); }) : null;
    root.querySelectorAll('[data-n]').forEach(function (n) { co ? co.observe(n) : count(n); });
    // التبويبات
    $('#aqTabs').innerHTML = TABS.map(function (t, i) { return '<button class="aq-tab' + (i ? '' : ' on') + '" data-i="' + i + '">' + t.t + '</button>'; }).join('');
    $('#aqTabs').onclick = function (e) { var b = e.target.closest('.aq-tab'); if (!b) return; root.querySelectorAll('.aq-tab').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); loadTab(TABS[+b.dataset.i]); };
    loadTab(TABS[0]);
    // الاختبار
    quiz(0, 0);
    // العرض المكبر
    var lb = $('#aqLb');
    lb.querySelector('.x').onclick = function () { lb.classList.remove('show'); };
    lb.querySelector('.nx').onclick = function () { step(1); };
    lb.querySelector('.pv').onclick = function () { step(-1); };
    lb.onclick = function (e) { if (e.target === lb) lb.classList.remove('show'); };
    document.addEventListener('keydown', function (e) { if (!lb.classList.contains('show')) return; if (e.key === 'Escape') lb.classList.remove('show'); if (e.key === 'ArrowLeft') step(1); if (e.key === 'ArrowRight') step(-1); });
    built = true;
  }

  function count(n) {
    var to = +n.dataset.n, p = n.dataset.p || '', t0 = null, still = document.body.classList.contains('a11y-no-motion');
    function f(ts) { t0 = t0 || ts; var k = still ? 1 : Math.min((ts - t0) / 1400, 1); n.textContent = Math.round(to * k) + (k === 1 ? p : ''); if (k < 1) requestAnimationFrame(f); }
    requestAnimationFrame(f);
  }

  function quiz(i, score) {
    var box = $('#aqQuiz');
    if (i >= QUIZ.length) { box.innerHTML = '<h4>نتيجتك: ' + score + ' / ' + QUIZ.length + (score >= 5 ? ' — ما شاء الله، أنت من أهل القدس! 🕌' : ' — جرّب مرة أخرى بعد قراءة الجناح') + '</h4><button class="aq-opt" id="aqAgain">إعادة الاختبار</button>'; $('#aqAgain').onclick = function () { quiz(0, 0); }; return; }
    var q = QUIZ[i];
    box.innerHTML = '<h4>' + (i + 1) + '/' + QUIZ.length + ' — ' + esc(q[0]) + '</h4>' + q[1].map(function (o, k) { return '<button class="aq-opt" data-k="' + k + '">' + esc(o) + '</button>'; }).join('');
    box.onclick = function (e) {
      var b = e.target.closest('.aq-opt'); if (!b || b.dataset.k === undefined) return; box.onclick = null;
      var ok = +b.dataset.k === q[2]; b.classList.add(ok ? 'ok' : 'no');
      if (!ok) box.querySelector('[data-k="' + q[2] + '"]').classList.add('ok');
      setTimeout(function () { quiz(i + 1, score + (ok ? 1 : 0)); }, 1100);
    };
  }

  function loadTab(tab) {
    var gal = $('#aqGal'), note = $('#aqNote');
    gal.innerHTML = '<p class="aq-note">جاري تحميل الصور…</p>';
    getImages(tab).then(function (list) {
      galleryData = list;
      if (!list.length) { gal.innerHTML = ''; note.innerHTML = 'تعذر تحميل صور هذا القسم الآن. تصفحها مباشرة من <a target="_blank" rel="noopener" href="https://commons.wikimedia.org/wiki/Category:Al-Aqsa_Mosque">ويكيميديا كومنز</a> أو أضف صورك في aqsa.js.'; return; }
      note.textContent = 'اضغط على أي صورة لتكبيرها. الصور من ويكيميديا كومنز.';
      gal.innerHTML = list.map(function (g, i) { return '<figure data-i="' + i + '"><img loading="lazy" src="' + esc(g.src) + '" alt="' + esc(g.cap) + '"><figcaption>' + esc(g.cap) + '</figcaption></figure>'; }).join('');
      gal.querySelectorAll('img').forEach(function (im) { im.onerror = function () { var f = im.closest('figure'); if (f) f.remove(); }; });
      gal.onclick = function (e) { var f = e.target.closest('figure'); if (f) openLb(+f.dataset.i); };
    });
  }

  function getImages(tab) {
    if (cache[tab.id]) return Promise.resolve(cache[tab.id]);
    var local = LOCAL.filter(function (l) { return l.tab === tab.id; }).map(function (l) { return { src: l.src, full: l.src, cap: l.cap || tab.t }; });
    var fb = tab.fb.map(function (n) { return { src: FP(n), full: FP(n), cap: tab.t + ' — ' + n.replace(/\.\w+$/, '') }; });
    var reqs = tab.q.map(function (q) {
      var u = API + '?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=20&gsrsearch=' + encodeURIComponent(q + ' filetype:bitmap') +
        '&prop=imageinfo&iiprop=url|size|mime|extmetadata&iiurlwidth=1200&iiextmetadatafilter=Artist|LicenseShortName';
      return fetch(u).then(function (r) { return r.json(); }).then(function (j) { return j.query ? Object.keys(j.query.pages).map(function (k) { return j.query.pages[k]; }) : []; }).catch(function () { return []; });
    });
    return Promise.all(reqs).then(function (arr) {
      var seen = {}, out = [];
      [].concat.apply([], arr).forEach(function (p) {
        var ii = p.imageinfo && p.imageinfo[0]; if (!ii || seen[p.pageid]) return; seen[p.pageid] = 1;
        var title = p.title.replace(/^File:/, '').replace(/\.\w+$/, '');
        if (ii.mime !== 'image/jpeg' || ii.width < 900 || !MUST.test(title) || !tab.ok.test(title) || tab.no.test(title) || BAD.test(title)) return;
        var m = ii.extmetadata || {}, au = plain(m.Artist && m.Artist.value), li = m.LicenseShortName && m.LicenseShortName.value;
        out.push({ src: ii.thumburl || ii.url, full: ii.thumburl || ii.url, cap: title + (au ? ' — ' + au.slice(0, 40) : '') + (li ? ' (' + plain(li) + ')' : '') });
      });
      cache[tab.id] = local.concat(out.slice(0, 12), out.length < 3 ? fb : []);
      return cache[tab.id];
    });
  }

  function openLb(i) { lbIdx = i; var lb = $('#aqLb'); lb.querySelector('img').src = galleryData[i].full; lb.querySelector('p').textContent = galleryData[i].cap; lb.classList.add('show'); }
  function step(d) { if (!galleryData.length) return; openLb((lbIdx + d + galleryData.length) % galleryData.length); }

  function open() {
    if (!built) build();
    $('#wingsGrid').classList.remove('show'); $('#wingOpenView').classList.remove('show');
    $('#aqsaView').classList.add('show'); $('#aqsaView').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function close() { $('#aqsaView').classList.remove('show'); $('#wingsGrid').classList.add('show'); $('#wingsGrid').scrollIntoView({ behavior: 'smooth' }); }
  window.AqsaWing = { open: open, close: close };
})();
