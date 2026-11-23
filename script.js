/* ========================================================
   Zayn & Nora - Luxury Wedding Invitation Engine
   Complete Interactive Features & Web Audio Synthesis
   ======================================================== */

// --- Global State ---
const state = {
  currentLang: 'en',
  audioPlaying: false,
  scratchedPercent: 0,
  isScratching: false,
  isOpened: false,
  carouselIndex: 0,
  targetDate: new Date('2027-01-03T19:00:00+05:30').getTime(),
  wishes: [
    { id: 1, name: 'Amit & Priya Verma', text: 'Wishing Deepanshu & Deepanjali a lifetime of togetherness, boundless joy, and blessings! Heartiest congratulations! 🌸', date: 'Yesterday', likes: 16 },
    { id: 2, name: 'Uncle Rajesh & Family', text: 'So happy and proud! May your sacred union at Hotel Vinayak be filled with divine love and prosperity. 🤍', date: '2 days ago', likes: 24 },
    { id: 3, name: 'Rohit & Sneha', text: 'Counting down to January 3rd, 2027! Can’t wait to celebrate the grand Baarat and Sangeet in Hazaribagh! ✨', date: '3 days ago', likes: 11 }
  ]
};

// --- Multilingual Translations ---
const translations = {
  en: {
    tapToOpen: 'TAP TO OPEN',
    coupleSubtitle: "Weds • Shubh Vivah",
    groomName: 'Deepanshu Pratap',
    groomParents: 'Son of Smt. & Shri Pratap',
    groomQual: 'The Groom',
    brideName: 'Deepanjali Kumari',
    brideParents: 'Daughter of Smt. & Shri Kumari',
    brideQual: 'The Bride',
    welcomeNote: 'With the divine blessings of Lord Ganesha and our revered elders, we cordially invite you to celebrate the joyous wedding ceremony of Deepanshu Pratap & Deepanjali Kumari as they unite in holy matrimony.',
    welcomeThanks: 'अतिथि देवो भव: | Your gracious presence and heartfelt blessings will make this auspicious occasion truly unforgettable 🤍',
    scratchTitle: 'Scratch to Reveal Date',
    scratchSubtitle: 'Gently scratch the golden heart below to unveil the wedding date',
    revealedTag: 'Our forever begins',
    revealedHeading: "YOU'RE INVITED!",
    revealedDate: 'January 3, 2027',
    revealedDayTime: 'Sunday • Auspicious Muhurat 07:00 PM',
    saveTheDateBtn: '📅 Save The Date',
    scratchedHint: 'Rub to scratch with finger or mouse',
    countdownTitle: 'Counting Down to Shubh Vivah',
    days: 'DAYS',
    hours: 'HOURS',
    minutes: 'MINUTES',
    seconds: 'SECONDS',
    timelineTitle: 'Wedding Program Timeline',
    timelineSubtitle: 'Ceremony Schedule & Order of Events',
    t1Time: '06:00 PM',
    t1Event: 'Baarat & Swagat',
    t1Desc: 'Grand welcome of Baarat with dhol & shehnai 🤍',
    t2Time: '08:00 PM',
    t2Event: 'Shubh Varmala (Jaimala)',
    t2Desc: 'Sacred garland exchange between bride & groom',
    t3Time: '08:30 PM',
    t3Event: 'Royal Indian Wedding Feast',
    t3Desc: 'Celebratory banquet & traditional Indian dinner',
    t4Time: '10:30 PM',
    t4Event: 'Pheras & Kanyadaan (Vidai)',
    t4Desc: 'Seven sacred vows around the agni kunda & blessings',
    preweddingTitle: 'Pre-Wedding Celebrations',
    preweddingSubtitle: 'Join us for the joy, music and colors',
    mehendiTitle: 'Mehendi & Sangeet Night',
    mehendiDesc: 'Jan 2, 2027 • 6:30 PM • Hotel Vinayak, Hazaribagh',
    haldiTitle: 'Haldi Ceremony',
    haldiDesc: 'Jan 2, 2027 • 11:00 AM • Family Residence',
    sangeetTitle: 'Tilak & Ring Ceremony',
    sangeetDesc: 'Jan 1, 2027 • 5:00 PM • Hotel Vinayak Banquet',
    venueTitle: 'Venue & Directions',
    venueSubtitle: 'Hotel Vinayak, Hazaribagh, Jharkhand',
    venueName: 'Hotel Vinayak',
    venueAddress: 'Hotel Vinayak, Main Road, Hazaribagh, Jharkhand, India',
    openMaps: 'Open in Google Maps',
    copyAddress: 'Copy Address',
    dressCodeTitle: 'Dress Code & Palette',
    womenTitle: 'Women',
    womenDesc: 'Elegant traditional Indian attire (Lehenga / Saree / Anarkali in Pastel & Royal tones)',
    menTitle: 'Men',
    menDesc: 'Traditional Indian formal wear (Sherwani / Kurta Pajama / Bandhgala / Suit)',
    transportTitle: 'Transportation & Travel',
    transportDesc: 'Hazaribagh Town Railway Station & Bus Stand are 10 minutes from Hotel Vinayak.',
    hotelTitle: 'Accommodation',
    hotelDesc: 'Guest rooms reserved at Hotel Vinayak, Hazaribagh. Guest booking code:',
    giftsTitle: 'Gifts & Blessings',
    giftsDesc: 'Your love, prayers and presence are the greatest gifts we could ever ask for. 🤍',
    rsvpTitle: 'RSVP',
    rsvpSubtitle: 'Please kindly confirm your attendance by Dec 15, 2026',
    fullNameLabel: 'Your Full Name',
    phoneLabel: 'WhatsApp / Phone Number',
    attendingLabel: 'Will you be attending?',
    attendingYes: 'Joyfully Accept with Pleasure',
    attendingNo: 'Regretfully Decline with Best Wishes',
    guestsLabel: 'Number of Guests',
    eventsLabel: 'Events Attending',
    dietLabel: 'Dietary Preference',
    messageLabel: 'Your Warm Wishes / Message',
    confirmRsvp: 'Confirm Attendance ✨',
    whatsappRsvp: 'Send RSVP via WhatsApp 💬',
    guestbookTitle: 'Wishes & Blessings',
    guestbookSubtitle: 'Leave your love and congratulatory notes',
    postWishBtn: 'Post Wish 💌'
  },
  ar: {
    tapToOpen: 'اضغط للفتح',
    coupleSubtitle: 'يسعدنا أن نعلن عن زفافنا المبارك',
    groomName: 'ديبانشو براتاب',
    groomParents: 'نجل السيد والسيدة براتاب',
    groomQual: 'العريس',
    brideName: 'ديبانجالي كوماري',
    brideParents: 'كريمة السيد والسيدة كوماري',
    brideQual: 'العروس',
    welcomeNote: 'ببركات الله، يشرفنا أن نرحب بكم في حفل زفاف ديبانشو براتاب وديبانجالي كوماري.',
    welcomeThanks: 'نشكركم لمشاركتنا هذه المناسبة المباركة في فندق فيناياك، هازاريباغ 🤍',
    scratchTitle: 'امسح لمعرفة الموعد',
    scratchSubtitle: 'امسح القلب الذهبي للكشف عن موعد الحفل',
    revealedTag: 'بداية رحلتنا الأبدية',
    revealedHeading: 'أنتم مدعوون بكل حب!',
    revealedDate: '٣ يناير ٢٠٢٧',
    revealedDayTime: 'الأحد • الساعة ٠٧:٠٠ مساءً',
    saveTheDateBtn: '📅 حفظ الموعد في التقويم',
    scratchedHint: 'امسح بإصبعك أو بالفأرة',
    countdownTitle: 'العد التنازلي ليومنا المميز',
    days: 'يوم',
    hours: 'ساعة',
    minutes: 'دقيقة',
    seconds: 'ثانية',
    timelineTitle: 'برنامج الحفل',
    timelineSubtitle: 'جدول مراسم يوم الزفاف',
    t1Time: '٠٦:٠٠ مساءً',
    t1Event: 'استقبال موكب العريس (بارات)',
    t1Desc: 'استقبال حار مع الموسيقى والترحيب 🤍',
    t2Time: '٠٨:٠٠ مساءً',
    t2Event: 'مراسم تبادل الأكاليل (فارمالا)',
    t2Desc: 'العهد وتبادل باقات الزهور بين العروسين',
    t3Time: '٠٨:٣٠ مساءً',
    t3Event: 'مأدبة العشاء الملكية',
    t3Desc: 'وليمة هندية فاخرة وبركات الأهل والأصدقاء',
    t4Time: '١٠:٣٠ مساءً',
    t4Event: 'المراسم الروحية والعهود (فيرا)',
    t4Desc: 'المراسم التقليدية حول النار المقدسة والبركات',
    preweddingTitle: 'الاحتفالات السابقة للزفاف',
    preweddingSubtitle: 'شاركونا الفرح والموسيقى',
    mehendiTitle: 'ليلة الحناء والموسيقى (سانجيت)',
    mehendiDesc: '٢ يناير ٢٠٢٧ • ٦:٣٠ مساءً • فندق فيناياك، هازاريباغ',
    haldiTitle: 'مراسم الهالدي',
    haldiDesc: '٢ يناير ٢٠٢٧ • ١١:٠٠ صباحاً • منزل العائلة',
    sangeetTitle: 'مراسم الخطوبة والتيلك',
    sangeetDesc: '١ يناير ٢٠٢٧ • ٥:٠٠ مساءً • فندق فيناياك',
    venueTitle: 'المكان والعنوان',
    venueSubtitle: 'فندق فيناياك، هازاريباغ، جهارخاند، الهند',
    venueName: 'فندق فيناياك',
    venueAddress: 'فندق فيناياك، الطريق الرئيسي، هازاريباغ، جهارخاند، الهند',
    openMaps: 'فتح في خرائط جوجل',
    copyAddress: 'نسخ العنوان',
    dressCodeTitle: 'قواعد اللباس والألوان',
    womenTitle: 'السيدات',
    womenDesc: 'أزياء هندية تقليدية أنيقة وفخمة بدرجات الباستيل والألوان الملكية',
    menTitle: 'الرجال',
    menDesc: 'أزياء هندية تقليدية (شيرواني / كورتا) أو بدلة رسمية راقية',
    transportTitle: 'المواصلات والسفر',
    transportDesc: 'محطة قطار هازاريباغ على بعد ١٠ دقائق من فندق فيناياك.',
    hotelTitle: 'الإقامة الفندقية',
    hotelDesc: 'غرف خاصة محجوزة في فندق فيناياك، هازاريباغ. كود الخصم:',
    giftsTitle: 'الهدايا والتهاني',
    giftsDesc: 'محبتكم ودعواتكم وحضوركم هي أغلى وأجمل هدية نتمناها 🤍',
    rsvpTitle: 'تأكيد الحضور (RSVP)',
    rsvpSubtitle: 'يرجى تأكيد الحضور قبل ١٥ ديسمبر ٢٠٢٦',
    fullNameLabel: 'الاسم الكامل',
    phoneLabel: 'رقم الواتساب أو الهاتف',
    attendingLabel: 'هل ستشرفوننا بالحضور؟',
    attendingYes: 'نقبل بكل سرور وسعادة',
    attendingNo: 'نعتذر مع أطيب التمنيات',
    guestsLabel: 'عدد الضيوف',
    eventsLabel: 'المناسبات المراد حضورها',
    dietLabel: 'التفضيلات الغذائية',
    messageLabel: 'رسالتكم وأطيب أمنياتكم للعروسين',
    confirmRsvp: 'تأكيد الحضور ✨',
    whatsappRsvp: 'إرسال التأكيد عبر واتساب 💬',
    guestbookTitle: 'سجل التهاني والتبريكات',
    guestbookSubtitle: 'شاركنا كلماتك الجميلة ودعواتك للعروسين',
    postWishBtn: 'إرسال التهنئة 💌'
  },
  hi: {
    tapToOpen: 'खोलने के लिए स्पर्श करें',
    coupleSubtitle: 'शुभ विवाह • सप्रेम निमंत्रण',
    groomName: 'दीपांशु प्रताप',
    groomParents: 'सुपुत्र: श्रीमती एवं श्री प्रताप',
    groomQual: 'वर',
    brideName: 'दीपांजलि कुमारी',
    brideParents: 'सुपुत्री: श्रीमती एवं श्री कुमारी',
    brideQual: 'वधू',
    welcomeNote: '॥ ॐ श्री गणेशाय नमः ॥\nपरमपिता परमात्मा एवं कुलदेवता के असीम आशीर्वाद से, हम आपको दीपांशु प्रताप संग दीपांजलि कुमारी के पावन परिणय संस्कार के इस मांगलिक अवसर पर सपरिवार सादर आमंत्रित करते हैं।',
    welcomeThanks: 'अतिथि देवो भव: | आपकी गरिमामयी उपस्थिति एवं शुभाशीर्वाद हमारे इस पावन उत्सव को और अधिक मांगलिक बनाएगा 🤍',
    scratchTitle: 'शुभ तिथि जानने के लिए स्क्रैच करें',
    scratchSubtitle: 'नीचे दिए गए स्वर्णिम हृदय को हल्के से स्क्रैच करें',
    revealedTag: 'सदा के लिए एक पवित्र बंधन',
    revealedHeading: 'आप सादर आमंत्रित हैं!',
    revealedDate: '3 जनवरी 2027',
    revealedDayTime: 'रविवार • शुभ मुहूर्त सायं 07:00 बजे',
    saveTheDateBtn: '📅 कैलेंडर में जोड़ें',
    scratchedHint: 'उंगली या माउस से स्क्रैच करें',
    countdownTitle: 'शुभ घड़ी का इंतज़ार',
    days: 'दिन',
    hours: 'घंटे',
    minutes: 'मिनट',
    seconds: 'सेकंड',
    timelineTitle: 'विवाह कार्यक्रम विवरण',
    timelineSubtitle: 'विवाह समारोह की शुभ समय सारिणी',
    t1Time: 'सायं 06:00 बजे',
    t1Event: 'बारात स्वागत एवं जलपान',
    t1Desc: 'ढोल-नगाड़ों और शहनाई के साथ बारात का भव्य स्वागत 🤍',
    t2Time: 'सायं 08:00 बजे',
    t2Event: 'शुभ वरमाला (जयमाला)',
    t2Desc: 'वर-वधू का पावन जयमाला संस्कार एवं पुष्प वर्षा',
    t3Time: 'रात्रि 08:30 बजे',
    t3Event: 'शाही प्रीतिभोज (डिनर)',
    t3Desc: 'पारंपरिक स्वादिष्ट व्यंजनों का शाही भोज एवं आशीर्वाद',
    t4Time: 'रात्रि 10:30 बजे',
    t4Event: 'सप्तपदी फेरे एवं कन्यादान',
    t4Desc: 'पवित्र अग्नि के समक्ष सात फेरे, वचन एवं विदाई',
    preweddingTitle: 'विवाह पूर्व शुभ उत्सव',
    preweddingSubtitle: 'आनंद, संगीत और रंगों के उत्सव में शामिल हों',
    mehendiTitle: 'मेहंदी एवं संगीत उत्सव',
    mehendiDesc: '2 जनवरी 2027 • सायं 6:30 बजे • होटल विनायक, हज़ारीबाग़',
    haldiTitle: 'हल्दी रस्म',
    haldiDesc: '2 जनवरी 2027 • प्रातः 11:00 बजे • निवास स्थान',
    sangeetTitle: 'तिलक एवं अंगूठी रस्म',
    sangeetDesc: '1 जनवरी 2027 • सायं 5:00 बजे • होटल विनायक',
    venueTitle: 'समारोह स्थल एवं मार्ग',
    venueSubtitle: 'होटल विनायक, हज़ारीबाग़, झारखण्ड',
    venueName: 'होटल विनायक',
    venueAddress: 'होटल विनायक, मेन रोड, हज़ारीबाग़, झारखण्ड, भारत',
    openMaps: 'गूगल मैप्स में देखें',
    copyAddress: 'पता कॉपी करें',
    dressCodeTitle: 'ड्रेस कोड एवं रंग थीम',
    womenTitle: 'महिलाएं',
    womenDesc: 'पेस्टल एवं पारंपरिक परिधान (लहंगा, साड़ी, अनारकली)',
    menTitle: 'पुरुष',
    menDesc: 'पारंपरिक परिधान (शेरवानी, कुर्ता पायजामा, सूट)',
    transportTitle: 'परिवहन व्यवस्था',
    transportDesc: 'हज़ारीबाग़ टाउन रेलवे स्टेशन एवं बस स्टैंड होटल विनायक से केवल 10 मिनट की दूरी पर हैं।',
    hotelTitle: 'आवास व्यवस्था',
    hotelDesc: 'होटल विनायक, हज़ारीबाग़ में आरामदायक अतिथि कक्ष आरक्षित हैं। प्रोमो कोड:',
    giftsTitle: 'उपहार एवं आशीर्वाद',
    giftsDesc: 'आपका स्नेह, शुभाशीष और उपस्थिति ही हमारे लिए सबसे अनमोल उपहार है 🤍',
    rsvpTitle: 'उपस्थिति पुष्टि (RSVP)',
    rsvpSubtitle: 'कृपया 15 दिसंबर 2026 तक अपनी उपस्थिति अवश्य दर्ज करें',
    fullNameLabel: 'आपका पूरा नाम',
    phoneLabel: 'व्हाट्सएप / मोबाइल नंबर',
    attendingLabel: 'क्या आप उपस्थित होंगे?',
    attendingYes: 'सहर्ष स्वीकार करते हैं',
    attendingNo: 'सस्नेह क्षमा प्रार्थी हैं',
    guestsLabel: 'अतिथियों की संख्या',
    eventsLabel: 'किन कार्यक्रमों में पधारेंगे?',
    dietLabel: 'खानपान वरीयता',
    messageLabel: 'वर-वधू के लिए शुभकामना संदेश',
    confirmRsvp: 'उपस्थिति पुष्टि करें ✨',
    whatsappRsvp: 'व्हाट्सएप पर RSVP भेजें 💬',
    guestbookTitle: 'शुभकामनाएं एवं आशीर्वाद',
    guestbookSubtitle: 'नवदंपति के लिए अपना प्यार और शुभकामनाएं साझा करें',
    postWishBtn: 'संदेश भेजें 💌'
  }
};

