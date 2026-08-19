# IT Procurement Resume Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce one truthful, polished, single-page Chinese PDF resume that positions Liu Yi for the supplied IT procurement role through IT understanding, AI-tool fluency, communication, and execution experience.

**Architecture:** Build a small reproducible ReportLab project under `D:\Codex\Projects\resume-it-procurement-2026-08-19`. Keep approved copy in a dedicated Python content module, render it through a one-page A4 builder, and validate the output with unit tests plus a separate semantic/layout QA script. Extract the existing portrait directly from the source PDF without editing it, and write only the final PDF to `D:\Codex\Outputs\resume-it-procurement-2026-08-19`.

**Tech Stack:** Bundled Python, ReportLab, pypdf, pdfplumber, pypdfium2, Pillow, pytest, Microsoft YaHei fonts, Git.

## Global Constraints

- Output exactly one A4 PDF page.
- Use the exact title `求职方向｜IT采购 · AI工具应用`.
- Use this section order: contact header, personal profile, core capabilities, internship, projects, education.
- Use a white background, deep-blue headings, black/gray body text, fine dividers, and an ATS-readable text layer.
- Keep the existing portrait, reduce its visual weight, and do not modify or regenerate it.
- Preserve both source PDFs and do not overwrite `D:\Codex\Projects\portfolio-implementation\public\resume\liu-yi-ai-application-resume.pdf`.
- Do not claim supplier sourcing, quotation comparison, contract negotiation, purchase ordering, delivery monitoring, supplier performance management, ERP use, or one year of procurement experience.
- Do not list Qoder, 悟空, OpenClaw, or Excel proficiency.
- Do not invent metrics, procurement outcomes, employer results, or enterprise production experience.
- Do not call image generation tools.
- Final output path: `D:\Codex\Outputs\resume-it-procurement-2026-08-19\刘燚_IT采购_AI工具应用_简历.pdf`.
- Preserve source hash `0148909E4A4FCF18E58D281802DE19C845A69E45A8F584DAC48D341409C87555` for `刘燚_AI应用开发工程师_简历_教育背景优化.pdf`.
- Preserve source hash `AD5C0E8AB2B01D99EC054E69AA97AE5127BF80C34C14BFD47802FFEEAC0FEDBF` for `简历 (2).pdf`.

---

## File Map

### Generator project

- `D:\Codex\Projects\resume-it-procurement-2026-08-19\src\resume_content.py` — approved resume content and plain-text export.
- `D:\Codex\Projects\resume-it-procurement-2026-08-19\src\build_resume.py` — portrait extraction, style tokens, flowables, and PDF authoring.
- `D:\Codex\Projects\resume-it-procurement-2026-08-19\tests\test_resume_content.py` — truthfulness and required-copy checks.
- `D:\Codex\Projects\resume-it-procurement-2026-08-19\tests\test_build_resume.py` — portrait, page-count, A4-size, section, and text-layer checks.
- `D:\Codex\Projects\resume-it-procurement-2026-08-19\scripts\qa_resume.py` — final-file semantic and structural validation.
- `D:\Codex\Projects\resume-it-procurement-2026-08-19\assets\portrait.jpg` — portrait extracted from the approved source PDF.
- `D:\Codex\Projects\resume-it-procurement-2026-08-19\README.md` — reproducible build and QA commands.

### Final and temporary artifacts

- `D:\Codex\Outputs\resume-it-procurement-2026-08-19\刘燚_IT采购_AI工具应用_简历.pdf` — only final deliverable.
- `D:\Codex\Temp\resume-it-procurement-2026-08-19\rendered\resume-page-1.png` — temporary visual-review render; remove after final verification.
- `C:\Users\35345\Documents\ChatGPT\个人作品集网站制作\PROJECT_MEMORY.md` — add the confirmed output path and verification result after completion.

---

### Task 1: Create the reproducible project and lock the approved content

**Files:**

- Create: `D:\Codex\Projects\resume-it-procurement-2026-08-19\src\resume_content.py`
- Create: `D:\Codex\Projects\resume-it-procurement-2026-08-19\tests\test_resume_content.py`
- Create: `D:\Codex\Projects\resume-it-procurement-2026-08-19\README.md`

**Interfaces:**

