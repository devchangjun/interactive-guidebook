"use client";

import { ReactNode } from "react";

interface TabInterfaceProps {
  activeTab: "preview" | "code";
  onTabChange: (tab: "preview" | "code") => void;
  previewContent: ReactNode;
  codeContent: ReactNode;
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
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-md border transition-colors ${
        isActive ? "bg-primary border-white text-white" : "bg-black border-white text-white hover:bg-gray-800"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

// Preview 아이콘 컴포넌트
function PreviewIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
}

// Code 아이콘 컴포넌트
function CodeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
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
      <div className="bg-gray-900 rounded-xl border border-gray-700 p-8 relative">
        {/* 새로고침 버튼 */}
        <button className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
          <RefreshIcon />
        </button>

        {/* 데모 컨테이너 */}
        <div className="flex items-center justify-center min-h-[400px]">{previewContent}</div>
      </div>

      {/* 컨트롤 패널 */}
      {controlPanel && <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">{controlPanel}</div>}
    </div>
  );
}

// Code 탭 컴포넌트
interface CodeTabProps {
  codeContent: ReactNode;
  codeLanguage?: string;
  onCopyCode?: () => void;
  onSeeFullSnippet?: () => void;
}

function CodeTab({ codeContent, codeLanguage = "JS", onCopyCode, onSeeFullSnippet }: CodeTabProps) {
  return (
    <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Code</h3>
        <div className="flex items-center space-x-2">
          <select
            className="px-3 py-1 text-sm bg-gray-800 border border-gray-600 rounded text-white"
            defaultValue={codeLanguage}
          >
            <option value="JS">JS</option>
            <option value="TS">TS</option>
          </select>
          <button className="p-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors" onClick={onCopyCode}>
            <CopyIcon />
          </button>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">{codeContent}</div>

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
  codeContent,
  codeLanguage = "JS",
  onCopyCode,
  onSeeFullSnippet,
  controlPanel,
}: TabInterfaceProps) {
  return (
    <section className="mb-8">
      <div className="flex items-center space-x-4 mb-6">
        <TabButton
          isActive={activeTab === "preview"}
          onClick={() => onTabChange("preview")}
          icon={<PreviewIcon />}
          label="Preview"
        />

        <TabButton
          isActive={activeTab === "code"}
          onClick={() => onTabChange("code")}
          icon={<CodeIcon />}
          label="Code"
        />
      </div>

      {/* Preview 탭 내용 */}
      {activeTab === "preview" && <PreviewTab previewContent={previewContent} controlPanel={controlPanel} />}

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