// --- Web Audio Romantic Wedding Melody Synthesizer ---
class WeddingAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
    this.noteIndex = 0;
    this.masterGain = null;
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    } catch (e) {
      console.warn('Audio not supported:', e);
    }
  }

  playChime() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
      const now = this.ctx.currentTime;
      const freqs = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C major pentatonic bells
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 1.2);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 1.3);
      });
    } catch (e) {}
  }

  playScratchSound() {
    this.init();
    if (this.ctx.state === 'suspended') this.ctx.resume();
    const now = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.05; // 50ms noise
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.15;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1800 + Math.random() * 600, now);
    filter.Q.value = 3;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    noise.start(now);
  }

  startMelody() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
      this.isPlaying = true;
      updateAudioUI(true);

      // Warm Tanpura / Drone in background
      this.startDrone();

    // Soulful Indian Wedding Raga melody notes (Frequencies in Hz)
    // Inspired by classic romantic wedding theme (Raag Yaman / Pahadi)
    const melody = [
      { f: 293.66, d: 0.6 }, // D4
      { f: 329.63, d: 0.6 }, // E4
      { f: 369.99, d: 0.8 }, // F#4
      { f: 440.00, d: 1.0 }, // A4
      { f: 493.88, d: 0.8 }, // B4
      { f: 587.33, d: 1.4 }, // D5
      { f: 554.37, d: 0.6 }, // C#5
      { f: 493.88, d: 0.8 }, // B4
      { f: 440.00, d: 1.2 }, // A4
      { f: 369.99, d: 0.8 }, // F#4
      { f: 329.63, d: 0.8 }, // E4
      { f: 293.66, d: 1.6 }, // D4

      { f: 440.00, d: 0.8 }, // A4
      { f: 493.88, d: 0.8 }, // B4
      { f: 587.33, d: 1.2 }, // D5
      { f: 659.25, d: 1.4 }, // E5
      { f: 587.33, d: 0.8 }, // D5
      { f: 493.88, d: 0.8 }, // B4
      { f: 440.00, d: 1.5 }, // A4
      { f: 369.99, d: 0.8 }, // F#4
      { f: 329.63, d: 0.8 }, // E4
      { f: 293.66, d: 2.0 }  // D4
    ];

    const playNextNote = () => {
      if (!this.isPlaying) return;
      const note = melody[this.noteIndex % melody.length];
      this.playFluteNote(note.f, note.d);
      this.noteIndex++;
      this.timer = setTimeout(playNextNote, note.d * 950);
    };

    playNextNote();
  }

  playFluteNote(freq, duration) {
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const oscHarmonic = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    oscHarmonic.type = 'triangle';
    oscHarmonic.frequency.setValueAtTime(freq * 2, now);

    // Warm vibrato
    const vibrato = this.ctx.createOscillator();
    const vibGain = this.ctx.createGain();
    vibrato.frequency.value = 5.2; // 5Hz vibrato
    vibGain.gain.value = freq * 0.015;
    vibrato.connect(osc.frequency);
    vibrato.start(now);
    vibrato.stop(now + duration + 0.2);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.15); // soft breath attack
    gain.gain.setValueAtTime(0.18, now + duration - 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration + 0.15);

    osc.connect(filter);
    oscHarmonic.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    oscHarmonic.start(now);
    osc.stop(now + duration + 0.2);
    oscHarmonic.stop(now + duration + 0.2);
  }

  startDrone() {
    if (this.droneOsc) return;
    const now = this.ctx.currentTime;
    this.droneOsc = this.ctx.createOscillator();
    this.droneGain = this.ctx.createGain();
    this.droneOsc.type = 'triangle';
    this.droneOsc.frequency.setValueAtTime(146.83, now); // D3 fundamental drone
    this.droneGain.gain.setValueAtTime(0.001, now);
    this.droneGain.gain.linearRampToValueAtTime(0.04, now + 2);
    this.droneOsc.connect(this.droneGain);
    this.droneGain.connect(this.masterGain);
    this.droneOsc.start(now);
  }

  stopMelody() {
    this.isPlaying = false;
    clearTimeout(this.timer);
    if (this.droneGain) {
      this.droneGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
      setTimeout(() => {
        if (this.droneOsc) {
          this.droneOsc.stop();
          this.droneOsc = null;
        }
      }, 600);
    }
    updateAudioUI(false);
  }

  toggle() {
    if (this.isPlaying) {
      this.stopMelody();
    } else {
      this.startMelody();
    }
  }
}

