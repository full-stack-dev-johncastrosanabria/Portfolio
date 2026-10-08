"""Generate bilingual, selectable-text PDFs from the shared web CV data."""
import json
import os
import sys
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether

profile = json.load(sys.stdin)
font_dir = Path(os.environ.get('CV_FONT_DIR', '/System/Library/Fonts/Supplemental'))
if not (font_dir / 'Arial.ttf').exists():
    import reportlab
    font_dir = Path(reportlab.__file__).parent / 'fonts'
    regular, bold = 'Vera.ttf', 'VeraBd.ttf'
else:
    regular, bold = 'Arial.ttf', 'Arial Bold.ttf'
pdfmetrics.registerFont(TTFont('CV', str(font_dir / regular)))
pdfmetrics.registerFont(TTFont('CV-Bold', str(font_dir / bold)))
pdfmetrics.registerFontFamily('CV', normal='CV', bold='CV-Bold')
ink, accent, muted = colors.HexColor('#20252c'), colors.HexColor('#174e76'), colors.HexColor('#52606d')
body = ParagraphStyle('Body', fontName='CV', fontSize=9.2, leading=12.1, textColor=ink, spaceAfter=4)
heading = ParagraphStyle('Heading', parent=body, fontName='CV-Bold', fontSize=11, leading=14, textColor=accent, spaceBefore=11, spaceAfter=7, keepWithNext=True)
title = ParagraphStyle('Title', parent=body, fontName='CV-Bold', fontSize=22, leading=26, spaceAfter=8)
sub = ParagraphStyle('Sub', parent=body, fontName='CV-Bold', fontSize=10, leading=13, textColor=accent)
entry = ParagraphStyle('Entry', parent=body, fontName='CV-Bold', spaceBefore=7, keepWithNext=True)
meta = ParagraphStyle('Meta', parent=body, fontSize=8.5, leading=11, textColor=muted, keepWithNext=True)
bullet = ParagraphStyle('Bullet', parent=body, leftIndent=10, firstLineIndent=-8, spaceAfter=4)


def local(value, language):
    return value.get(language, value.get('es', '')) if isinstance(value, dict) else value


def paragraph(text, style=body):
    return Paragraph(escape(text), style)


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(accent)
    canvas.line(42, 33, A4[0] - 42, 33)
    canvas.setFont('CV', 8)
    canvas.setFillColor(muted)
    canvas.drawString(42, 20, 'John Castro Sanabria | Software Engineering & Applied AI')
    canvas.drawRightString(A4[0] - 42, 20, str(doc.page))
    canvas.restoreState()


out_dir = Path('public/resume')
out_dir.mkdir(parents=True, exist_ok=True)
for language in ('es', 'en'):
    en = language == 'en'
    story = [paragraph(profile['name'], title), paragraph(local(profile['title'], language), sub)]
    story.append(paragraph(f"{local(profile['location'], language)} | {profile['email']}", meta))
    link_labels = {'portfolio': 'Portfolio' if en else 'Portafolio', 'linkedin': 'LinkedIn', 'github': 'GitHub', 'x': 'X'}
    links = ' | '.join(f'<a href="{escape(url)}" color="#174e76">{link_labels[label]}</a>' for label, url in profile['links'].items())
    story.append(Paragraph(links, body))
    story.extend([paragraph('Professional Summary' if en else 'Resumen profesional', heading), paragraph(local(profile['summary'], language))])
    story.append(paragraph('Technical Skills' if en else 'Competencias técnicas', heading))
    for skill in profile['skills']:
        story.append(Paragraph(f"<b>{escape(local(skill['label'], language))}:</b> {escape(skill['items'])}", body))
    story.append(paragraph('Professional Experience' if en else 'Experiencia profesional', heading))
    for index, item in enumerate(profile['experience']):
        if index == 3:
            story.append(PageBreak())
            story.append(paragraph('Experience — continued' if en else 'Experiencia — continuación', heading))
        story.append(paragraph(local(item['role'], language), entry))
        story.append(paragraph(f"{item['company']} | {local(item['period'], language)}", meta))
        for text in local(item['achievements'], language):
            story.append(Paragraph('• ' + escape(text), bullet))
    story.append(paragraph('Selected Projects' if en else 'Proyectos destacados', heading))
    for project in profile['projects']:
        story.append(KeepTogether([
            Paragraph(f'<a href="{escape(project["href"])}" color="#174e76"><b>{escape(project["name"])}</b></a>', entry),
            paragraph(local(project['description'], language)),
        ]))
    story.append(paragraph('Education' if en else 'Educación', heading))
    for item in profile['education']:
        story.append(KeepTogether([paragraph(local(item['degree'], language), entry), paragraph(f"{item['institution']} | {item['period']}", body)]))
    story.extend([paragraph('Certifications' if en else 'Certificaciones', heading), paragraph(local(profile['credentials'], language))])
    story.extend([paragraph('Languages' if en else 'Idiomas', heading), paragraph(local(profile['languages'], language)), Spacer(1, 4)])
    output = out_dir / f'John_Castro_Sanabria_CV_{language.upper()}.pdf'
    doc = SimpleDocTemplate(str(output), pagesize=A4, leftMargin=42, rightMargin=42, topMargin=36, bottomMargin=43,
                            title=f'John Castro Sanabria - CV {language.upper()}', author=profile['name'])
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(f'{output}: generated')
