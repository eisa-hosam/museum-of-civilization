// 1. بيانات جناح الآثار المصرية القديمة
const egyptianData = [
    { 
        title: "قناع توت عنخ آمون الذهبي", 
        source: "وادي الملوك - الأقصر", 
        desc: "القناع الجنائزي الشهير المصنوع من الذهب الخالص والأحجار الكريمة للملك الشاب توت عنخ آمون، المكتشف عام 1922 على يد هوارد كارتر.", 
        img: "https://i.pinimg.com/1200x/33/dd/d0/33ddd0e3c8a03cf49b24ab256ed4b805.jpg" 
    },
    { 
        title: "تمثال الملكة نفرتيتي", 
        source: "تل العمارنة - المنيا", 
        desc: "تمثال نصفي فريد منحوت من الحجر الجيري الملون للملكة نفرتيتي، وهو رمز للجمال الكلاسيكي والدقة الفنية عبر العصور.", 
        img: "https://i.pinimg.com/736x/4f/8f/7d/4f8f7d006c162784786c2586f7c50665.jpg" 
    },
    { 
        title: "تمثال أبو الهول العظيم", 
        source: "هضبة الجيزة - القاهرة", 
        desc: "أكبر وأقدم التماثيل الضخمة المنحوتة في التاريخ، يجسد مخلوقاً أسطورياً بجسم أسد ورأس فرعون ليدل على القوة والحكمة الفرعونية.", 
        img: "https://i.pinimg.com/736x/dc/39/f0/dc39f0caaf4d3bde9970a50b0a01e1fa.jpg" 
    },
    { 
        title: "حجر رشيد الأثري", 
        source: "مدينة رشيد - مصر", 
        desc: "حجر من البازلت الأسود يعود لعام 196 ق.م، نُقش عليه مرسوم بثلاث لغات، وكان حجر الأساس في فك رموز الخط الهيروغليفي.", 
        img: "https://i.pinimg.com/736x/83/23/3f/83233fded646245a809cb3d86d53a461.jpg" 
    },
    { 
        title: "تمثال الفرعون خفرع الجالس", 
        source: "عصر الدولة القديمة", 
        desc: "أحد أروع روائع النحت المصري القديم، يظهر الملك خفرع جالساً على عرشه ويحميه صقر حورس باسطاً جناحيه خلف رأسه.", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3Q0f-e5HRPLx39fyWs0yIFEaLspLZnTOjg&s" 
    },{ 
        title: " اهرامات الجيزه ", 
        source: "عصر الدوله القديمه", 
        desc: "أهرامات الجيزة هي إحدى عجائب الدنيا السبع القديمة الباقية حتى اليوم، وتعد أشهر المعالم الأثرية والحضارية في مصر والعالم", 
        img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH-8wP_Dmt-1Enqdm1fNzmhUwm-CHlg8e5TGCfHrIm9uXdnzsm0ifpolApBDIkSFMbut7dFXCSi-oc5phiDTmEUKyiTZhze06gqYma-r5d2YQWMuXw6FGPmXe6yiWc1E52Nc_PQ=s1360-w1360-h1020-rw" 
    },{ 
        title: " مناره الاسكندريه", 
        source: " العصر الهيلينيستيا (العصر البطلمي)، وتحديداً في القرن الثالث قبل الميلاد (القرن 3 ق.م)", 
        desc: "منارة الإسكندرية أو فاروس الإسكندرية تعد واحدة من عجائب الدنيا السبع في العالم القديم صممها المهندس الإغريقي سوستراتوس في القرن الثالث قبل الميلاد بأمر من بطليموس الأول لحماية وتوجيه السفن التجارية نحو الميناء بلغ ارتفاعها حوالي مئة وعشرين متراً وكانت تتكون من ثلاثة طوابق مربع ومثمن ومستدير يعلوها مرآة عملاقة تعكس ضوء الشمس نهاراً والنيران ليلاً صمدت المنارة لأكثر من ألف عام حتى دمرتها سلسلة من الزلازل العنيفة وبُنيت قلعة قايتباي الشهيرة فوق أنقاضها باستخدام بعض حجارتها القديمة", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZVDmTHUfsRaUR49hS2fkq8UnQVgGblO1PnJrL9HmVg&s=10" 
    },{ 
        title: " معبد ابوسمبل الكبير", 
        source: "عصر الدولة الحديثة ", 
        desc: "معبد أبو سمبل الكبير هو تحفة معمارية وهندسية فريدة نحت بالكامل داخل الجبل في جنوب مصر بأمر من الملك رمسيس الثاني خلال القرن الثالث عشر قبل الميلاد تتقدم واجهة المعبد أربعة تماثيل ضخمة للملك رمسيس الثاني يبلغ ارتفاع كل منها حوالي عشرين مترا ويشتهر المعبد بظاهرة فلكية معجزة حيث تتعامد أشعة الشمس على وجه تمثال الملك داخل قدس الأقداس مرتين فقط في العام ونُقل المعبد بالكامل في ستينيات القرن الماضي بحملة دولية لإنقاذه من الغرق تحت مياه بحيرة ناصر", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhI5Ccu8zpsUG_74PdzxYhJC_nEQXz3L1I0ROjE4rpA&s=10" 
    },{ 
        title: " حجر رشيد", 
        source: "عصر الدولة البطلمي ", 
        desc: "حجر رشيد هو مفتاح فك لغز الحضارة المصرية القديمة ويعود تاريخه إلى القرن الثاني قبل الميلاد وتحديداً عام مئة وستة وتسعين قبل الميلاد خلال العصر البطلمي الحجر عبارة عن لوحة من البازلت الأسود نقشت عليها مرسوم ملكي صادر عن الملك بطليموس الخامس بثلاثة خطوط مختلفة وهي الهيروغليفية والديموطيقية واليونانية القديمة وعثر عليه الجنود الفرنسيون بالصدفة في مدينة رشيد عام ألف وسبعمائة وتسعة وتسعين واستولى عليه البريطانيون لاحقاً وساعد هذا التنوع اللغوي العالم الفرنسي شامبليون على فك رموز الهيروغليفية عام ألف وثمانمائة واثنين وعشرين ويُعرض الحجر اليوم في المتحف البريطاني بلندن", 
        img:"https://i.pinimg.com/1200x/8a/ac/d7/8aacd7b3a646de0e2a2f884314c355c8.jpg" 
    },{ 
        title: "رأس الملكة نفرتيتي ", 
        source: "عصر الدولة الحديثه", 
        desc: "تمثال رأس الملكة نفرتيتي يعد أيقونة عالمية للجمال الفرعوني ونحت في القرن الرابع عشر قبل الميلاد خلال عصر الدولة الحديثة وتحديداً في عهد الأسرة الثامنة عشرة صمم هذه التحفة الفريدة النحات الملكي تحتمس في ورشته بتل العمارنة واستخدم في نحته الحجر الجيري المغطى بطبقة من الجص الملون بدقة مذهلة تبرز ملامح وجه الملكة وزوجها الفرعون إخناتون واكتشف التمثال عالم الآثار الألماني لودفيج بورشاردت عام ألف وتسعمائة واثني عشر ونقل إلى ألمانيا بطرق ملتوية حيث يُعرض اليوم في قاعة خاصة بمتحف برلين الجديد وسط مطالبات مصرية مستمرة لاستعادته", 
        img:"https://i.pinimg.com/736x/ce/1b/5f/ce1b5ff2cf6c775370d72843d199148e.jpg" 
    },{ 
        title: "تمثال الكاتب المصري القابع", 
        source: "عصر الدولة القديمه", 
        desc:"تمثال الكاتب المصري هو واحد من أشهر المنحوتات الواقعية في العالم ويعود تاريخه إلى القرن الخامس والعشرين قبل الميلاد خلال عصر الدولة القديمة وتحديداً في عهد الأسرة الخامسة صُنع التمثال من الحجر الجيري الملون ويجسد رجلاً يجلس بوضعية القرفصاء يمسك بيده لفة من ورق البردي وعلى وجهه نظرة تركيز وانتباه شديدة تعكس الاحترام الكبير الذي حظيت به مهنة الكتابة في مصر القديمة وتتميز عيناه ببريق مذهل نتيجة صنعها من حجر الكوارتز الأبيض المطعّم بالبلور الصخري واكتشف التمثال في منطقة سقارة عام ألف وثمانمائة وخمسين ويُعرض اليوم في متحف اللوفر بباريس", 
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIwDzA0kq8Hqstt3p_-OmfIxpKH44CwyUmoMFglSyCA&s" 
    },{ 
        title: "تمثال رحوتب ونفرت", 
        source: "عصر الدولة القديمه", 
        desc:"تمثال الأمير رحوتب وزوجته الأميرة نفرت يعدان من أشهر التماثيل الثنائية الملونة التي حفظت الألوان الأصلية بكفاءة مذهلة ويعود تاريخهما إلى القرن السادس والعشرين قبل الميلاد خلال عصر الدولة القديمة وتحديدا في عهد الأسرة الرابعة صُنع التمثالان من الحجر الجيري الملون ويظهر فيهما الأمير ببشرة سمراء داكنة مرتديا قلادة بسيطة بينما تظهر الأميرة ببشرة بيضاء ناصعة مرتدية رداء بيضا طويلا وشعرا مستعارا يعلوه إكليل من الزهور وتتميز العيون المصنوعة من الكوارتز والبلور الصخري ببريق حيوي يجعل الناظر يشعر وكأنهما ينظران إليه واكتشفت هذه التحفة في مصطبة بميدوم وتُعرض اليوم في المتحف المصري بالتحرير",
        img:"https://s3media.amwcdn.com/content/643402/conversions/61e625ea88-attachments-webp.webp" 
    },{ 
        title: "تمثال خفرع الجالس ", 
        source: "عصر الدولة القديمه", 
        desc:"تمثال الملك خفرع الجالس يعد واحدا من أعظم روائع النحت المجسم في التاريخ القديم ويعود إلى القرن السادس والعشرين قبل الميلاد خلال عصر الدولة القديمة في عهد الأسرة الرابعة صُنع التمثال من حجر الديوريت الأخضر الصلب للغاية والذي يتطلب مهارة فائقة في نحته ويظهر فيه الملك خفرع باني الهرم الثاني جالسا على عرشه بوقار ملكي بينما يحميه إله الأفق حورس الذي يتمثل في صورة صقر يبسط جناحيه خلف رأس الملك في تناغم بصري يرمز لاندماج القوة الملكية بالدعم الإلهي واكتشف التمثال في معبد الوادي بالجيزة ويُعرض اليوم في المتحف المصري الكبير2. تمثال رحوتب ونفرت (عصر الدولة القديمة)",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJH6EbDd_l22gOcax995MLCI6yST1XcIfZGQe5mVC85w&s=10" 
    },{ 
        title: " عجلات الملك توت عنخ آمون الحربية", 
        source: "عصر الدولة الحديثه", 
        desc:"عجلات الملك توت عنخ آمون الحربية تمثل ذروة الهندسة والصناعة العسكرية في مصر القديمة وتعود إلى القرن الرابع عشر قبل الميلاد خلال عصر الدولة الحديثة وتحديداً عهد الأسرة الثامنة عشرة عثر عالم الآثار هوارد كارتر على ست عجلات حربية مفككة داخل مقبرة الملك الشاب بوادي الملوك عام ألف وتسعمائة واثنين وعشرين وصنعت هذه العجلات من أنواع خفيفة وصلبة من الأخشاب مثل خشب الزان والملول وتم تزيين العجلات الملكية الفاخرة بصفائح الذهب الخالص والنقوش التي تصور انتصارات الملك وتحتوي على نظام تعليق متطور ومرن لامتصاص الصدمات أثناء السير السريع وتُعرض المجموعة كاملة اليوم في المتحف المصري الكبير",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6MNydrkykn41Y-ib38SkOeFh5LrcHgIYj2zh5CZ2t6g&s=10" 
    },{ 
        title: " تمثال تحتمس الثالث كملك محارب ", 
        source: "عصر الدولة الحديثه", 
        desc:"تمثال الملك تحتمس الثالث يعد واحداً من أروع التماثيل التي تجسد القوة والوقار الإمبراطوري ويعود إلى القرن الخامس عشر قبل الميلاد خلال عصر الدولة الحديثة في عهد الأسرة الثامنة عشرة صُنع التمثال من حجر الشيست الأخضر الصلب ويظهر فيه الإمبراطور والقايد العسكري العظيم تحتمس الثالث وهو يرتدي التاج الأبيض للوجه القبلي وغطاء الرأس الملكي ممسكاً برموز الحكم ومطأطئ الرأس بقوة وهدوء تعكس الثقة والانتصار وتتميز ملامح وجهه بابتسامة خفيفة وخطوط منحوتة بدقة بالغة تبرز مهارة الفنان المصري القديم في التعامل مع الأحجار الصلبة واكتشف التمثال في خبيئة معبد الكرنك بالأقصر ويُعرض اليوم في متحف الأقصر للفن الفراعني",
        img:"https://gate.ahram.org.eg/Media/News/2022/10/7/19_2022-638007538612618528-261.jpg" 
    }
];