const weddingAudio = new WeddingAudioEngine();

function updateAudioUI(isPlaying) {
  state.audioPlaying = isPlaying;
  const btn = document.getElementById('musicToggleBtn');
  const viz = document.getElementById('musicVisualizer');
  if (btn && viz) {
    if (isPlaying) {
      viz.classList.remove('paused');
      btn.classList.add('active');
    } else {
      viz.classList.add('paused');
      btn.classList.remove('active');
    }
  }
}

// --- Scratch Card Engine ---
function initScratchCard() {
  const canvas = document.getElementById('scratchCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  const container = canvas.parentElement;

  const width = container.offsetWidth || 340;
  const height = container.offsetHeight || 380;
  canvas.width = width;
  canvas.height = height;

  // Draw shimmering sage-green & gold coating
  function renderCoating() {
    // Rich sage green gradient base
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#2d4030');
    grad.addColorStop(0.5, '#3b523f');
    grad.addColorStop(1, '#233426');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Golden border on canvas
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 4;
    ctx.strokeRect(10, 10, width - 20, height - 20);

    // Inner dashed line
    ctx.strokeStyle = 'rgba(246, 230, 170, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 5]);
    ctx.strokeRect(16, 16, width - 32, height - 32);
    ctx.setLineDash([]);

    // Draw shimmering glitter specks
    for (let i = 0; i < 400; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const r = Math.random() * 2.2;
      ctx.fillStyle = Math.random() > 0.4 ? 'rgba(212, 175, 55, 0.7)' : 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Centered Heart Silhouette Icon on the scratch coating
    const cx = width / 2;
    const cy = height / 2 - 20;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.6)';
    ctx.lineWidth = 3;
    drawHeartPath(ctx, 0, 0, 90);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // Calligraphic instruction text on canvas
    ctx.fillStyle = '#ffffff';
    ctx.font = '700 16px "Cinzel", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '3px';
    ctx.fillText('SCRATCH TO REVEAL', cx, cy + 85);

    ctx.fillStyle = '#d4af37';
    ctx.font = 'italic 14px "Playfair Display", Georgia, serif';
    ctx.fillText('Touch & rub to uncover', cx, cy + 110);
  }

  function drawHeartPath(context, x, y, size) {
    context.beginPath();
    context.moveTo(x, y + size * 0.3);
    context.bezierCurveTo(x, y, x - size * 0.5, y - size * 0.4, x - size * 0.5, y + size * 0.1);
    context.bezierCurveTo(x - size * 0.5, y + size * 0.45, x, y + size * 0.7, x, y + size * 0.9);
    context.bezierCurveTo(x, y + size * 0.7, x + size * 0.5, y + size * 0.45, x + size * 0.5, y + size * 0.1);
    context.bezierCurveTo(x + size * 0.5, y - size * 0.4, x, y, x, y + size * 0.3);
    context.closePath();
  }

  renderCoating();

  // Scratch handling
  let isDown = false;
  let lastPos = null;

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  }

  function scratch(pos) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 28, 0, Math.PI * 2);
    ctx.fill();

    if (lastPos) {
      ctx.lineWidth = 56;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(lastPos.x, lastPos.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    }
    lastPos = pos;
    weddingAudio.playScratchSound();
    checkScratchProgress();
  }

  function startScratch(e) {
    isDown = true;
    lastPos = getPos(e);
    scratch(lastPos);
  }

  function moveScratch(e) {
    if (!isDown) return;
    scratch(getPos(e));
  }

  function endScratch() {
    isDown = false;
    lastPos = null;
  }

  canvas.addEventListener('mousedown', startScratch);
  window.addEventListener('mousemove', moveScratch);
  window.addEventListener('mouseup', endScratch);

  canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startScratch(e); }, { passive: false });
  window.addEventListener('touchmove', (e) => { if (isDown) e.preventDefault(); moveScratch(e); }, { passive: false });
  window.addEventListener('touchend', endScratch);

  let checking = false;
  function checkScratchProgress() {
    if (checking) return;
    checking = true;
    setTimeout(() => {
      checking = false;
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imgData.data;
      let transparent = 0;
      const step = 32; // Sample every 32nd pixel for performance
      for (let i = 3; i < pixels.length; i += step * 4) {
        if (pixels[i] < 128) transparent++;
      }
      const totalSampled = pixels.length / (step * 4);
      const ratio = transparent / totalSampled;
      state.scratchedPercent = Math.round(ratio * 100);

      const hint = document.getElementById('scratchPercentHint');
      if (hint && ratio < 0.4) {
        hint.textContent = `Scratched: ${state.scratchedPercent}%`;
      }

      // Auto reveal past 38%
      if (ratio > 0.38) {
        revealCardCompletely();
      }
    }, 150);
  }

  function revealCardCompletely() {
    canvas.style.transition = 'opacity 0.8s ease';
    canvas.style.opacity = '0';
    canvas.style.pointerEvents = 'none';
    triggerConfetti();
    weddingAudio.playChime();
    const hint = document.getElementById('scratchPercentHint');
    if (hint) {
      hint.textContent = '✨ Date Revealed! ✨';
      hint.style.color = '#aa7c11';
      hint.style.fontWeight = '700';
    }
  }
}

