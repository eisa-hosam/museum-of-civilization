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
        img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH-8wP_Dmt-1Enqdm1fNzmhUwm-CHlg8e5TGCfHrIm9uXdnzsm0ifpolApBDIkSFMbut7dFXCSi-oc5phiDTmEUKyiTZhze06gqYma-r5d2YQWMuXw6FGPmXe6yiWc1E52Nc_PQ=s1360-w1360-h1020-rw" // أو ضع الرابط المباشر للصورة هنا
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
    }
];

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

// دالة تجميع البيانات وإرسالها إلى الواتساب الخاص بك
function sendToWhatsApp() {
    // ضع رقم هاتفك هنا بدلاً من هذا الرقم (اكتبه بالصيغة الدولية بدون أصفار أو علامة +)
    // مثال لرقـم مصري: 2010xxxxxxxx
    const myPhoneNumber = "+201142403263"; 

    // جلب القيم التي كتبها المستخدم في الخانات
    const visitorName = document.getElementById('visitorName').value.trim();
    const artifactName = document.getElementById('artifactName').value.trim();
    const artifactInfo = document.getElementById('artifactInfo').value.trim();

    // التأكد من أن المستخدم ملأ الخانات الأساسية
    if (visitorName === "" || artifactName === "" || artifactInfo === "") {
        alert("من فضلك املأ جميع الحقول أولاً قبل الإرسال! 😊");
        return;
    }

    // تجهيز نص الرسالة المنظم لكي يصلك على الواتساب
    const message = `مرحباً عيسى، لدي اقتراح لقطعة جديدة لمتحفك الرقمي:%0A%0A` +
                    `👤 *اسم الزائر:* ${visitorName}%0A` +
                    `📜 *اسم القطعة:* ${artifactName}%0A` +
                    `📝 *المعلومات المتوفرة:* ${artifactInfo}`;

    // فتح رابط الواتساب بالرسالة المجهزة
    const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
}

// في ملف script.js
const webAppUrl = "https://script.google.com/macros/s/AKfycbyvQJ96TciC2S-jcg0uUWQ0WQ73RfvrWeXP-4tkCUkxsXfz80EOp9KzDTGV-aHIlUxF/exec";;

async function sendMessage() {
    const input = document.getElementById('userInput');
    const body = document.getElementById('chatBody');

    if (input.value.trim() !== "") {
        body.innerHTML += `<p><b>أنت:</b> ${input.value}</p>`;
        
        // إرسال السؤال للوسيط
        try {
            const response = await fetch(webAppUrl, {
                method: "POST",
                body: JSON.stringify({ message: input.value })
            });
            const data = await response.json();
            
            // عرض إجابة Gemini
            const answer = data.candidates[0].content.parts[0].text;
            body.innerHTML += `<p><b>المتحف:</b> ${answer}</p>`;
        } catch (error) {
            body.innerHTML += `<p style="color:red;">عذراً، حدث خطأ. تأكد من إعدادات الربط.</p>`;
        }
        
        input.value = "";
        body.scrollTop = body.scrollHeight; // لجعل الشاشة تنزل لأسفل مع الإجابة الجديدة
    }
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