// بيانات جناح رؤساء مصر
// بيانات قسم رؤساء مصر
const egyptianLeadersData = [
    { 
        title: "اللواء محمد نجيب", 
        source: "أول رئيس لجمهورية مصر", 
        desc: "أول رئيس لجمهورية مصر العربية بعد ثورة 23 يوليو 1952، عرف بتواضعه وقربه من الشعب المصري.", 
        img: "data:image/jpeg;base64,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" 
    },
    { 
        title: "الزعيم جمال عبد الناصر", 
        source: "1954 - 1970", 
        desc: "قائد ثورة يوليو، صاحب مشروع السد العالي، وأحد أبرز القادة الذين نادوا بالقومية العربية واستقلال القرار الوطني.", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RdEshCCbDY9v4u4yaC1QJnPsHlS-6uuB2fwwMeHxBQ&s=10" 
    },
    { 
        title: "الرئيس محمد أنور السادات", 
        source: "1970 - 1981", 
        desc: "بطل الحرب والسلام، قاد مصر في حرب أكتوبر 1973 المجيدة، وحصل على جائزة نوبل للسلام.", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5W4IrBzpS0FqVo5P8nlWzI2d-_gycZb4IsLrWMPpjA&s=10" 
    },
    { 
        title: "الرئيس محمد حسني مبارك", 
        source: "1981 - 2011", 
        desc: "تولى حكم مصر لمدة ثلاثة عقود، وشهدت فترة حكمه العديد من التطورات في البنية التحتية والسياسة الخارجية.", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv56VbtsEs-8dLm0-kDyYF_YZcS4nLvh0-00_fMPgs7w&s=10" 
    },
    { 
        title: "الرئيس عبد الفتاح السيسي", 
        source: "2014 - حتى الآن", 
        desc: "قاد مصر في مرحلة إعادة البناء، وأطلق العديد من المشروعات القومية الكبرى مثل العاصمة الإدارية الجديدة وتطوير الطرق والمرافق.", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaeb3o1n5uTi99f-SZgvTaMva6ygpHm-Q2hZO3m6nMow&s=10" 
    }
];