// --- Live Countdown Engine ---
function initCountdown() {
  function update() {
    const now = new Date().getTime();
    const diff = state.targetDate - now;

    if (diff <= 0) {
      document.getElementById('daysNum').textContent = '00';
      document.getElementById('hoursNum').textContent = '00';
      document.getElementById('minutesNum').textContent = '00';
      document.getElementById('secondsNum').textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');
    document.getElementById('daysNum').textContent = pad(days);
    document.getElementById('hoursNum').textContent = pad(hours);
    document.getElementById('minutesNum').textContent = pad(minutes);
    document.getElementById('secondsNum').textContent = pad(seconds);
  }

  update();
  setInterval(update, 1000);
}

// --- Photo Carousel Slider ---
function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  if (!slides.length) return;

  function showSlide(index) {
    state.carouselIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === state.carouselIndex);
    });
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === state.carouselIndex);
    });
  }

  document.getElementById('carouselNextBtn')?.addEventListener('click', () => {
    showSlide(state.carouselIndex + 1);
  });

  document.getElementById('carouselPrevBtn')?.addEventListener('click', () => {
    showSlide(state.carouselIndex - 1);
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => showSlide(idx));
  });

  // Auto transition every 4 seconds
  let timer = setInterval(() => showSlide(state.carouselIndex + 1), 4000);

  const container = document.querySelector('.carousel-container');
  if (container) {
    container.addEventListener('mouseenter', () => clearInterval(timer));
    container.addEventListener('mouseleave', () => {
      clearInterval(timer);
      timer = setInterval(() => showSlide(state.carouselIndex + 1), 4000);
    });

    // Touch swipe support
    let startX = 0;
    container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });
    container.addEventListener('touchend', (e) => {
      const diffX = e.changedTouches[0].clientX - startX;
      if (Math.abs(diffX) > 40) {
        if (diffX > 0) showSlide(state.carouselIndex - 1);
        else showSlide(state.carouselIndex + 1);
      }
    }, { passive: true });
  }
}