- Produces: `RESUME: dict[str, object]` containing header, profile, capability rows, internship, projects, and education.
- Produces: `get_resume_text() -> str` returning all approved human-readable copy for tests and QA.
- Consumes: the approved design specification and the two user-supplied source PDFs.

- [ ] **Step 1: Create directories and initialize an isolated Git repository**

Run in PowerShell:

```powershell
$project = 'D:\Codex\Projects\resume-it-procurement-2026-08-19'
New-Item -ItemType Directory -Force -Path "$project\src", "$project\tests", "$project\scripts", "$project\assets" | Out-Null
& 'C:\Users\35345\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe' -C $project init
```

Expected: a new repository exists only at the exact project path; no existing repository or source PDF is changed.

- [ ] **Step 2: Write the failing content test**

Create `tests/test_resume_content.py` with these checks:

```python
from src.resume_content import RESUME, get_resume_text


def test_required_identity_and_sections_are_present():
    text = get_resume_text()
    required = (
        "刘燚",
        "求职方向｜IT采购 · AI工具应用",
        "18786259271",
        "3534543791@qq.com",
        "github.com/SiHuoqwq",
        "个人概况",
        "核心能力",
        "实习经历",
        "项目经历",
        "教育背景",
        "桐梓县宏兴房地产开发有限公司",
        "销售实习生",
        "客户回访",
        "跨部门协作",
        "析数",
        "KnowledgeFlow AI",
        "华东交通大学",
    )
    assert all(item in text for item in required)
    assert RESUME["title"] == "求职方向｜IT采购 · AI工具应用"


def test_unverified_procurement_claims_are_absent():
    text = get_resume_text()
    forbidden = (
        "供应商寻源",
        "询价比价",
        "三方比价",
        "合同谈判",
        "采购下单",
        "供应商绩效",
        "熟悉采购全流程",
        "1年以上采购",
        "ERP",
        "Qoder",
        "悟空",
        "OpenClaw",
        "Excel熟练",
    )
    assert not any(item in text for item in forbidden)


def test_internship_has_only_three_approved_bullets():
    internship = RESUME["internship"]
    assert internship["company"] == "桐梓县宏兴房地产开发有限公司"
    assert internship["role"] == "销售实习生"
    assert internship["dates"] == "2024.07 - 2024.09"
    assert len(internship["bullets"]) == 3
```

- [ ] **Step 3: Run the test and confirm the module is missing**

Run:

```powershell
$python = 'C:\Users\35345\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
& $python -m pytest tests/test_resume_content.py -v
```

Expected: FAIL during collection with `ModuleNotFoundError: No module named 'src.resume_content'`.

- [ ] **Step 4: Implement the approved content module**

Create `src/resume_content.py` with the following exact copy and a recursive plain-text exporter:

```python
RESUME = {
    "name": "刘燚",
    "title": "求职方向｜IT采购 · AI工具应用",
    "contact": [
        "18786259271",
        "3534543791@qq.com",
        "github.com/SiHuoqwq",
    ],
    "profile": (
        "信息与计算科学应届本科毕业生，具备 IT 技术理解、需求沟通、数据分析与 AI 工具应用能力。"
        "销售实习期间参与客户需求梳理、客户回访、跨部门协作和销售数据分析；独立完成数据分析 Agent "
        "与 RAG 知识库项目，能够理解软件、API、数据库及 AI 产品的技术边界。期望从 IT 采购岗位切入，"
        "在需求收集、信息整理、商务沟通与交付协同中发挥复合能力。"
    ),
    "capabilities": [
        ("IT 与 AI", "Python、FastAPI、REST、SQL / MySQL 基础、数据库、DeepSeek API、LangChain、RAG、Tool Calling"),
        ("AI 工具", "使用 Codex、Claude Code 辅助开发、审查与验收，能够快速理解和验证 AI 工具的适用边界"),
        ("数据与流程", "pandas、数据整理、结构化分析、需求拆解、状态跟踪、异常处理与结果验收"),
        ("沟通与执行", "客户需求梳理、客户回访、跨部门协作、活动执行与反馈同步"),
    ],
    "internship": {
        "company": "桐梓县宏兴房地产开发有限公司",
        "role": "销售实习生",
        "dates": "2024.07 - 2024.09",
        "bullets": [
            "协助接待并回访客户，梳理实际需求与重点关注事项，持续跟进沟通进度，并向团队同步客户反馈，支持后续方案调整。",
            "参与促销活动策划与现场执行，配合销售、策划等团队协调信息及任务节点，推动活动安排落地。",
            "整理汇总销售数据与客户反馈，分析常见需求和沟通问题，据此优化推广话术与后续跟进重点。",
        ],
    },
    "projects": [
        {
            "name": "析数｜AI 数据分析工作台",
            "stack": "Python · FastAPI · React · SQLAlchemy · LangGraph · pandas · DeepSeek",
            "bullets": [
                "独立完成面向在线学习运营数据的 AI 分析工作台，支持 CSV / XLSX 上传、字段画像、自然语言分析及文本、指标、表格、图表四类结构化结果，将需求理解、数据处理和结果交付串成完整流程。",
                "V2 将模型职责收敛为受限意图识别，由后端编译固定工作流、pandas 确定性计算并通过 Evidence 校验结论；基于 FastAPI、SQLAlchemy、React 实现数据持久化、实时进度、任务取消与断线恢复。",
            ],
        },
        {
            "name": "KnowledgeFlow AI｜本地模块化 RAG 知识库",
            "stack": "Python · FastAPI · React · LangChain · Chroma · BGE Embedding · SSE",
            "bullets": [
                "构建 PDF、TXT、Markdown 文档摄入、清洗、切分、向量检索与来源追踪链路，支持重复导入、同名文档安全更新和重启加载。",
                "基于 LangChain、Chroma、FastAPI、React 实现流式问答、有限多轮上下文与会话恢复；加入检索阈值、上下文预算和无有效内容拒答，控制 AI 回答边界。",
            ],
        },
    ],
    "education": {
        "school": "华东交通大学",
        "major": "信息与计算科学",
        "degree": "本科",
        "dates": "2022.09 - 2026.06",
        "courses": "数据结构与算法、数据库、概率论与数理统计、数学模型、离散数学、C 语言、Java",
    },
}


def _flatten(value):
    if isinstance(value, dict):
        for item in value.values():
            yield from _flatten(item)
    elif isinstance(value, (list, tuple)):
        for item in value:
            yield from _flatten(item)
    else:
        yield str(value)


def get_resume_text() -> str:
    section_labels = ["个人概况", "核心能力", "实习经历", "项目经历", "教育背景"]
    return "\n".join([RESUME["name"], RESUME["title"], *section_labels, *_flatten(RESUME)])
```

- [ ] **Step 5: Run the content tests**

Run: `& $python -m pytest tests/test_resume_content.py -v`

Expected: 3 tests PASS.

- [ ] **Step 6: Add reproducible commands to README and commit**

Create `README.md` with this exact operational information:

```markdown
# IT Procurement Resume Generator

This project generates the truthful, single-page IT procurement and AI-tool resume for 刘燚.

## Inputs

- Resume source: `D:\缓存\xwechat_files\wxid_m2fh3pi4dkj022_4dc5\msg\file\2026-08\刘燚_AI应用开发工程师_简历_教育背景优化.pdf`
- Portrait: `assets\portrait.jpg`, extracted from the source PDF without retouching

## Output

`D:\Codex\Outputs\resume-it-procurement-2026-08-19\刘燚_IT采购_AI工具应用_简历.pdf`

## Commands

Run all commands from this project directory with bundled Python:

`C:\Users\35345\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe -m pytest tests -v`

`C:\Users\35345\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe scripts\qa_resume.py D:\Codex\Outputs\resume-it-procurement-2026-08-19\刘燚_IT采购_AI工具应用_简历.pdf`

The build command imports `build_resume` from `src.build_resume` and uses `assets\portrait.jpg`. The PDF authoring marker must be executed exactly once before the first successful PDF build, as documented in the implementation plan.
```

Then run:

```powershell
$git = 'C:\Users\35345\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe'
& $git -C $project add src/resume_content.py tests/test_resume_content.py README.md
& $git -C $project commit -m 'feat: define truthful IT procurement resume content'
```

Expected: the isolated generator repository has one content commit; the portfolio repository remains untouched by generator files.

---

### Task 2: Extract the portrait and build a one-page A4 PDF

**Files:**

- Create: `D:\Codex\Projects\resume-it-procurement-2026-08-19\src\build_resume.py`
- Create: `D:\Codex\Projects\resume-it-procurement-2026-08-19\tests\test_build_resume.py`
- Create: `D:\Codex\Projects\resume-it-procurement-2026-08-19\assets\portrait.jpg`