// 2. بيانات جناح اللوحات الفنية العالمية
const paintingsData = [
    { 
        title: "لوحة الموناليزا", 
        source: "ليوناردو دا فينشي - إيطاليا", 
        desc: "لوحة زيتية من القرن السادس عشر تعد أشهر عمل فني في العالم، وتتميز بتقنيات الظلال المبتكرة وابتسامة السيدة الغامضة.", 
        img: "https://i.pinimg.com/1200x/62/f8/e5/62f8e5fca7ac1915616148f475ea503c.jpg" 
    },
    { 
        title: "ليلة مرصعة بالنجوم", 
        source: "فينسنت فان جوخ - هولندا", 
        desc: "رسمها الفنان الهولندي من داخل غرفته عام 1889، وتعبر اللوحة المليئة بالدوامات الزرقاء والصفراء عن قمة المدرسة الانطباعية العبقرية.", 
        img: "https://i.ebayimg.com/thumbs/images/g/HJwAAOSwWKVmgNjC/s-l500.jpg" 
    },
    { 
        title: "الفتاة ذات القرط اللؤلؤي", 
        source: "يوهان فيرمير - هولندا", 
        desc: "يُطلق عليها أحياناً 'موناليزا الشمال'، وهي تحفة فنية تركز بشكل ساحر على ملامح الفتاة وانعكاس الضوء الساقط على القرط اللؤلؤي الكبير.", 
        img: "https://almadayinpost.com/wp-content/uploads/2020/06/Girl-with-a-pearl-earring-.jpg" 
    },
    { 
        title: "لوحة الصرخة التعبيرية", 
        source: "إدوارد مونش - النرويج", 
        desc: "لوحة فنية تجسد القلق والاضطراب النفسي الوجودي، وتظهر شخصية مذهولة تحت سماء حمراء متموجة بجانب جسر خشبي.", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjA-t1jr7_vxtLsFYfNIOm34gk6atRi-zVZg&s" 
    },
    { 
        title: "لوحة موجة كاناغاوا العظيمة", 
        source: "هوكوساي - اليابان", 
        desc: "عمل فني تقليدي شهير يصور موجة بحرية هائلة تكاد تبتلع القوارب، ويظهر جبل فوجي المقدس ثابتاً في خلفية المشهد الدرامي.", 
        img: "https://m.media-amazon.com/images/I/61pE3NsZBES.jpg" 
    },{
        title:"لوحه غرينيكا ",
        source:"بابلو بيكاسو - اسبانيا",
        desc:"لوحة غرنيكا (Guernica) هي واحدة من أشهر الجداريات العالمية المناهضة للحرب، رسمها الفنان الإسباني بابلو بيكاسو عام 1937. تجسد اللوحة المعاناة الإنسانية المأساوية ودمار الحرب، وتُعرض حالياً بشكل دائم في متحف رينا صوفيا في مدريد، إسبانيا.",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcndcCZwGmeHDuM3Rpkcs-MRqyjrqup1cr8A&s"
    },{
        title:"لوحه القبله",
        source:"غوستاف كليمت-النمسا",
        desc:"لوحة القبلة للفنان النمساوي غوستاف كليمت رُسمت بين عامي ألف وتسعمائة وسبعة وألف وتسعمائة وثمانية وتعد ذروة عصره الذهبي حيث دمج رقائق الذهب والفضة الحقيقية مع الألوان الزيتية تجسد اللوحة حبيبين يرتديان رداءين مزخرفين برموز هندسية متعانقين على حافة منحدر مغطى بالزهور مما يعكس أسمى معاني الاندماج العاطفي والروحي وتُعرض اليوم في متحف بيلفيدير في فيينا",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbusvZu5RCVZXlWdpyr8ZECWzzxqYwdc8nPCsCGjCNmg&s=10"
    },{
        title:"لوحه المظلات ",
        source:"بيير أوغست رينوار-فرنسا",
        desc:"لوحة المظلات للفنان الفرنسي الشهير بيير أوغست رينوار رُسمت على مرحلتين في ثمانينيات القرن التاسع عشر وتعد من روائع المدرسة الانطباعية تجسد اللوحة مشهدا حيويا ومزدحما في أحد شوارع باريس خلال يوم ممطر حيث يظهر الناس وهم يرفعون مظلاتهم وتتميز بلوحتها اللونية الغنية بدرجات الأزرق والرمادي التي تنقل بدقة أجواء الطقس البارد وتُعرض هذه التحفة الفنية اليوم في المعرض الوطني بالعاصمة البريطانية لندن",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNcwlvyZ9jBtE-w-xguUhWqEfuOgnItpIqM4Kjni4sSg&s=10",
    },{
        title:"تراس مقهى في الليل ",
        source:"فينسنت فان جوخ-هولاندا",
        desc:"لوحة تراس مقهى في الليل للفنان الهولندي الشهير فينسنت فان جوخ رُسمت عام ألف وثمانمائة وثمانية وثمانين في مدينة آرل الفرنسية وتعد من أشهر لوحات المدرسة ما بعد الانطباعية تُظهر اللوحة الجانب الخارجي لمقهى يضاء بالأنوار الصفراء الدافئة تحت سماء مرصعة بالنجوم اللامعة وتتميز هذه التحفة بأنها أول لوحة استخدم فيها فان جوخ خلفية النجوم الشهيرة كما أنه رسمها بالكامل في الليل دون استخدام اللون الأسود وتُعرض اليوم في متحف كرولر مولر في هولندا",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0IN4_WChcRsziT9MIKpIGMGGVHcyqY9hQqLniZlhsWw&s=10",
    },{
        title:"لوحة القدس",
        source:"سليمان منصور-فلسطين",
        desc:"لوحة جمل المحامل والمعروفة أيضاً بلوحة القدس للفنان الفلسطيني سليمان منصور رُسمت عام ألف وتسعمائة وثلاثة وسبعين وتعد الأيقونة الفنية الأبرز للقضية الفلسطينية في العصر الحديث تُظهر اللوحة عتالاً فلسطينيًا عجوزاً يحمل على ظهره حملاً ثقيلاً على شكل حبة عين ضخمة يظهر بداخلها المسجد الأقصى وبلدة القدس القديمة ترمز اللوحة إلى الصمود الأسطوري وحمل الأمانة والهوية عبر الأجيال وتعتبر من أكثر الصور المطبوعة انتشاراً في المنازل العربية",
        img:"https://dafbeirut.org/sites/default/files/styles/single_artwork/public/artwork_images/daf01sam0031-suleimananismansour-front.jpg.webp?itok=7p83b80k",
    },{
        title:"لوحة مدرب السلاحف ",
        source:"عثمان حمدي بيك-تركيا",
        desc:"لوحة مدرب السلاحف للفنان التركي العثماني عثمان حمدي بيك رُسمت عام ألف وتسعمائة وستة وتعتبر أشهر تحفة فنية في تاريخ الفن الشرقي تُظهر اللوحة رجلاً مسناً يرتدي لباساً صوفياً أحمر ويحمل مزماراً خلف ظهره وهو يراقب ببطء وسكوت خمس سلاحف على الأرض ترمز اللوحة مجازياً إلى محاولات الإصلاح الصعبة وبطء التغيير الاجتماعي والفكري في أواخر عهد الدولة العثمانية وتُعرض اليوم في متحف بيرا بمدينة إسطنبول",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPvULpw7kbPvP7-07GBB0Me1dwZIM1yMaiVN_tkzWVg&s=10",
    }
];

