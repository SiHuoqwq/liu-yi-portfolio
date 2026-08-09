export function SourceValidation() {
  return <div className="source-validation"><span className="mono diagram-label">示意</span><div><strong>无合格 Context</strong><span>固定拒答 / 不调用模型</span></div><div><strong>有合格 Context</strong><span>生成回答 → 校验来源 → 只引用进入 Prompt 的内容</span></div></div>
}
