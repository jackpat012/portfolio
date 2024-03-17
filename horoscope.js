/* Breakdown of array setup: index 0 - 8 refer to sign's "general disposition", with 0 - 2 being for the first third of the year, 3 - 5 being 2/3rds, and 6-8 being the last third. 
                             index 9 - 17 refer to sign's "job prospects", with 9 - 11 being "" .. 12 - 14 being "" .. and 15 - 17 being ""..
                             index 18 - 26 refer to sign's "relationship advice", with 18 - 20 being "".. 21 - 23 being "" .. and 24 - 26 being "" ..
*/

const _aries = [
    'Embrace new challenges, your energy sparks exciting opportunities ahead', 'Bold spirit shines, embrace challenges, conquer with resilience', 'Courageous strides pave paths, seek adventure, trust inner fire', 'Embrace spontaneity, ignite passions, navigate challenges with confidence', 'Channel passion wisely, collaborations enhance success, avoid unnecessary conflicts','Prioritize self-care, balance ambition with rest for sustained growth', 'Navigate relationships carefully, open communication fosters harmony and understanding','Embrace change with confidence, professional endeavors yield positive outcomes','Reflect on accomplishments, plan for future adventures, seize unexpected opportunities',
    'Bold career moves lead to recognition, embrace opportunities with enthusiasm', 'Professional drive surges, seize opportunities, excel with determination', 'Career ascent beckons; focus, assertiveness lead to success', 'Professional opportunities bloom; seize them with ambition and determination','Professional growth is favored, stay focused, and showcase your skills','Evaluate work-life balance, seek projects aligned with personal fulfillment','Networking is key; connect with mentors, explore new career avenues','Financial gains through strategic decisions, embrace challenges with confidence','Take initiative in career advancement, innovative ideas propel success',
    'Nurture connections, be attentive, sparks fly in new relationships', 'Aries: Love\'s flame ignites, deepen connections, embrace passion and vulnerability' ,'Relationships flourish, nurture bonds, communicate openly for lasting love', 'Aries: Love sparks fly, deepen connections, embrace vulnerability for harmony', 'Communicate openly, address concerns, cultivate a harmonious partnership','Balance independence and togetherness, strengthen emotional bonds with care','Resolve conflicts with empathy, deepen trust, foster a supportive connection','Surprise your partner, infuse excitement, and celebrate shared achievements.','Plan romantic getaways, prioritize quality time, explore new dimensions together'
    ]
    
    const _taurus = [
    'Embrace change, Taurus. New opportunities bring lasting fulfillment', 'Trust your instincts, Taurus; intuition guides you to success', 'Embrace change with patience; growth awaits, steadfast Taurus spirit', 'Steady progress brings inner peace. Embrace your stability, Taurus','Relationships bloom. Trust instincts for a harmonious journey, Taurus','Focus on self-care. Inner balance leads to external success','Career peak ahead. Seize opportunities with unwavering determination, Taurus','Social connections deepen. Collaborate for shared prosperity, Taurus','Reflect on achievements. Prepare for a transformative year\'s end',
    'New ventures arise. Embrace challenges, Taurus. Success is imminent', 'Career advancement beckons; seize challenges with unwavering determination', 'Professional breakthroughs on the horizon; stay diligent and adaptable', 'New opportunities arise; seize them with determination and confidence','Career advancements unfold. Seize opportunities with confidence and precision','Evaluate goals. Strategic planning ensures a prosperous job trajectory','Professional breakthroughs. Persevere with diligence and innovation, Taurus','Networking flourishes. Collaborate for career growth and recognition','Reflect on achievements. Prepare for a promising career finale',
    'Communicate openly. Strengthen bonds through understanding and compromise, Taurus', 'Harmony in love; cherish shared moments, nurture mutual understanding', 'Deep connections strengthen; nurture bonds with honesty and compassion', 'Romance blooms under the stars; express your heartfelt affections openly','Nurture romance. Quality time deepens connections. Prioritize love, Taurus','Reconnect emotionally. Patience and empathy fortify relationships. Prioritize harmony','Balance independence. Partnerships thrive when both flourish individually, Taurus','Express feelings honestly. Mutual understanding fuels love\'s growth, Taurus','Reflect on partnerships. Cultivate gratitude for a fulfilling relationship journey'
    ]
    
    const _gemini = [
    'Embrace change, newfound energy propels you forward. Stay adaptable', 'Embrace spontaneity, embrace change; new adventures await', 'Seek balance in all aspects; harmony brings fulfillment', 'Embrace adaptability, curiosity; thrive in versatility, communication', 'Communication thrives, seek meaningful connections. Express yourself creatively','Balance work and play, seize opportunities with confidence and charm','Dive into self-discovery, nurture inner growth, embrace spiritual pursuits','Navigate relationships, prioritize harmony. Cultivate a sense of partnership','Focus on health, both physical and mental. Embrace positive routines',
    'New opportunities arise, seize them with enthusiasm and innovation', 'Networking key to career advancement; connect, collaborate, excel', 'Innovative ideas propel career forward; embrace creativity', 'Navigate career shifts with agility, seize new opportunities', 'Collaborate, network, and showcase your skills. Career gains unfold','Ambitions soar, take calculated risks, aim for professional advancement','Innovate at work, explore fresh ideas. Your creativity stands out','Strengthen professional ties, embrace teamwork, align goals for success','Career breakthroughs unfold. Stay focused, ambitious strides await you',
    'Foster emotional connection, communicate openly, deepen bonds with sincerity', 'Seek harmony, prioritize compromise; love grows through shared experiences', 'Communicate openly, listen actively; love blossoms through understanding', 'Nurture trust, express feelings; deepen bonds, foster connections', 'Prioritize quality time, ignite passion, infuse romance into relationships','Resolve conflicts with empathy, nurture trust, build a solid foundation','Rediscover shared goals, invest in mutual growth, celebrate unity','Listen attentively, express feelings honestly, cultivate harmonious partnerships','Strengthen bonds through shared experiences, prioritize love, deepen commitment'
    ]
    
    const _cancer = [
    'Emotional depth enhances relationships, fostering deep connections and understanding', 'Reflect inward, Cancer. Self-discovery leads to profound clarity and insight', 'Seek balance, Cancer. Harmony found in embracing both solitude and sociability', 'Embrace change, Cancer. Flexibility brings unexpected blessings this cycle', 'Focus on career growth; strategic decisions lead to success','Personal goals flourish, creative endeavors bring joy and fulfillment','Nurture family bonds, find harmony amid life\'s challenges','Reflect on achievements, embrace transformation for personal evolution','Strengthen social ties, seize opportunities for new connections and collaborations',
    'Career advancements align with emotional intelligence, enhancing workplace harmony', 'Navigate challenges, Cancer. Persistence paves the way to career advancement', 'Focus on growth, Cancer. New pathways emerge; seize them confidently', 'Opportunities knock; be ready to showcase your skills, Cancer', 'New opportunities arise; networking and adaptability lead to success','Professional growth through creative pursuits, gain recognition for innovative approaches','Navigating challenges at work with resilience fosters long-term success','Reflect on career achievements, prepare for transformative shifts ahead','Embrace teamwork, seize chances to showcase leadership and collaboration',
    'Prioritize open communication, strengthen emotional bonds with loved ones', 'Communicate openly, Cancer. Authentic dialogue strengthens bonds, fostering deeper connections', 'Open your heart, Cancer. Love blooms where vulnerability meets trust', 'Nurture bonds, Cancer. Deep connections blossom with attentive care', 'Balance personal and relationship needs, fostering mutual understanding','Spice up romance, explore shared interests for a deeper connection','Nurture trust, navigate challenges together, reinforcing the foundation of love','Reflect on relationship dynamics, embrace positive changes for mutual growth','Foster unity through shared goals; communication is key for harmony'
    ]
    
    const _leo = [
    'Roaring start! Confidence fuels success; embrace bold opportunities, Leo', 'Radiate positivity; your warmth inspires others, brightening every interaction', 'Harness inner strength; challenges yield growth and resilience', 'Embrace change with confidence; new beginnings bring unexpected joy', 'Social magnetism peaks. Collaborate, network—your charisma sparks alliances, Leo','Creativity soars. Express yourself authentically, bask in artistic achievements','Focus sharpens. Dive into projects; meticulous efforts yield grand results','Relationships deepen. Strengthen bonds; love and loyalty illuminate your path','Reflect and recharge. Spiritual pursuits bring clarity; rejuvenate for triumphs',
    'Career breakthroughs beckon. Bold moves pay off, elevate professionally', 'Professional breakthroughs beckon; stay focused, success is within reach', 'Opportunities abound; seize the moment, showcase your talents boldly', 'Ambition and diligence pave the path to career success', 'Networking key. Strengthen connections; lucrative opportunities arise, Leo','Leadership shines. Seize managerial roles; your charisma inspires colleagues','Diligence rewarded. Tackle challenges; hard work cultivates career advancements','Collaborate wisely. Team synergy propels projects; career milestones achieved','Strategic planning. Chart ambitious course; career ascent accelerates, Leo',
    'Communicate openly. Strengthen bonds through honest dialogue; build trust', 'Harmony and understanding deepen bonds; love flourishes, hearts unite', 'Romance blooms in unexpected places; be open to new connections', 'Sparks fly as passion ignites; love blossoms under Leo\'s charm', 'Foster intimacy. Quality time deepens connections; cherish shared moments','Balance independence. Encourage personal growth; love thrives through autonomy','Patience prevails. Navigate challenges calmly; understanding fortifies relationships, Leo','Embrace vulnerability. Share feelings openly; deepen emotional connections, Leo','Renewed commitment. Nurture love; shared goals strengthen relationship foundations'
    ]
    
    const _virgo = [
    'Embrace new opportunities with confidence, Virgo\'s time to shine', 'Stay grounded amidst chaos; inner strength guides you forward', 'Prioritize self-care; balance restores harmony and vitality', 'Embrace change with confidence; growth follows adaptability', 'Navigate challenges with grace, stay grounded in your convictions','Embrace change, prioritize self-care for inner balance and harmony','Channel creativity into projects, connect with loved ones deeply','Focus on personal growth, seek clarity in relationships and goals','Embrace transformation, trust in your intuition for guidance ahead',
    'Seize career opportunities, Virgo; success aligns with dedication', 'Professional breakthroughs await; seize chances with confidence and diligence', 'Creativity sparks success; innovative approaches elevate your career path', 'New opportunities on the horizon; seize them with determination', 'Navigate challenges at work, stay adaptable, and persevere diligently','Innovate in your career, explore new paths with confidence','Collaborate effectively, showcase leadership skills for professional advancement','Refine skills, focus on career goals with precision and determination','Embrace career transformations, trust your instincts for lasting success',
    'Communicate openly, deepen connections through shared experiences and understanding', 'Cultivate patience; love grows stronger with time and understanding', 'Nurture emotional connections; intimacy flourishes through mutual vulnerability and trust', 'Harmony blossoms in communication; deepen bonds with understanding', 'Navigate relationship challenges with empathy, prioritize mutual growth and compromise','Cultivate romance, express feelings authentically, nurture emotional bonds','Strengthen partnerships through effective communication, prioritize mutual support','Reflect on relationship dynamics, foster trust, and create lasting foundations','Embrace transformation in relationships, prioritize love and authentic connections'
    ]
    
    const _libra = [
    'Balance reigns, embrace change with poise, seek harmony within', 'Balance within, reflect harmony without, navigate life\'s ebbs', 'Seek equilibrium, embrace change; inner balance fuels growth journey', 'Embrace balance, harmony; inner peace guides outer journey', 'Social energies peak, nurture connections, explore new partnerships blossoming','Dive into self-reflection, align ambitions, embrace transformation gracefully','Passion ignites, prioritize self-care, align desires with balanced intentions','Revitalize personal goals, navigate challenges with diplomacy and tact','Relationships deepen, communication thrives, harmonize emotions for lasting connections',
    'New opportunities arise, showcase skills, balance ambition with adaptability', 'Balance ambition, focus on growth, seize collaborative opportunities', 'Ambitions soar, balance ambition with practicality, seize opportunities', 'Opportunities align, seize with confidence, balance priorities wisely', 'Collaborate effectively, career networking flourishes, pursue innovative projects boldly','Assess career path, strategic moves enhance prospects, stay adaptable','Professional growth accelerates, seize leadership roles, embrace challenges confidently','Career momentum builds, focus on skill enhancement, leverage connections','Job offers manifest, showcase achievements, embrace career advancements joyfully',
    'Communicate openly, deepen connections, nurture emotional bonds consistently', 'Embrace vulnerability, deepen connections, harmony blooms, cherish intimacy', 'Harmony reigns, deepen bonds, communicate openly, love strengthens', 'Romance blooms, harmony deepens; cherish connections, nurture bonds', 'Collaborate on goals, express feelings, prioritize shared experiences joyfully','Evaluate relationship dynamics, foster trust, embrace growth together gracefully','Reignite passion, prioritize quality time, celebrate each other\'s successes','Strengthen emotional intimacy, resolve conflicts gently, prioritize mutual understanding','Plan for the future, communicate long-term goals, celebrate milestones joyfully'
    ]
    
    const _scorpio = [
    'Intense focus fuels success; embrace change with determination', 'Intense emotions surface; seek balance through self-awareness and mindfulness', 'Embrace change; adaptability brings inner peace and fulfillment', 'Introspective energy guides you; embrace personal growth and transformation', 'Love blooms, but beware hidden challenges; trust instincts deeply','Balance relationships, work; financial gains highlight stability, seek harmony','Passion ignites, explore creativity; beware impulse, channel energy wisely','Deep connections strengthen; navigate challenges with patience, strategic thinking','Seek clarity in relationships; financial opportunities arise, seize responsibly',
    'Career growth beckons, seize opportunities with confidence and ambition', 'Financial gains manifest; innovative ideas lead to lucrative opportunities', 'Professional breakthroughs on the horizon; persistence yields remarkable success', 'Career advancement awaits; seize opportunities with confidence and determination', 'Unexpected changes bring new paths; adaptability leads to success','Professional relationships flourish, networking yields promising opportunities','Take calculated risks, pursue passions with determination; success awaits','Focus on honing skills, seek mentorship; new job prospects emerge','Embrace innovation, explore new ventures; lucrative opportunities manifest',
    'Foster open communication; love deepens with genuine understanding, patience', 'Love blossoms abundantly; deepen bonds through open communication and understanding', 'Harmonious dynamics prevail; cherish love\'s tender moments with sincerity', 'Deep connections flourish; nurture bonds with trust and passion', 'Navigate challenges together; prioritize trust and mutual growth, reassess','Strengthen emotional bonds; prioritize quality time, balance responsibilities harmoniously','Rediscover passion, nurture intimacy; address conflicts with empathy and compromise','Reconnect emotionally; communication is key for a thriving relationship','Plan shared goals; celebrate milestones, keep communication strong, embrace growth'
    ]
    
    const _sagittarius = [
    'Embrace new opportunities; luck and optimism guide your journey', 'Embrace change, adaptability is key to success, stay resilient', 'Balance optimism with practicality, stay focused, trust your journey', 'Embrace spontaneity, seek adventure, trust your instincts this month', 'Seek balance, adapt to change; relationships bloom, stay open-hearted','Recharge with self-care; introspection brings clarity and personal growth','Collaborate, embrace partnerships; financial gains through shared endeavors','Assertive communication; overcome challenges with confidence and strategic thinking','Focus on health; spiritual pursuits bring fulfillment and inner peace',
    'New career paths emerge; seize opportunities, showcase versatility', 'New opportunities arise, take bold steps forward, Sagittarius', 'Professional growth awaits, showcase skills, Sagittarius shines in leadership', 'Opportunity knocks, seize it with confidence and ambition, Sagittarius', 'Collaborate with colleagues; innovative ideas elevate work environment','Assess career goals; networking opens doors to exciting possibilities','Financial gains through work; explore new projects, showcase talents','Assertive leadership; strategic decisions lead to career advancements','Enhance skills; unexpected opportunities bring career growth and recognition',
    'Communicate openly; deepen connections through honesty and understanding', 'Nurture connections, prioritize understanding, love blossoms for Sagittarius', 'Communicate openly, deepen bonds, Sagittarius radiates warmth and passion', 'Open your heart, love may surprise you, Sagittarius charm shines', 'Nurture emotional bonds; prioritize quality time, foster mutual support','Evaluate partnerships; ensure shared values align for lasting harmony','Strengthen commitment; prioritize trust, and invest in shared goals','Balance independence; mutual respect fuels a thriving partnership','Spice up romance; embrace spontaneity for renewed passion and joy'
    ]
    
    const _capricorn = [
    'Ambitious energy fuels success; embrace challenges, Capricorn triumphs await', 'Stay grounded amidst chaos. Stability emerges from inner resilience, Capricorn', 'Trust intuition; inner wisdom guides your path, Capricorn journeying forward', 'Embrace change, Capricorn. Flexibility brings growth and opportunities', 'Focus on partnerships; collaboration brings unexpected prosperity and fulfillment','Self-discovery unfolds; nurture personal growth, spiritual insights guide Capricorn','Finances flourish; strategic investments yield lucrative rewards, Capricorn financial ascent','Love\'s sparkle beckons; deepen connections, Capricorn\'s heart finds enduring joy','Navigate career shifts; adaptability propels Capricorn to professional triumphs',
    'Professional breakthroughs; capitalize on opportunities, Capricorn career soars high', 'Ambition fuels progress. Pursue goals boldly; opportunities align favorably', 'Innovation sparks career advancement. Embrace creativity; success follows exploration', 'Diligence pays off. Keep focused; success awaits your perseverance', 'Collaborative ventures bloom; network expansively, job prospects flourish for Capricorn','Strategic career moves; seize leadership roles, Capricorn\'s success trajectory solidifies','Financial gains through work; Capricorn\'s diligence sparks lucrative job prospects','Job satisfaction peaks; find joy in daily tasks, Capricorn excels','New career avenues beckon; explore boldly, Capricorn\'s horizons expand',
    'Communicate openly; strengthen bonds, Capricorn relationships deepen with trust', 'Prioritize communication. Listen attentively; understanding strengthens bonds, Capricorn', 'Nurture bonds with patience. Authenticity deepens connections, fostering lasting love', 'Open your heart; genuine connections await your authenticity, Capricorn', 'Balance personal and shared goals; harmony reigns in relationships','Nurture emotional connections; patience fosters lasting love for Capricorn','Collaborate with partner; mutual goals amplify Capricorn relationship bliss','Prioritize quality time; rekindle romance, Capricorn love blossoms','Embrace compromise; relationships thrive when Capricorn finds middle ground'
    ]
    
    const _aquarius = [
    'Innovative energy propels you forward; embrace change and growth', 'Embrace individuality, radiate compassion, embrace the winds of change', 'Embrace uniqueness, channel creativity, inspire with visionary thinking', 'Embrace change, find balance, seek truth amidst chaos', 'Social connections flourish; focus on collaboration and networking success','Deep introspection guides your path; trust inner wisdom and intuition','Career gains highlight this period; assert yourself with confidence','Embrace new learning opportunities; expand knowledge and horizons','Relationships take center stage; nurture connections with authenticity',
    'Career breakthroughs emerge; seize opportunities with determination and enthusiasm', 'Explore unconventional paths, success lies beyond tradition', 'Networking brings opportunities, seize them with confidence', 'Innovation leads to career breakthroughs', 'Teamwork leads to success; collaborate for professional advancements and recognition','Focus on skill development; refine your expertise for career elevation','Job offers and promotions arise; assert your value confidently','Seek mentorship for career growth; embrace guidance and expand skills','Networking boosts job prospects; connect authentically for exciting opportunities',
    'Foster open communication; deepen bonds through honesty and understanding', 'Foster freedom, cherish intellect, love evolves in synergy', 'Embrace authenticity, cultivate trust, love blossoms harmoniously', 'Nurture communication, sparks ignite deeper connections', 'Cultivate shared goals; strengthen relationships with mutual aspirations and support','Balance independence and togetherness; prioritize personal growth and connection','Spice up romance; inject passion into relationships with creativity and spontaneity','Resolve conflicts with empathy; build trust through active listening','Plan shared experiences; create lasting memories to strengthen connections'
    ]
    
    const _pisces = [
    'Pisces, embrace new beginnings, success flows through adaptability and intuition', 'Reflect on past lessons, embrace self-care, trust intuition deeply', 'Seek balance, embrace change, trust inner wisdom, stay adaptable', 'Embrace intuition, find solace in creativity, trust inner guidance', 'Navigate challenges with compassion, relationships bloom, embrace creative endeavors','Focus on self-care, unexpected opportunities bring career growth and stability','Deepen connections, financial prospects rise, balance work and personal life','Spiritual growth, navigate changes with patience, trust your instincts','Prioritize health, align goals with passion, embrace positive transformations',
    'New career paths emerge, seize opportunities, trust your abilities', 'Seek innovation, trust instincts, explore unconventional paths for success', 'New opportunities arise, excel in teamwork, focus on communication', 'Opportunities bloom, explore new ventures, trust instincts in career', 'Networking fuels success, stay adaptable, unexpected promotions arise','Job stability strengthens, showcase skills, welcome mentorship opportunities','Financial gains, consider strategic moves, seize leadership roles','Job satisfaction rises, focus on personal growth, trust intuition','Career breakthroughs, seek innovation, collaborations lead to success',
    'Nurture communication, deepen emotional bonds, cherish shared dreams', 'Nurture bonds, communicate openly, prioritize mutual understanding and support', 'Prioritize harmony, deepen bonds, express love openly and sincerely', 'Love deepens, understand emotions, nurture connections, communicate openly with partner', 'Prioritize quality time, embrace spontaneity, cultivate trust and passion','Balance independence, express needs, forge stronger emotional connections','Communicate openly, navigate challenges together, build a solid foundation','Prioritize emotional well-being, practice patience, deepen spiritual connection','Reignite romance, explore shared interests, celebrate each other\'s achievements'
    ]
    
    // Declaring global variables
    
    let tertiary = 0;
    let sign = 0;
    let indexDisposition = 0;
    let indexJob = 0;
    let indexRelationship = 0;
    let indexArray = [];

    let disposition = '';
    let job = ''
    let relationship = '';
    let signOutput = ''
    let error = '';
    
    // Converting birthday into day of the year
    
    const convertBirthday = (birthMonth, birthDay) => {
        let birthConverter = 0;

        error = '';
        
        if (birthDay < 1 || birthDay > 31) {
            error = ('Invalid day selected, please enter a day between 1 - 31');
            return;
        }
        
        if (birthMonth < 1 || birthMonth > 12) {
            error = ('Invalid month selected, please enter a month between 1 - 12');
            return;
        }
    
        switch (birthMonth) {
            case 1:
                birthConverter = 0;
                break;
    
            case 2:
                birthConverter = 31;
                break;
                
            case 3:
                birthConverter = 59;
                break;
    
            case 4:
                birthConverter = 90;
                break;
            
            case 5:
                birthConverter = 120;
                break;
            
            case 6:
                birthConverter = 151;
                break;
            
            case 7:
                birthConverter = 181;
                break;
            
            case 8:
                birthConverter = 212;
                break;
    
            case 9:
                birthConverter = 243;
                break;
    
            case 10:
                birthConverter = 273;
                break;
    
            case 11:
                birthConverter = 304;
                break;
    
            case 12:
                birthConverter = 334;
                break;
        }
        // Adds days from months passed, with day of the month.
        birthConverter += birthDay;
        // Assigns sign based on day of the year the user is born.
        if (birthConverter >= 80 && birthConverter <= 109) {
            sign = 'Aries';
        } else if (birthConverter >= 110 && birthConverter <= 140) {
            sign = 'Taurus';
        } else if (birthConverter >= 141 && birthConverter <= 171) {
            sign = 'Gemini';
        } else if (birthConverter >= 172 && birthConverter <= 203) {
            sign = 'Cancer';
        } else if (birthConverter >= 204 && birthConverter <= 234) {
            sign = 'Leo';
        } else if (birthConverter >= 235 && birthConverter <= 265) {
            sign = 'Virgo';
        } else if (birthConverter >= 266 && birthConverter <= 295) {
            sign = 'Libra';
        } else if (birthConverter >= 296 && birthConverter <= 325) {
            sign = 'Scorpio';
        } else if (birthConverter >= 326 && birthConverter <= 355) {
            sign = 'Sagittarius';
        } else if ((birthConverter >= 356 && birthConverter <= 366) || (birthConverter >= 1 && birthConverter <= 19)) {
            sign = 'Capricorn';
        } else if (birthConverter >= 20 && birthConverter <= 49) {
            sign = 'Aquarius';
        } else if (birthConverter >= 20 && birthConverter <= 79) {
            sign = 'Pisces';
        }
    
        return sign;
    }
    
    // Function to find what third of the year it currently is.
    
    const getCurrentThird = () => {
        let today = new Date();
        let mm = today.getMonth() + 1;
    
        if (mm >= 1 && mm <= 4) {
            tertiary = 0;
        } else if (mm >= 5 && mm <= 8) {
            tertiary = 1;
        } else if (mm >= 9 && mm <= 12) {
            tertiary = 2;
        }
    }
    
    // Function to get index for horoscope generation.
    
    const indexGenerator = () => {
        if (tertiary === 0) {
            indexDisposition = Math.round(Math.random() * 2);
            indexJob = Math.round(Math.random() * 2) + 9;
            indexRelationship = Math.round(Math.random() * 2) + 18;
        } else if (tertiary === 1) {
            indexDisposition = Math.round(Math.random() * 2) + 3;
            indexJob = Math.round(Math.random() * 2) + 12;
            indexRelationship = Math.round(Math.random() * 2) + 21;
        } else if (tertiary === 2) {
            indexDisposition = Math.round(Math.random() * 2) + 6;
            indexJob = Math.round(Math.random() * 2) + 15;
            indexRelationship = Math.round(Math.random() * 2) + 24;
        }
    
    }
    
    // Function to generate horoscope.
    
    const generateHoroscope = () => {
        
        signOutput = (`Your sign is ${sign}.`);
    
        if (sign === 'Aries') {
            disposition = (`${_aries[indexDisposition]}.`);
            job = (`${_aries[indexJob]}.`);
            relationship =(`${_aries[indexRelationship]}.`);
        } else if (sign === 'Taurus') {
            disposition = (`${_taurus[indexDisposition]}.`);
            job = (`${_taurus[indexJob]}.`);
            relationship =(`${_taurus[indexRelationship]}.`);
        } else if (sign === 'Gemini') {
            disposition = (`${_gemini[indexDisposition]}.`);
            job = (`${_gemini[indexJob]}.`);
            relationship = (`${_gemini[indexRelationship]}.`);
        } else if (sign === 'Cancer') {
            disposition = (`${_cancer[indexDisposition]}.`);
            job = (`${_cancer[indexJob]}.`);
            relationship = (`${_cancer[indexRelationship]}.`);
        } else if (sign === 'Leo') {
            disposition = (`${_leo[indexDisposition]}.`);
            job = (`${_leo[indexJob]}.`);
            relationship = (`${_leo[indexRelationship]}.`);
        } else if (sign === 'Virgo') {
            disposition = (`${_virgo[indexDisposition]}.`);
            job = (`${_virgo[indexJob]}.`);
            relationship = (`${_virgo[indexRelationship]}.`);
        } else if (sign === 'Libra') {
            disposition = (`${_libra[indexDisposition]}.`);
            job = (`${_libra[indexJob]}.`);
            relationship = (`${_libra[indexRelationship]}.`);
        } else if (sign === 'Scorpio') {
            disposition = (`${_scorpio[indexDisposition]}.`);
            job = (`${_scorpio[indexJob]}.`);
            relationship = (`${_scorpio[indexRelationship]}.`);
        } else if (sign === 'Sagittarius') {
            disposition = (`${_sagittarius[indexDisposition]}.`);
            job = (`${_sagittarius[indexJob]}.`);
            relationship = (`${_sagittarius[indexRelationship]}.`);
        } else if (sign === 'Capricorn') {
            disposition = (`${_capricorn[indexDisposition]}.`);
            job = (`${_capricorn[indexJob]}.`);
            relationship = (`${_capricorn[indexRelationship]}.`);
        } else if (sign === 'Aquarius') {
            disposition = (`${_aquarius[indexDisposition]}.`);
            job = (`${_aquarius[indexJob]}.`);
            relationship = (`${_aquarius[indexRelationship]}.`);
        } else if (sign === 'Pisces') {
            disposition = (`${_pisces[indexDisposition]}.`);
            job = (`${_pisces[indexJob]}.`);
            relationship = (`${_pisces[indexRelationship]}.`);
        }
        
        return error, signOutput, disposition, job, relationship;
    }
    