// 3. بيانات جناح الحضارات والآثار العالمية الأخرى
const worldData = [
    { 
        title: "مدرج الكولوسيوم الروماني", 
        source: "الإمبراطورية الرومانية - إيطاليا", 
        desc: "مدرج روماني عملاق يقع في وسط روما، كان يُستخدم قديماً لعروض قتال المصارعين ويعتبر شاهداً على عظمة العمارة الرومانية القديمة.", 
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=600" 
    },
    { 
        title: "ضريح تاج محل الرخامي", 
        source: "الحضارة المغولية - الهند", 
        desc: "أحد روائع العمارة الإسلامية الهندية، وهو ضريح بناه الإمبراطور شاه جهان من الرخام الأبيض الصافي ليكون مقبرة لزوجته ممتاز محل.", 
        img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600" 
    },
    { 
        title: "سور الصين العظيم", 
        source: "الصين القديمة", 
        desc: "مشروع دفاعي عسكري قديم يمتد لآلاف الكيلومترات فوق الجبال، بني لحماية الصين من الغزوات الشمالية وهو أطول بناء من صنع الإنسان.", 
        img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=600" 
    },
    { 
        title: "معبد البارثينون التاريخي", 
        source: "الحضارة الإغريقية - اليونان", 
        desc: "معبد قديم فوق هضبة الأكروبوليس بأثينا مخصص للإلهة أثينا، وهو أفضل نموذج هندسي باقٍ يعكس جمال العمارة اليونانية الكلاسيكية.", 
        img: "https://png.pngtree.com/thumb_back/fw800/background/20250323/pngtree-majestic-parthenon-temple-standing-proudly-on-acropolis-hill-photo-photo-image_66939588.webp" 
    },
    { 
        title: "أحجار ستونهنج الأثرية", 
        source: "عصر ما قبل التاريخ - إنجلترا", 
        desc: "مجموعة من الأحجار الضخمة القائمة والمرتبة على شكل حلقة غامضة يعود بناؤها لآلاف السنين، ولا يزال الهدف الدقيق لتأسيسها لغزاً.", 
        img: "https://mf.b37mrtl.ru/media/pics/2018.02/article/5a8d44ea95a597c1758b4598.jpg" 
    },{
        title:"ضريح هاليكارناسوس",
        source:"حوالي 350 عام قبل الميلاد",
        desc: "ضريح هاليكارناسوس هو مقبرة ملكية فاخرة بُنيت في القرن الرابع قبل الميلاد بمدينة بودروم التركية الحالية، ويُصنف كأحد عجائب الدنيا السبع القديمة لشدة جماله وضخامته.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-__gf0lMTjZlAcCdBwRqlCBZrQsQ7xNxRQ&s"
    },{
        title:"مدينه البترا (الاردن)",
        source:"في العصر الذهبي للانباط ",
        desc:"تقع في جنوب المملكة الأردنية الهاشمية، وتحديداً في محافظة معان و شكلت نقطة التقاء رئيسية لقوافل التجارة القديمة بين الجزيرة العربية، الشام، مصر، والبلدان المتوسطية و سيطر الأنباط من خلالها على طرق تجارة البخور، المر، والتوابل الثمينة.",
        img:"https://media.elwatannews.com/media/img/mediaarc/large/5097216311728221936.jpg"
    },{
        title:"برج ايفيل (باريس)",
        source:"عصر الجمهورية الفرنسية الثالثة ",
        desc:"برج إيفل (Eiffel Tower) هو الأيقونة الغربية الأشهر للثورة الصناعية وللعمارة الحديدية الحديثة؛ شُيّد هذا الهيكل المعدني العملاق في قلب باريس عام 1889 بارتفاع يصل اليوم إلى 330 مترًا، ليكون واجهة المعرض الدولي وبوابة فرنسا نحو الحداثة. يجسد البرج، بتصميمه الهندسي الفريد وطوابقه الثلاثة التي تطل على نهر السين، مزيجًا ساحرًا بين العبقرية الهندسية لغوستاف إيفل وبين الجاذبية السياحية العالمية، ليظل الرمز الغربي الأكثر إلهامًا في عالم الفن، والتاريخ، والثقافة المعاصرة.",
        img:"https://i.pinimg.com/736x/af/20/09/af2009935cdf527c28a9732bb93cc514.jpg"
    },{
                title:"برج بيزا المائل (ايطاليا)",
        source:"بُني في العصور الوسطى (بين القرنين الثاني عشر والرابع عشر)",
        desc:"برج بيزا المائل هو أحد أبرز عجائب العمارة الرومانسكية في العصور الوسطى، ويقع في مدينة بيزا الإيطالية كبرج جرس مستقل لكاتدريتها الشهيرة. بدأ تشييد هذا الهيكل الرخامي عام 1173، واستغرق بناؤه نحو قرنين من الزمان، حيث بدا بالميلان مبكرًا نتيجة لضعف وترهل التربة الطينية تحت أساساته. يرتفع البرج حوالي 56 مترًا، ويجتذب ملايين السياح سنويًا لتأمل توازنه الغريب وصموده الهندسي بعد عمليات الترميم الحديثة التي أمنته للمستقبل، ليظل رمزًا عالميًا لجمال الخطأ المعماري.",
        img:"https://i.pinimg.com/736x/51/b1/d1/51b1d1126999cee33cae6c84be37b975.jpg"
    },{
        title:"معبد تشيتشن إيتزا (المكسيك)",
        source:"لعصر الكلاسيكي المتأخر وعصر ما بعد الكلاسيكي",
        desc:"معبد تشيتشن إيتزا هو أحد أبرز الحواضر الأثرية لحضارة المايا في المكسيك وإحدى عجائب الدنيا السبع الجديدة. ازدهر هذا المركز الديني والفلكي في العصر الكلاسيكي المتأخر وعصر ما بعد الكلاسيكي بين القرنين التاسع والثاني عشر الميلادي. ويعد هرمه المدرج الشهير شاهداً عبقرياً على براعة المايا في الهندسة والفلك، حيث يعكس تصميمه حركة الشمس بدقة فائقة",
        img:"https://abou-alhool.com/photo_gallery/big_38437_photo_gallery_1.jpg"
    },{
        title:"حدائق بابل المعلقه (العراق)",
        source:"عصر الدولة البابلية الحديثة (أو ما يُعرف بالإمبراطورية الكلدانية)",
        desc:"شيدت هذه الجنة المعلقة كهدية حب من الملك  نبوخذ نصر الثاني  لزوجته أميتيس ليعوضها عن جبال وطنها الخضراء وتكمن معجزتها في كونها جبلا اصطناعيا من المدرجات المزروعة بنباتات شاهقة تغذيها شلالات ومياه رفعت من نهر الفرات عبر نظام ري عبقري تحدى الجاذبية في العالم القديم",
        img:"https://i.pinimg.com/736x/ec/53/bc/ec53bc91354c6fcc3ba982291f894acb.jpg"
    },{
        title:"تمثال زيوس(اليونان)",
        source:"العصر الكلاسيكي لليونان القديمة",
        desc:"تمثال زيوس في أولمبيا الأعجوبة المفقودة في قلب القرن الخامس قبل الميلاد صاغ النحات الأسطوري فيدياس عظمة الذهب والعاج في جسد مهيب فاق الاثني عشر مترا جلس ملك الآلهة على عرشه شاهدا على أولى الألعاب الأولمبية في التاريخ قبل أن يختفي التمثال تماما في حريق غامض بالقرن الخامس الميلادي لم يبق منه كاميرا تصوره بل خيال يحييه وأثر لا يموت",
        img:"https://www.worldhistory.org/uploads/images/9052.jpg"
    }
];




