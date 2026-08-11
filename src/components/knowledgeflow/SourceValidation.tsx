export function SourceValidation() {
  return <div className="source-validation"><span className="mono diagram-label">示意</span><section><p className="mono">NO VALID CONTEXT</p><strong>无合格 Context</strong><ol><li>Fixed refusal</li><li>LLM not called</li></ol><span>固定拒答 / 不调用模型</span></section><section><p className="mono">VALID CONTEXT</p><strong>有合格 Context</strong><ol><li>Generate answer</li><li>Validate [S&lt;n&gt;]</li><li>Remove invalid citations</li><li>Show only sources used in Prompt</li></ol></section></div>
}