**Interfaces:**

- Consumes: `RESUME` from `src.resume_content`.
- Produces: `extract_portrait(source_pdf: Path, output_jpg: Path) -> Path`.
- Produces: `build_resume(output_pdf: Path, portrait_path: Path) -> Path`.
- Produces: a PDF with an A4 media box, exactly one page, selectable text, and the approved section order.

- [ ] **Step 1: Write the failing builder tests**

Create `tests/test_build_resume.py`:

```python
from pathlib import Path

from PIL import Image
from pypdf import PdfReader

from src.build_resume import build_resume, extract_portrait


SOURCE_PDF = Path(
    r"D:\缓存\xwechat_files\wxid_m2fh3pi4dkj022_4dc5\msg\file\2026-08\刘燚_AI应用开发工程师_简历_教育背景优化.pdf"
)


def test_extract_portrait_preserves_source_pixels(tmp_path):
    portrait = extract_portrait(SOURCE_PDF, tmp_path / "portrait.jpg")
    with Image.open(portrait) as image:
        assert image.size == (322, 459)
        assert image.mode == "RGB"


def test_build_resume_creates_one_a4_text_page(tmp_path):
    portrait = extract_portrait(SOURCE_PDF, tmp_path / "portrait.jpg")
    output = build_resume(tmp_path / "resume.pdf", portrait)
    reader = PdfReader(output)
    assert len(reader.pages) == 1
    page = reader.pages[0]
    assert abs(float(page.mediabox.width) - 595.276) < 1
    assert abs(float(page.mediabox.height) - 841.890) < 1
    text = page.extract_text()
    for required in (
        "刘燚",
        "求职方向｜IT采购 · AI工具应用",
        "个人概况",
        "核心能力",
        "实习经历",
        "项目经历",
        "教育背景",
        "桐梓县宏兴房地产开发有限公司",
    ):
        assert required in text
```

- [ ] **Step 2: Run the builder tests and confirm the module is missing**

Run:

```powershell
$python = 'C:\Users\35345\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
& $python -m pytest tests/test_build_resume.py -v
```

Expected: FAIL during collection with `ModuleNotFoundError: No module named 'src.build_resume'`.

- [ ] **Step 3: Implement the portrait extraction and layout tokens**

Create `src/build_resume.py` with these imports, tokens, helpers, and public functions:

```python
from pathlib import Path
from xml.sax.saxutils import escape

from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    Image as RLImage,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

from src.resume_content import RESUME


FONT_REGULAR = Path(r"C:\Windows\Fonts\msyh.ttc")
FONT_BOLD = Path(r"C:\Windows\Fonts\msyhbd.ttc")
BLUE = colors.HexColor("#1E4D7A")
TEXT = colors.HexColor("#252A30")
MUTED = colors.HexColor("#66727E")
LINE = colors.HexColor("#D8E0E7")
PALE = colors.HexColor("#F4F7FA")
CONTENT_WIDTH = A4[0] - 64

pdfmetrics.registerFont(TTFont("MicrosoftYaHei", str(FONT_REGULAR), subfontIndex=0))
pdfmetrics.registerFont(TTFont("MicrosoftYaHeiBold", str(FONT_BOLD), subfontIndex=0))


def extract_portrait(source_pdf: Path, output_jpg: Path) -> Path:
    reader = PdfReader(str(source_pdf))
    images = list(reader.pages[0].images)
    if len(images) != 1:
        raise ValueError(f"Expected exactly one portrait image, found {len(images)}")
    output_jpg.parent.mkdir(parents=True, exist_ok=True)
    images[0].image.convert("RGB").save(output_jpg, format="JPEG", quality=95)
    return output_jpg


def make_styles() -> dict[str, ParagraphStyle]:
    common = {
        "wordWrap": "CJK",
    }
    return {
        "name": ParagraphStyle(
            "Name", **common, fontName="MicrosoftYaHeiBold", fontSize=23,
            leading=25, textColor=TEXT
        ),
        "title": ParagraphStyle(
            "Title", **common, fontName="MicrosoftYaHeiBold", fontSize=11.5,
            leading=14, textColor=BLUE, spaceBefore=2, spaceAfter=3
        ),
        "contact": ParagraphStyle(
            "Contact", **common, fontName="MicrosoftYaHei", fontSize=8.2,
            leading=10, textColor=MUTED
        ),
        "section": ParagraphStyle(
            "Section", **common, fontName="MicrosoftYaHeiBold", fontSize=10.7,
            leading=13, textColor=BLUE
        ),
        "body": ParagraphStyle(
            "Body", **common, fontName="MicrosoftYaHei", fontSize=8.3,
            leading=10.5, textColor=TEXT, spaceAfter=1.5
        ),
        "bullet": ParagraphStyle(
            "Bullet", **common, fontName="MicrosoftYaHei", fontSize=8.15,
            leading=10.25, textColor=TEXT, leftIndent=8, firstLineIndent=-7,
            spaceAfter=1.4
        ),
        "entry": ParagraphStyle(
            "Entry", **common, fontName="MicrosoftYaHeiBold", fontSize=8.8,
            leading=11, textColor=TEXT
        ),
        "date": ParagraphStyle(
            "Date", **common, fontName="MicrosoftYaHei", fontSize=7.8,
            leading=10, textColor=MUTED, alignment=TA_RIGHT
        ),
        "stack": ParagraphStyle(
            "Stack", **common, fontName="MicrosoftYaHei", fontSize=7.5,
            leading=9.4, textColor=MUTED, spaceAfter=1.3
        ),
        "label": ParagraphStyle(
            "Label", **common, fontName="MicrosoftYaHeiBold", fontSize=8.15,
            leading=10.3, textColor=BLUE
        ),
    }


def section_heading(label: str, styles: dict[str, ParagraphStyle]) -> Table:
    table = Table([[Paragraph(escape(label), styles["section"])]], colWidths=[CONTENT_WIDTH])
    table.setStyle(TableStyle([
        ("LINEBELOW", (0, 0), (-1, -1), 0.6, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 1.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2.2),
    ]))
    return table


def bullet_paragraph(text: str, styles: dict[str, ParagraphStyle]) -> Paragraph:
    return Paragraph(f"• {escape(text)}", styles["bullet"])


def entry_header(left: str, right: str, styles: dict[str, ParagraphStyle]) -> Table:
    table = Table(
        [[Paragraph(escape(left), styles["entry"]), Paragraph(escape(right), styles["date"])]],
        colWidths=[CONTENT_WIDTH - 116, 116],
    )
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
    ]))
    return table


def build_story(portrait_path: Path) -> list:
    styles = make_styles()
    contact = (
        f"{escape(RESUME['contact'][0])}  |  {escape(RESUME['contact'][1])}  |  "
        '<link href="https://github.com/SiHuoqwq" color="#1E4D7A">github.com/SiHuoqwq</link>'
    )
    header_left = [
        Paragraph(escape(RESUME["name"]), styles["name"]),
        Paragraph(escape(RESUME["title"]), styles["title"]),
        Paragraph(contact, styles["contact"]),
    ]
    portrait = RLImage(str(portrait_path), width=56, height=79.8)
    header = Table([[header_left, portrait]], colWidths=[CONTENT_WIDTH - 66, 66])
    header.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ]))

    story = [header]
    story.extend([
        section_heading("个人概况", styles),
        Paragraph(escape(RESUME["profile"]), styles["body"]),
        Spacer(1, 2),
        section_heading("核心能力", styles),
    ])

    capability_rows = [
        [Paragraph(escape(label), styles["label"]), Paragraph(escape(value), styles["body"])]
        for label, value in RESUME["capabilities"]
    ]
    capabilities = Table(capability_rows, colWidths=[66, CONTENT_WIDTH - 66])
    capabilities.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0.5),
    ]))
    story.extend([capabilities, Spacer(1, 2), section_heading("实习经历", styles)])

    internship = RESUME["internship"]
    internship_block = [
        entry_header(
            f"{internship['company']}｜{internship['role']}",
            internship["dates"],
            styles,
        ),
        *[bullet_paragraph(item, styles) for item in internship["bullets"]],
    ]
    story.extend([KeepTogether(internship_block), Spacer(1, 2), section_heading("项目经历", styles)])

    for project in RESUME["projects"]:
        project_block = [
            entry_header(project["name"], "", styles),
            Paragraph(escape(project["stack"]), styles["stack"]),
            *[bullet_paragraph(item, styles) for item in project["bullets"]],
        ]
        story.extend([KeepTogether(project_block), Spacer(1, 1.5)])

    education = RESUME["education"]
    story.extend([
        section_heading("教育背景", styles),
        entry_header(
            f"{education['school']}｜{education['major']}｜{education['degree']}",
            education["dates"],
            styles,
        ),
        Paragraph(
            f"<font name='MicrosoftYaHeiBold' color='#1E4D7A'>相关课程</font>  {escape(education['courses'])}",
            styles["body"],
        ),
    ])
    return story


def _set_metadata(canvas, _doc) -> None:
    canvas.setTitle("刘燚 - IT采购与AI工具应用简历")
    canvas.setAuthor("刘燚")
    canvas.setSubject("IT采购与AI工具应用岗位定向简历")


def build_resume(output_pdf: Path, portrait_path: Path) -> Path:
    output_pdf.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(output_pdf),
        pagesize=A4,
        leftMargin=32,
        rightMargin=32,
        topMargin=24,
        bottomMargin=24,
        pageCompression=1,
    )
    doc.build(build_story(portrait_path), onFirstPage=_set_metadata, onLaterPages=_set_metadata)
    reader = PdfReader(str(output_pdf))
    if len(reader.pages) != 1:
        raise ValueError(f"Resume must be one page, generated {len(reader.pages)} pages")
    return output_pdf
```