// --- Floating Petals & Gold Dust Particles ---
function initFxCanvas() {
  const canvas = document.getElementById('fxCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  const count = 35;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 8 + 4,
      speedY: Math.random() * 1.2 + 0.6,
      speedX: Math.random() * 0.8 - 0.4,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.6 + 0.3,
      isPetal: Math.random() > 0.4
    });
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.y * 0.01) * 0.5;
      p.rotation += p.rotSpeed;

      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }
      if (p.x > canvas.width + 20) p.x = -20;
      if (p.x < -20) p.x = canvas.width + 20;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;

      if (p.isPetal) {
        // Soft blush rose petal
        ctx.fillStyle = '#f7dcdb';
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#e8a9a6';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      } else {
        // Shimmering gold sparkle dust
        ctx.fillStyle = '#fce2aa';
        ctx.shadowColor = '#d4af37';
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.25, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });

    requestAnimationFrame(loop);
  }

  loop();
}

// --- Confetti Celebration Cannon ---
function triggerConfetti() {
  const canvas = document.getElementById('fxCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const colors = ['#d4af37', '#f6e6aa', '#e29578', '#fffdfa', '#a4b89e'];
  const confetti = [];

  for (let i = 0; i < 90; i++) {
    confetti.push({
      x: canvas.width / 2,
      y: canvas.height * 0.4,
      vx: (Math.random() - 0.5) * 14,
      vy: Math.random() * -12 - 4,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10
    });
  }

  function animateConfetti() {
    confetti.forEach((c) => {
      c.x += c.vx;
      c.y += c.vy;
      c.vy += 0.35; // gravity
      c.alpha -= 0.012;
      c.rotation += c.rotSpeed;

      if (c.alpha > 0) {
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate((c.rotation * Math.PI) / 180);
        ctx.fillStyle = c.color;
        ctx.globalAlpha = Math.max(0, c.alpha);
        ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size * 0.7);
        ctx.restore();
      }
    });

    if (confetti.some((c) => c.alpha > 0)) {
      requestAnimationFrame(animateConfetti);
    }
  }

  animateConfetti();
}