// All-in-one function.
const finalGenerator = (birthMonth, birthDay) => {
    convertBirthday(birthMonth,birthDay);
    getCurrentThird();
    indexGenerator();
    generateHoroscope();
}

let submitButton = document.getElementById('button');

submitButton.onclick = function() {
    let day = Number(document.getElementById('day').value);
    let month = Number(document.getElementById('month').value);

    finalGenerator(month, day);

    let generatorOutput = document.getElementById('generatorOutput');

    generatorOutput.innerHTML = '';

    if (error.length > 0) {
        generatorOutput.innerHTML = `${error}`;
    } else if (error.length === 0) {
        generatorOutput.innerHTML = `${error}${signOutput}<br><br>${disposition}<br>${job}<br>${relationship}`;
    }

    generatorOutput.style.display = 'block';
    generatorOutput.style.backgroundColor = '#232323';
    generatorOutput.style.borderRadius = '0.9rem';
    generatorOutput.style.border = '0.2rem solid black';
    generatorOutput.style.padding = '0.7rem';
    generatorOutput.style.margin = '1rem';
    generatorOutput.style.color = '#B3A622';
    generatorOutput.style.textShadow = '0.1rem 0.1rem black';
    generatorOutput.style.boxShadow = '0 0 0.5rem black, 0 0 0.7rem black inset';
} 