createGallerySection('leaders-gallery', egyptianLeadersData);

// دالة لتوليد الكروت بشكل تلقائي وعرضها داخل الأجنحة المخصصة في الـ HTML
function createGallerySection(containerId, dataArray) {
    const container = document.getElementById(containerId);
    let htmlContent = "";

    // الـ Loop يدور بدقة على العناصر الحقيقية المتوفرة في المصفوفة ليعرض قطعاً مختلفة
    for (let i = 0; i < dataArray.length; i++) {
        const item = dataArray[i];

        htmlContent += `
            <div class="art-card" onclick="openMuseum('${item.title}', '${item.source}', '${item.desc}', '${item.img}')">
                <img src="${item.img}" alt="${item.title}">
                <div class="art-info">
                    <h3>${item.title}</h3>
                    <p>${item.source}</p>
                </div>
            </div>
        `;
    }
    container.innerHTML = htmlContent;
}

// تشغيل جلب وعرض البيانات المنفصلة فور تحميل الصفحة مباشرة
window.onload = function() {
    createGallerySection('egypt-gallery', egyptianData);
    createGallerySection('paintings-gallery', paintingsData);
    createGallerySection('world-gallery', worldData);
};

// دوال التحكم بالنافذة المنبثقة التفاعلية وعرض البيانات
function openMuseum(title, source, description, imgSrc) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalArtist').innerText = `المصدر: ${source}`;
    document.getElementById('modalDesc').innerText = description;
    document.getElementById('modalImg').src = imgSrc;
    
    document.getElementById('museumModal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // إيقاف تمرير خلفية الموقع أثناء القراءة
}