This implementation uses `SimpleDocTemplate` with A4 and 32-point side margins, a 56 x 79.8 point portrait, 8.15–8.3 point body copy, 10.25–10.5 point leading, `KeepTogether` for every experience block, and a thin divider below each section heading.

- [ ] **Step 4: Mark the PDF edit operation exactly once before the first successful authoring run**

Run immediately before the first builder test that can create a PDF:

```powershell
& 'C:\Users\35345\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' `
  'C:\Users\35345\.codex\plugins\cache\openai-primary-runtime\pdf\26.813.12317\skills\pdf\container_tools\mark_artifact_operation_started.mjs' `
  --operation-kind edit --expected-output-count 1 --output-format pdf
```

Expected: exit code 0. Do not run this marker again during later iterations.

- [ ] **Step 5: Run builder tests and tune only within the approved token limits**

Run:

```powershell
$python = 'C:\Users\35345\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
& $python -m pytest tests/test_build_resume.py -v
```

Expected: 2 tests PASS. If the one-page assertion fails, reduce paragraph `spaceAfter` first, leading second, and font size last; never use body text smaller than 8.0 points and never remove approved content merely to force one page.

- [ ] **Step 6: Extract the permanent portrait and commit the builder**

Run the extraction function against the approved source PDF, confirm `322 x 459 RGB`, then commit:

```powershell
$git = 'C:\Users\35345\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe'
$project = 'D:\Codex\Projects\resume-it-procurement-2026-08-19'
& $git -C $project add src/build_resume.py tests/test_build_resume.py assets/portrait.jpg
& $git -C $project commit -m 'feat: build one-page IT procurement resume PDF'
```

---

### Task 3: Generate the final PDF and run automated QA

**Files:**

- Create: `D:\Codex\Projects\resume-it-procurement-2026-08-19\scripts\qa_resume.py`
- Create: `D:\Codex\Outputs\resume-it-procurement-2026-08-19\刘燚_IT采购_AI工具应用_简历.pdf`

**Interfaces:**

- Consumes: `build_resume(output_pdf, portrait_path)` and the extracted portrait.
- Produces: one final PDF at the fixed output path.
- Produces: `validate_pdf(path: Path) -> list[str]`, returning validation messages or raising `AssertionError` on failure.

- [ ] **Step 1: Implement final-file QA**

Create `scripts/qa_resume.py` with this complete validator:

```python
import sys
from pathlib import Path

import pdfplumber
from pypdf import PdfReader


REQUIRED = (
    "刘燚",
    "求职方向｜IT采购 · AI工具应用",
    "18786259271",
    "3534543791@qq.com",
    "github.com/SiHuoqwq",
    "个人概况",
    "核心能力",
    "实习经历",
    "项目经历",
    "教育背景",
    "桐梓县宏兴房地产开发有限公司",
    "销售实习生",
    "2024.07 - 2024.09",
    "客户回访",
    "跨部门协作",
    "析数",
    "KnowledgeFlow AI",
    "华东交通大学",
    "2022.09 - 2026.06",
)

FORBIDDEN = (
    "供应商寻源",
    "询价比价",
    "三方比价",
    "合同谈判",
    "采购下单",
    "供应商绩效",
    "熟悉采购全流程",
    "1年以上采购",
    "ERP",
    "Qoder",
    "悟空",
    "OpenClaw",
    "Excel熟练",
)

ORDER = ("个人概况", "核心能力", "实习经历", "项目经历", "教育背景")


def validate_pdf(path: Path) -> list[str]:
    reader = PdfReader(str(path))
    assert len(reader.pages) == 1, f"Expected 1 page, found {len(reader.pages)}"
    page = reader.pages[0]
    width = float(page.mediabox.width)
    height = float(page.mediabox.height)
    assert abs(width - 595.276) < 1, f"Unexpected A4 width: {width}"
    assert abs(height - 841.890) < 1, f"Unexpected A4 height: {height}"

    with pdfplumber.open(path) as pdf:
        text = "\n".join(item.extract_text() or "" for item in pdf.pages)

    missing = [item for item in REQUIRED if item not in text]
    present_forbidden = [item for item in FORBIDDEN if item in text]
    assert not missing, f"Missing required text: {missing}"
    assert not present_forbidden, f"Forbidden text present: {present_forbidden}"

    indexes = [text.index(item) for item in ORDER]
    assert indexes == sorted(indexes), f"Section order is incorrect: {indexes}"

    return [
        "pages=1",
        f"dimensions={width:.3f}x{height:.3f}",
        f"required={len(REQUIRED)}/{len(REQUIRED)}",
        "forbidden=0",
        "section_order=PASS",
        "PASS",
    ]


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("Usage: qa_resume.py <resume.pdf>")
    for message in validate_pdf(Path(sys.argv[1])):
        print(message)
```

The validator prints page count, dimensions, required phrase count, forbidden phrase count, section order, and `PASS` only after all assertions succeed.

- [ ] **Step 2: Generate the final PDF**

Run the builder with:

```powershell
$python = 'C:\Users\35345\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
$project = 'D:\Codex\Projects\resume-it-procurement-2026-08-19'
Set-Location -LiteralPath $project
$output = 'D:\Codex\Outputs\resume-it-procurement-2026-08-19\刘燚_IT采购_AI工具应用_简历.pdf'
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $output) | Out-Null
& $python -c "from pathlib import Path; from src.build_resume import build_resume; build_resume(Path(r'$output'), Path(r'D:\Codex\Projects\resume-it-procurement-2026-08-19\assets\portrait.jpg'))"
```

Expected: exactly one PDF exists in the output directory; neither source PDF has changed.

- [ ] **Step 3: Run all tests and semantic QA**

Run:

```powershell
$python = 'C:\Users\35345\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
& $python -m pytest tests -v
& $python scripts/qa_resume.py 'D:\Codex\Outputs\resume-it-procurement-2026-08-19\刘燚_IT采购_AI工具应用_简历.pdf'
```

Expected: all pytest tests PASS; QA reports one A4 page, all required phrases, zero forbidden phrases, correct section order, and `PASS`.

- [ ] **Step 4: Commit the QA script**

```powershell
$git = 'C:\Users\35345\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe'
$project = 'D:\Codex\Projects\resume-it-procurement-2026-08-19'
& $git -C $project add scripts/qa_resume.py README.md
& $git -C $project commit -m 'test: validate final resume semantics and structure'
```

---

### Task 4: Render, visually inspect, and finalize the deliverable

**Files:**

- Create temporarily: `D:\Codex\Temp\resume-it-procurement-2026-08-19\rendered\resume-page-1.png`
- Modify if required: `D:\Codex\Projects\resume-it-procurement-2026-08-19\src\build_resume.py`
- Preserve: `D:\Codex\Outputs\resume-it-procurement-2026-08-19\刘燚_IT采购_AI工具应用_简历.pdf`

**Interfaces:**

- Consumes: final PDF.
- Produces: a 2.5x PDFium render for human visual review.
- Produces: a final PDF with no clipping, overlap, corrupted glyphs, unintended second page, or unreadably small text.

- [ ] **Step 1: Render page 1 with bundled PDFium**

Run:

```powershell
$python = 'C:\Users\35345\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
$renderDir = 'D:\Codex\Temp\resume-it-procurement-2026-08-19\rendered'
New-Item -ItemType Directory -Force -Path $renderDir | Out-Null
& $python -c "import pypdfium2 as pdfium; from pathlib import Path; src=Path(r'D:\Codex\Outputs\resume-it-procurement-2026-08-19\刘燚_IT采购_AI工具应用_简历.pdf'); out=Path(r'$renderDir\resume-page-1.png'); pdf=pdfium.PdfDocument(str(src)); assert len(pdf)==1; pdf[0].render(scale=2.5).to_pil().save(out)"
```

Expected: one sharp PNG render exists and matches the A4 page aspect ratio.

- [ ] **Step 2: Inspect the rendered page**

Open the PNG with the local image-view tool and verify all of the following:

- the name, title, contact details, and portrait fit without crowding;
- section headings are visually distinct and in the approved order;
- every bullet is readable at 100% zoom;
- no line overlaps a divider, photo, adjacent column, or page edge;
- no Chinese glyph appears as a box or missing character;
- the internship receives more visual priority than the projects;
- the page does not resemble a generic SaaS dashboard or use decorative skill bars;
- the bottom education block has at least 18 points of clear space above the page edge.

- [ ] **Step 3: Apply bounded visual corrections if any check fails**

Use this correction order and rerun the full test/QA/render cycle after each change:

1. reduce vertical `spaceAfter` values while keeping at least 2 points between bullet paragraphs;
2. reduce body leading while keeping it at least 10 points;
3. reduce body font size while keeping it at least 8 points;
4. shorten only redundant technical stack separators, without deleting any approved experience bullet or changing its meaning;
5. adjust the portrait no smaller than 54 x 77 points and preserve its aspect ratio.

Expected: the latest render passes every Step 2 check, and all automated checks still pass.

- [ ] **Step 4: Reconfirm source preservation and final-file integrity**

Run `Get-FileHash -Algorithm SHA256` on both source PDFs. Require the first source to equal `0148909E4A4FCF18E58D281802DE19C845A69E45A8F584DAC48D341409C87555` and the second source to equal `AD5C0E8AB2B01D99EC054E69AA97AE5127BF80C34C14BFD47802FFEEAC0FEDBF`. Reopen the final PDF, rerun all tests and `qa_resume.py`, and record the final PDF SHA-256 hash.

Expected: both source hashes are unchanged; the final PDF exists, has one page, and passes automated and visual QA.

- [ ] **Step 5: Commit any final builder adjustment and remove the temporary render**

If `src/build_resume.py` changed during visual QA, commit it as:

```powershell
$git = 'C:\Users\35345\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe'
$project = 'D:\Codex\Projects\resume-it-procurement-2026-08-19'
& $git -C $project add src/build_resume.py
& $git -C $project commit -m 'fix: refine resume layout after visual QA'
```

After verification, delete only `D:\Codex\Temp\resume-it-procurement-2026-08-19\rendered`. Keep the generator project, extracted portrait, and final PDF.

---

### Task 5: Record durable project state and hand off the PDF

**Files:**

- Modify: `C:\Users\35345\Documents\ChatGPT\个人作品集网站制作\PROJECT_MEMORY.md`
- Preserve: all unrelated existing working-tree changes.

**Interfaces:**

- Consumes: final output path, validation commands, page count, and final QA result.
- Produces: a concise durable memory entry and a user-facing final citation to the PDF.

- [ ] **Step 1: Update project memory with confirmed facts only**

Merge one concise bullet into the current project status or recent verification section stating that the 2026-08-19 IT procurement-targeted resume was created at the exact final output path, used the truthful sales internship wording, remained one A4 page, and passed text extraction plus visual QA. Do not overwrite or commit unrelated existing memory edits.

- [ ] **Step 2: Check both repositories for unintended changes**

Run `git status --short` in the portfolio repository and the generator repository. Confirm that the portfolio repository contains only its pre-existing user changes plus the intentional `PROJECT_MEMORY.md` update, and that the generator repository is clean.

- [ ] **Step 3: Deliver the final PDF**

In the final response, summarize the positioning and representative changes, state the one-page and QA result, and cite the final PDF exactly once using a plain output file citation. Do not cite rendered PNGs, builder scripts, or QA intermediates.