// --- Gate & Seal Tap Interaction ---
function initGateOpening() {
  const seal = document.getElementById('mainSealBtn');
  const gate = document.getElementById('gateOverlay');
  const container = document.querySelector('.invitation-container');
  if (!seal || !gate) return;

  function openGate() {
    if (state.isOpened) return;
    state.isOpened = true;

    // Sound effect & music start
    weddingAudio.playChime();
    setTimeout(() => {
      weddingAudio.startMelody();
    }, 400);

    gate.classList.add('opened');
    if (container) container.classList.add('gate-opened');
    triggerConfetti();

    // Init scratch card once container is unveiled
    setTimeout(() => {
      initScratchCard();
    }, 500);
  }

  seal.addEventListener('click', openGate);
  seal.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openGate();
    }
  });
}

// --- Multi-Language Switcher (i18n) ---
function setLanguage(lang) {
  if (!translations[lang]) return;
  state.currentLang = lang;
  const dict = translations[lang];

  // Set document direction for RTL (Arabic)
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);

  // Update text bindings
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update active pill
  document.querySelectorAll('.lang-pill').forEach((pill) => {
    pill.classList.toggle('active', pill.getAttribute('data-lang') === lang);
  });

  showToast(`Language switched to ${lang === 'en' ? 'English' : lang === 'ar' ? 'العربية' : 'हिन्दी'}`);
}

