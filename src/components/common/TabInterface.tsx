"use client";

import { ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@mui/material";
import { Visibility, Code, Description } from "@mui/icons-material";

interface TabInterfaceProps {
  activeTab: "preview" | "usage" | "code";
  onTabChange: (tab: "preview" | "usage" | "code") => void;
  previewContent: ReactNode;
  usageContent: string;
  codeContent: string;
  codeLanguage?: string;
  onCopyCode?: () => void;
  onSeeFullSnippet?: () => void;
  // Preview 탭 컨트롤 패널 props 추가
  controlPanel?: ReactNode;
}

// 탭 버튼 컴포넌트
interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
}

function TabButton({ isActive, onClick, icon, label }: TabButtonProps) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      startIcon={icon}
      sx={{
        backgroundColor: isActive ? "#1f2937" : "transparent",
        color: "white",
        borderColor: "white",
        "&:hover": {
          backgroundColor: isActive ? "#111827" : "rgba(255, 255, 255, 0.1)",
          borderColor: "white",
        },
        textTransform: "none",
        fontWeight: 500,
        padding: "8px 16px",
        borderRadius: "6px",
        borderWidth: "1px",
        marginRight: "16px",
        "&.MuiButton-outlined": {
          borderColor: "white",
        },
        "&:last-child": {
          marginRight: 0,
        },
      }}
    >
      {label}
    </Button>
  );
}

// Refresh 아이콘 컴포넌트
function RefreshIcon() {
  return (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  );
}

// Copy 아이콘 컴포넌트
function CopyIcon() {
  return (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}

// Preview 탭 컴포넌트
interface PreviewTabProps {
  previewContent: ReactNode;
  controlPanel?: ReactNode;
}

function PreviewTab({ previewContent, controlPanel }: PreviewTabProps) {
  return (
    <div className="space-y-6">
      {/* 데모 컨테이너 */}
      <div className="rounded-xl border border-gray-700 p-8 relative">
        {/* 새로고침 버튼 */}
        <button className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
          <RefreshIcon />
        </button>

        {/* 데모 컨테이너 */}
        <div className="flex items-center justify-center min-h-[400px]">{previewContent}</div>
      </div>

      {/* 컨트롤 패널 */}
      {controlPanel && <div className="rounded-xl border border-gray-700 p-6">{controlPanel}</div>}
    </div>
  );
}

// Usage 탭 컴포넌트
interface UsageTabProps {
  usageContent: string;
  codeLanguage?: string;
  onCopyCode?: () => void;
}

function UsageTab({ usageContent, codeLanguage = "typescript", onCopyCode }: UsageTabProps) {
  return (
    <div className="rounded-xl border border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Usage</h3>
        <div className="flex items-center space-x-2">
          <select
            className="px-3 py-1 text-sm bg-gray-800 border border-gray-600 rounded text-white"
            defaultValue={codeLanguage}
          >
            <option value="typescript">TypeScript</option>
            <option value="javascript">JavaScript</option>
            <option value="jsx">JSX</option>
            <option value="tsx">TSX</option>
          </select>
          <button className="p-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors" onClick={onCopyCode}>
            <CopyIcon />
          </button>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <SyntaxHighlighter
          language={codeLanguage}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.875rem",
            lineHeight: "1.5",
            backgroundColor: "transparent",
          }}
          showLineNumbers={true}
          wrapLines={true}
        >
          {usageContent}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

// Code 탭 컴포넌트
interface CodeTabProps {
  codeContent: string;
  codeLanguage?: string;
  onCopyCode?: () => void;
  onSeeFullSnippet?: () => void;
}

function CodeTab({ codeContent, codeLanguage = "typescript", onCopyCode, onSeeFullSnippet }: CodeTabProps) {
  return (
    <div className="rounded-xl border border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Code</h3>
        <div className="flex items-center space-x-2">
          <select
            className="px-3 py-1 text-sm bg-gray-800 border border-gray-600 rounded text-white"
            defaultValue={codeLanguage}
          >
            <option value="typescript">TypeScript</option>
            <option value="javascript">JavaScript</option>
            <option value="jsx">JSX</option>
            <option value="tsx">TSX</option>
          </select>
          <button className="p-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors" onClick={onCopyCode}>
            <CopyIcon />
          </button>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <SyntaxHighlighter
          language={codeLanguage}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.875rem",
            lineHeight: "1.5",
            backgroundColor: "transparent",
          }}
          showLineNumbers={true}
          wrapLines={true}
        >
          {codeContent}
        </SyntaxHighlighter>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          className="px-4 py-2 text-sm bg-gray-800 border border-gray-600 rounded hover:bg-gray-700 transition-colors text-white"
          onClick={onSeeFullSnippet}
        >
          See Full Snippet
        </button>
      </div>
    </div>
  );
}

export default function TabInterface({
  activeTab,
  onTabChange,
  previewContent,
  usageContent,
  codeContent,
  codeLanguage = "typescript",
  onCopyCode,
  onSeeFullSnippet,
  controlPanel,
}: TabInterfaceProps) {
  return (
    <section className="mb-8">
      <div className="flex items-center mb-6">
        <TabButton
          isActive={activeTab === "preview"}
          onClick={() => onTabChange("preview")}
          icon={<Visibility />}
          label="Preview"
        />

        <TabButton
          isActive={activeTab === "usage"}
          onClick={() => onTabChange("usage")}
          icon={<Description />}
          label="Usage"
        />

        <TabButton isActive={activeTab === "code"} onClick={() => onTabChange("code")} icon={<Code />} label="Code" />
      </div>

      {/* Preview 탭 내용 */}
      {activeTab === "preview" && <PreviewTab previewContent={previewContent} controlPanel={controlPanel} />}

      {/* Usage 탭 내용 */}
      {activeTab === "usage" && (
        <UsageTab usageContent={usageContent} codeLanguage={codeLanguage} onCopyCode={onCopyCode} />
      )}

      {/* Code 탭 내용 */}
      {activeTab === "code" && (
        <CodeTab
          codeContent={codeContent}
          codeLanguage={codeLanguage}
          onCopyCode={onCopyCode}
          onSeeFullSnippet={onSeeFullSnippet}
        />
      )}
    </section>
  );
}