function closeMuseum() {
    document.getElementById('museumModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // إعادة تفعيل التمرير الطبيعي للموقع
}









// دوال التحكم في نافذة الاقتراحات المنبثقة
function openSuggestModal() {
    document.getElementById('suggestModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeSuggestModal(event) {
    // إغلاق النافذة فقط إذا ضغط المستخدم خارج الصندوق أو على زر الإغلاق
    if (!event || event.target === document.getElementById('suggestModal')) {
        document.getElementById('suggestModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}


function sendToWhatsApp() {
    
    
    const myPhoneNumber = "+201142403263"; 

    
    const visitorName = document.getElementById('visitorName').value.trim();
    const artifactName = document.getElementById('artifactName').value.trim();
    const artifactInfo = document.getElementById('artifactInfo').value.trim();

    
    if (visitorName === "" || artifactName === "" || artifactInfo === "") {
        alert("من فضلك املأ جميع الحقول أولاً قبل الإرسال! 😊");
        return;
    }

    
    const message = `مرحباً عيسى، لدي اقتراح لقطعة جديدة لمتحفك الرقمي:%0A%0A` +
                    `👤 *اسم الزائر:* ${visitorName}%0A` +
                    `📜 *اسم القطعة:* ${artifactName}%0A` +
                    `📝 *المعلومات المتوفرة:* ${artifactInfo}`;

    // فتح رابط الواتساب بالرسالة المجهزة
    const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
}




const textElement = document.getElementById('welcome-text');
const message = "مرحباً بك في متحف جوهرة الحضارة";
let i = 0;
let isDeleting = false;

function typeEffect() {
    textElement.textContent = message.substring(0, i);
    
    if (!isDeleting && i < message.length) i++;
    else if (isDeleting && i > 0) i--;
    else isDeleting = !isDeleting;

    setTimeout(typeEffect, isDeleting ? 50 : 150);
}

typeEffect();






window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-container');
    setTimeout(() => {
        loader.style.transition = 'opacity 0.5s';
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 3000); // إخفاء بعد 3 ثوانٍ ليتمكن المستخدم من رؤية الرسم
});





window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-container');
    setTimeout(() => {
        loader.style.transition = 'opacity 0.5s';
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 5300); 
});







// التشبيه
(function(){
  var STORAGE_KEY = "dyl_seen_v1";
  var RESULT_KEY = "dyl_result_v1";

  var questions = [
    {
      q:"ماذا تفضل؟",
      options:[
        {label:"القيادة", icon:"👑", trait:"leader"},
        {label:"التعلم", icon:"📚", trait:"sage"},
        {label:"المغامرة", icon:"⚔️", trait:"warrior"},
        {label:"الإبداع", icon:"🎨", trait:"builder"}
      ]
    },
    {
      q:"لو كنت في مصر القديمة، ماذا سيكون دورك؟",
      options:[
        {label:"فرعون", icon:"👑", trait:"leader"},
        {label:"كاتب", icon:"📚", trait:"sage"},
        {label:"قائد جيش", icon:"⚔️", trait:"warrior"},
        {label:"مهندس", icon:"🎨", trait:"builder"}
      ]
    },
    {
      q:"ما الصفة الأقرب لك؟",
      options:[
        {label:"الشجاعة", icon:"⚔️", trait:"warrior"},
        {label:"الحكمة", icon:"📚", trait:"sage"},
        {label:"الصبر", icon:"🎨", trait:"builder"},
        {label:"الذكاء", icon:"👑", trait:"leader"}
      ]
    },
    {
      q:"ما لونك المفضل؟",
      options:[
        {label:"الذهبي", icon:"👑", trait:"leader"},
        {label:"الأزرق", icon:"📚", trait:"sage"},
        {label:"الأحمر", icon:"⚔️", trait:"warrior"},
        {label:"الأخضر", icon:"🎨", trait:"builder"}
      ]
    },
    {
      q:"ماذا تحب أن تترك وراءك؟",
      options:[
        {label:"إنجازات عظيمة", icon:"👑", trait:"leader"},
        {label:"معرفة", icon:"📚", trait:"sage"},
        {label:"انتصارات", icon:"⚔️", trait:"warrior"},
        {label:"مبانٍ وآثار", icon:"🎨", trait:"builder"}
      ]
    }
  ];

  var results = {
    leader:{
      name:"رمسيس الثاني",
      tag:"الملك العظيم",
      desc:"روحك روح قائد. تحب أن تصنع القرار وتحمل المسؤولية، وتترك أثرًا يتحدث عنه التاريخ من بعدك، تمامًا كما فعل رمسيس الثاني الذي حكم لأكثر من ستين عامًا وترك أعظم المعابد والتماثيل."
    },
    sage:{
      name:"إمحوتب",
      tag:"الحكيم والمهندس",
      desc:"روحك روح باحث عن المعرفة. تفكر قبل أن تتصرف، وتؤمن أن العلم أقوى سلاح. إمحوتب لم يكن مجرد وزير، بل طبيب ومهندس وحكيم قُدّس اسمه بعد رحيله."
    },
    warrior:{
      name:"أحمس الأول",
      tag:"محرر الأرض",
      desc:"روحك روح مقاتل لا يعرف الاستسلام. تواجه الصعاب بشجاعة وتدافع عمّا تؤمن به، مثل أحمس الأول الذي طرد الهكسوس ووحّد مصر من جديد."
    },
    builder:{
      name:"سننموت",
      tag:"صانع الخلود",
      desc:"روحك روح مبدع يبني ولا يهدم. تُترجم أفكارك إلى شيء ملموس يبقى بعدك، مثل سننموت مهندس معبد الدير البحري الذي لا يزال قائمًا حتى اليوم."
    }
  };

  var current = 0;
  var scores = {leader:0, sage:0, warrior:0, builder:0};

  var overlay = document.getElementById('dylOverlay');
  var stageWelcome = document.getElementById('dylStageWelcome');
  var stageQuiz = document.getElementById('dylStageQuiz');
  var stageResult = document.getElementById('dylStageResult');
  var topbar = document.getElementById('dylTopbar');
  var topbarName = document.getElementById('dylTopbarName');

  function alreadySeen(){
    try{ return sessionStorage.getItem(STORAGE_KEY) === "1"; }
    catch(e){ return false; }
  }
  function markSeen(){
    try{ sessionStorage.setItem(STORAGE_KEY, "1"); }catch(e){}
  }
  function saveResult(name){
    try{ sessionStorage.setItem(RESULT_KEY, name); }catch(e){}
  }
  function loadResult(){
    try{ return sessionStorage.getItem(RESULT_KEY); }catch(e){ return null; }
  }

  function openModal(){
    overlay.classList.add('dyl-show');
  }
  function closeModal(){
    overlay.classList.remove('dyl-show');
    markSeen();
  }

  function showTopbar(name){
    topbarName.textContent = name;
    topbar.classList.add('dyl-topbar-show');
  }
  function hideTopbar(){
    topbar.classList.remove('dyl-topbar-show');
  }

  function showStage(el){
    [stageWelcome, stageQuiz, stageResult].forEach(function(s){ s.style.display = 'none'; });
    el.style.display = 'block';
  }

  function renderQuestion(){
    var item = questions[current];
    document.getElementById('dylQuestion').textContent = item.q;
    document.getElementById('dylProgressLabel').textContent = (current+1) + " / " + questions.length;
    document.getElementById('dylProgress').style.width = (((current+1)/questions.length)*100) + "%";

    var wrap = document.getElementById('dylOptions');
    wrap.innerHTML = "";
    item.options.forEach(function(opt){
      var btn = document.createElement('button');
      btn.className = 'dyl-option';
      btn.innerHTML = '<span class="dyl-icon">'+opt.icon+'</span><span>'+opt.label+'</span>';
      btn.addEventListener('click', function(){
        scores[opt.trait]++;
        current++;
        if(current < questions.length){
          renderQuestion();
        } else {
          renderResult();
        }
      });
      wrap.appendChild(btn);
    });
  }

  function topTrait(){
    var best = 'leader', max = -1;
    Object.keys(scores).forEach(function(k){
      if(scores[k] > max){ max = scores[k]; best = k; }
    });
    return best;
  }

  function renderResult(){
    var trait = topTrait();
    var r = results[trait];
    document.getElementById('dylResultName').textContent = r.name;
    document.getElementById('dylResultTag').textContent = r.tag;
    document.getElementById('dylResultDesc').textContent = r.desc;
    showStage(stageResult);
    saveResult(r.name);
  }

  document.getElementById('dylStart').addEventListener('click', function(){
    current = 0;
    scores = {leader:0, sage:0, warrior:0, builder:0};
    showStage(stageQuiz);
    renderQuestion();
  });

  document.getElementById('dylSkip').addEventListener('click', closeModal);
  document.getElementById('dylClose').addEventListener('click', closeModal);

  document.getElementById('dylEnter').addEventListener('click', function(){
    closeModal();
    var name = document.getElementById('dylResultName').textContent;
    showTopbar(name);
  });

  document.getElementById('dylShare').addEventListener('click', function(){
    var name = document.getElementById('dylResultName').textContent;
    var text = "اكتشفت أن أثري هو " + name + " في متحف جوهرة الحضارة، اكتشف أثرك أنت كمان:";
    if(navigator.share){
      navigator.share({ title:"اكتشف أثرك", text:text, url:location.href }).catch(function(){});
    } else {
      navigator.clipboard.writeText(text + " " + location.href).then(function(){
        var btn = document.getElementById('dylShare');
        var original = btn.textContent;
        btn.textContent = "تم نسخ الرابط";
        setTimeout(function(){ btn.textContent = original; }, 2000);
      });
    }
  });

  document.getElementById('dylTopbarClose').addEventListener('click', hideTopbar);

  document.getElementById('dylTopbarRetake').addEventListener('click', function(){
    hideTopbar();
    current = 0;
    scores = {leader:0, sage:0, warrior:0, builder:0};
    showStage(stageWelcome);
    openModal();
  });

  overlay.addEventListener('click', function(e){
    if(e.target === overlay) closeModal();
  });

  var savedResult = loadResult();
  if(savedResult){
    showTopbar(savedResult);
  }

  if(!alreadySeen()){
    window.addEventListener('load', function(){
      setTimeout(openModal, 400);
    });
  }
})();




// إضافة حدث عند الضغط على زر صانع المتحف
document.querySelector('.nav-builder-btn').addEventListener('click', function(e) {
    console.log("جاري التوجه إلى بورتفوليو صانع المتحف...");
    // يمكنك هنا إضافة أي كود إضافي قبل الانتقال إذا أردت
});