// --- Calendar Save The Date (.ics download & Google Calendar) ---
function saveTheDate() {
  const title = "Deepanshu & Deepanjali's Wedding Ceremony";
  const desc = "You are cordially invited to celebrate the wedding ceremony of Deepanshu Pratap & Deepanjali Kumari at Hotel Vinayak, Hazaribagh, Jharkhand, India.";
  const location = "Hotel Vinayak, Main Road, Hazaribagh, Jharkhand, India";
  const start = "20270103T133000Z";
  const end = "20270103T183000Z";

  // Google Calendar URL
  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(desc)}&location=${encodeURIComponent(location)}`;

  // Download .ics file
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Deepanshu and Deepanjali Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `SUMMARY:${title}`,
    `DESCRIPTION:${desc}`,
    `LOCATION:${location}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'Deepanshu_and_Deepanjali_Wedding.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('📅 Calendar invite downloaded (.ics)!');
}

// --- RSVP Handling & WhatsApp Integration ---
function initRsvp() {
  const form = document.getElementById('rsvpForm');
  const modal = document.getElementById('rsvpModal');
  const closeModal = document.getElementById('closeModalBtn');
  const waBtn = document.getElementById('whatsappRsvpBtn');

  // Load cached RSVP
  const cached = localStorage.getItem('wedding_rsvp_deepanshu_deepanjali');
  if (cached) {
    try {
      const data = JSON.parse(cached);
      if (document.getElementById('rsvpName')) document.getElementById('rsvpName').value = data.name || '';
      if (document.getElementById('rsvpPhone')) document.getElementById('rsvpPhone').value = data.phone || '';
      if (document.getElementById('rsvpAttending')) document.getElementById('rsvpAttending').value = data.attending || 'yes';
      if (document.getElementById('rsvpGuests')) document.getElementById('rsvpGuests').value = data.guests || '1';
      if (document.getElementById('rsvpDiet')) document.getElementById('rsvpDiet').value = data.diet || 'veg';
      if (document.getElementById('rsvpMessage')) document.getElementById('rsvpMessage').value = data.message || '';
    } catch (e) {}
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('rsvpName').value.trim();
      const phone = document.getElementById('rsvpPhone').value.trim();
      const attending = document.getElementById('rsvpAttending').value;
      const guests = document.getElementById('rsvpGuests').value;
      const diet = document.getElementById('rsvpDiet').value;
      const message = document.getElementById('rsvpMessage').value.trim();

      if (!name) {
        showToast('Please enter your full name');
        return;
      }

      const rsvpData = { name, phone, attending, guests, diet, message, timestamp: new Date().toISOString() };
      localStorage.setItem('wedding_rsvp_deepanshu_deepanjali', JSON.stringify(rsvpData));

      // Update modal pass
      document.getElementById('passGuestName').textContent = name;
      document.getElementById('passGuestCount').textContent = `${guests} Guest(s)`;
      document.getElementById('passStatus').textContent = attending === 'yes' ? '✅ Joyfully Confirmed' : '❌ Regretfully Declined';

      modal.classList.add('active');
      triggerConfetti();
      weddingAudio.playChime();
    });
  }

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  // Direct WhatsApp RSVP generator
  if (waBtn) {
    waBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('rsvpName')?.value.trim() || 'Guest';
      const attending = document.getElementById('rsvpAttending')?.value === 'yes' ? 'Attending with joy!' : 'Unable to attend';
      const guests = document.getElementById('rsvpGuests')?.value || '1';
      const diet = document.getElementById('rsvpDiet')?.value || 'Vegetarian';
      const msg = document.getElementById('rsvpMessage')?.value.trim() || 'Heartiest congratulations Deepanshu & Deepanjali!';

      const text = `Namaste / Hello Deepanshu & Deepanjali,\n\nHere is my RSVP for your wedding at Hotel Vinayak, Hazaribagh:\n\n👤 Name: ${name}\n✨ Status: ${attending}\n👥 Guests: ${guests}\n🍽️ Meal: ${diet}\n🤍 Message: ${msg}\n\nLooking forward to celebrating with you!`;
      const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  }
}

