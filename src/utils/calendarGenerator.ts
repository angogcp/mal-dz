import { School } from '../types/school';

/**
 * Format a Date or date string (YYYY-MM-DD) into ICS format (YYYYMMDD)
 */
function formatDateToICS(dateStr: string): string {
  // If format is like YYYY-MM-DD
  const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (match) {
    return `${match[1]}${match[2]}${match[3]}`;
  }
  // Fallback
  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}${m}${day}`;
  }
  return '';
}

/**
 * Escape text for ICS format
 */
function escapeICS(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
}

/**
 * Generate an .ics file string for a single school's admission milestones
 */
export function generateSchoolICS(school: School, lang: 'zh-Hans' | 'zh-Hant' = 'zh-Hans'): string {
  const intake = school.admission_intake;
  if (!intake) return '';

  const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const schoolName = school.name_zh;

  let events = '';

  // 1. Entrance Exam Event
  if (intake.entrance_exam_date && intake.entrance_exam_date.match(/^\d{4}-\d{2}-\d{2}/)) {
    const examDateICS = formatDateToICS(intake.entrance_exam_date);
    events += `BEGIN:VEVENT
UID:exam-${school.school_id}-${intake.intake_year}@maldz.vercel.app
DTSTAMP:${now}
DTSTART;VALUE=DATE:${examDateICS}
DTEND;VALUE=DATE:${examDateICS}
SUMMARY:${escapeICS(`【独中入学考试】${schoolName} 2026初一新生甄拔考`)}
DESCRIPTION:${escapeICS(`考试科目：${intake.exam_subjects?.join('、') || '华国英数'}\\n考务说明：${intake.exam_format || '闭卷笔试'}\\n考场：${intake.exam_venue || school.location.address}\\n放榜日：${intake.result_release_date || '考后公布'}`)}
LOCATION:${escapeICS(school.location.address)}
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:${escapeICS(`提醒：明天是【${schoolName}】初一新生入学考试！`)}
TRIGGER:-P1D
END:VALARM
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:${escapeICS(`提醒：距离【${schoolName}】入学考还有3天，请检查文具与准考证！`)}
TRIGGER:-P3D
END:VALARM
END:VEVENT
`;
  }

  // 2. Registration Deadline Event
  if (intake.registration_deadline && intake.registration_deadline.match(/^\d{4}-\d{2}-\d{2}/)) {
    const regDateICS = formatDateToICS(intake.registration_deadline);
    events += `BEGIN:VEVENT
UID:reg-${school.school_id}-${intake.intake_year}@maldz.vercel.app
DTSTAMP:${now}
DTSTART;VALUE=DATE:${regDateICS}
DTEND;VALUE=DATE:${regDateICS}
SUMMARY:${escapeICS(`【报名截止提醒】${schoolName} 初一新生报名最后一天`)}
DESCRIPTION:${escapeICS(`报名截止日，请确保已提交小五/小六成绩单并缴付报考费。\\n官网：${school.contact.website_url || 'https://mal-dz.vercel.app'}`)}
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:${escapeICS(`紧急提醒：今天截止【${schoolName}】初一报名！`)}
TRIGGER:-PT9H
END:VALARM
END:VEVENT
`;
  }

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//DuZhongTong//Malaysian Independent High Schools Intake Calendar//ZH
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:${escapeICS(`独中通 - ${schoolName} 2026招考日历`)}
X-WR-TIMEZONE:Asia/Kuala_Lumpur
${events}END:VCALENDAR`;
}

/**
 * Generate a complete .ics calendar for all 63 schools (or major intake events)
 */
export function generateAllIntakeICS(schools: School[]): string {
  const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  let events = '';

  schools.forEach((school) => {
    const intake = school.admission_intake;
    if (!intake || !intake.entrance_exam_date) return;

    if (intake.entrance_exam_date.match(/^\d{4}-\d{2}-\d{2}/)) {
      const examDateICS = formatDateToICS(intake.entrance_exam_date);
      events += `BEGIN:VEVENT
UID:all-exam-${school.school_id}@maldz.vercel.app
DTSTAMP:${now}
DTSTART;VALUE=DATE:${examDateICS}
DTEND;VALUE=DATE:${examDateICS}
SUMMARY:${escapeICS(`【独中统考日】${school.name_zh} 初一入学试 (${school.location.state})`)}
DESCRIPTION:${escapeICS(`学校：${school.name_zh}\\n州属：${school.location.state} · ${school.location.city}\\n考试科目：${intake.exam_subjects?.join('、') || '华国英数'}\\n直录保送条件：${intake.direct_admission_criteria?.[0] || '详询校方'}\\n报名截止：${intake.registration_deadline || '9月'}`)}
LOCATION:${escapeICS(school.location.address)}
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:${escapeICS(`明日本地独中考试：【${school.name_zh}】！`)}
TRIGGER:-P1D
END:VALARM
END:VEVENT
`;
    }
  });

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//DuZhongTong//All 63 Malaysian Independent High Schools Intake Calendar//ZH
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:2026全马华文独中初一入学甄试与招生日历
X-WR-TIMEZONE:Asia/Kuala_Lumpur
${events}END:VCALENDAR`;
}

/**
 * Trigger download of the .ics file in browser
 */
export function downloadICS(filename: string, icsContent: string): void {
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename.endsWith('.ics') ? filename : `${filename}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