// --- Guestbook Wishes Wall ---
function initGuestbook() {
  const container = document.getElementById('wishesWall');
  const postBtn = document.getElementById('postWishBtn');

  // Load persisted wishes
  const local = localStorage.getItem('wedding_wishes_wall');
  if (local) {
    try {
      state.wishes = JSON.parse(local);
    } catch (e) {}
  }

  function renderWishes() {
    if (!container) return;
    container.innerHTML = '';
    state.wishes.forEach((w) => {
      const card = document.createElement('div');
      card.className = 'wish-card';
      card.innerHTML = `
        <div class="wish-author">
          <span>${escapeHtml(w.name)}</span>
          <span class="wish-date">${escapeHtml(w.date)}</span>
        </div>
        <p class="wish-text">"${escapeHtml(w.text)}"</p>
        <button class="wish-heart-btn" data-id="${w.id}">
          ❤️ <span>${w.likes || 1}</span>
        </button>
      `;
      container.appendChild(card);
    });

    // Attach like listeners
    document.querySelectorAll('.wish-heart-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        const item = state.wishes.find((w) => w.id === id);
        if (item) {
          item.likes = (item.likes || 0) + 1;
          btn.querySelector('span').textContent = item.likes;
          localStorage.setItem('wedding_wishes_wall', JSON.stringify(state.wishes));
          btn.style.transform = 'scale(1.25)';
          setTimeout(() => btn.style.transform = 'scale(1)', 200);
        }
      });
    });
  }

  renderWishes();

  if (postBtn) {
    postBtn.addEventListener('click', () => {
      const name = document.getElementById('rsvpName')?.value.trim() || prompt('Enter your name:');
      if (!name) return;
      const text = document.getElementById('rsvpMessage')?.value.trim() || prompt('Enter your warm wish for Zayn & Nora:');
      if (!text) return;

      const newWish = {
        id: Date.now(),
        name,
        text,
        date: 'Just now',
        likes: 1
      };

      state.wishes.unshift(newWish);
      localStorage.setItem('wedding_wishes_wall', JSON.stringify(state.wishes));
      renderWishes();
      showToast('💌 Wish posted to the wall!');
      triggerConfetti();
    });
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

// --- Utility Functions ---
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

function copyToClipboard(text, successMsg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg || 'Copied to clipboard!');
  }).catch(() => {
    showToast('Copied: ' + text);
  });
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initFxCanvas();
  initGateOpening();
  initCountdown();
  initCarousel();
  initRsvp();
  initGuestbook();

  // Music toggle button
  document.getElementById('musicToggleBtn')?.addEventListener('click', () => {
    weddingAudio.toggle();
  });

  // Save the date buttons
  document.querySelectorAll('.save-date-trigger').forEach((btn) => {
    btn.addEventListener('click', saveTheDate);
  });

  // Viewport Frame Toggle (Mobile phone look vs Fullscreen)
  const viewToggleBtn = document.getElementById('viewportToggleBtn');
  const viewport = document.getElementById('appViewport');
  if (viewToggleBtn && viewport) {
    viewToggleBtn.addEventListener('click', () => {
      viewport.classList.toggle('full-width-mode');
      const isFull = viewport.classList.contains('full-width-mode');
      viewToggleBtn.innerHTML = isFull ? '📱 Mobile View' : '💻 Expand View';
      showToast(isFull ? 'Switched to Widescreen View' : 'Switched to Mobile Frame View');
      setTimeout(initScratchCard, 300);
    });
  }

  // Language selectors
  document.querySelectorAll('.lang-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      setLanguage(pill.getAttribute('data-lang'));
    });
  });

  // Copy address
  document.getElementById('copyAddressBtn')?.addEventListener('click', () => {
    copyToClipboard('Grand Palace Hall, 124 High Street, City Centre, London, UK', '📍 Venue address copied!');
  });

  // Copy promo code
  document.getElementById('copyPromoBtn')?.addEventListener('click', () => {
    copyToClipboard('WEDDING2026', '🏷️ Promo code WEDDING2026 copied!');
  });
});
