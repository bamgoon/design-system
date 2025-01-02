/** @type {import("prettier").Config} */
export default {
  printWidth: 120, // 한 줄의 최대 길이
  tabWidth: 2, // 탭의 너비
  useTabs: false, // 탭 대신 스페이스 사용 여부
  semi: true, // 세미콜론 사용 여부
  singleQuote: false, // 작은따옴표 사용 여부
  quoteProps: "as-needed", // 객체 속성에 따옴표 사용 방식 ("as-needed", "consistent", "preserve")
  jsxSingleQuote: false, // JSX에서 작은따옴표 사용 여부
  trailingComma: "all", // 후행 콤마 사용 방식 ("none", "es5", "all")
  bracketSpacing: true, // 객체 리터럴의 중괄호 내부 공백 여부
  bracketSameLine: false, // JSX에서 '>'를 같은 줄에 배치할지 여부
  arrowParens: "always", // 화살표 함수에서 괄호 사용 방식 ("always", "avoid")
  rangeStart: 0, // 포맷팅 시작 위치
  rangeEnd: Infinity, // 포맷팅 끝 위치
  parser: "typescript", // 사용될 파서 종류 (예: "babel", "typescript")
  filepath: "", // 파일 경로 지정 (파서 결정에 사용)
  requirePragma: false, // 파일에 특정 주석이 있을 때만 포맷팅 수행
  proseWrap: "preserve", // 마크다운 등의 줄바꿈 방식 ("always", "never", "preserve")
  htmlWhitespaceSensitivity: "css", // HTML의 공백 민감도 ("css", "strict", "ignore")
  vueIndentScriptAndStyle: false, // Vue 파일의 script 및 style 태그 들여쓰기 여부
  endOfLine: "auto", // 줄 끝 문자 설정 ("auto", "lf", "crlf", "cr")
  embeddedLanguageFormatting: "auto", // 내장 언어 포맷팅 설정 ("auto", "off")
  singleAttributePerLine: false, // JSX에서 속성을 한 줄에 하나씩 배치할지 여부
  overrides: [], // 특정 파일에 대한 설정 오버라이드
  plugins: [], // 추가 플러그인 목록
  pluginSearchDirs: [], // 플러그인 검색 디렉토리
};

// 📦 **Prettier 확장 설치**
// ----------------------------------------
// [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 확장을 설치하세요.

// 🔄 **설정 변경 후 적용 방법**
// ----------------------------------------
// 변경 사항을 반영하려면 아래 단계를 따라주세요:
// 1. 단축키 `Ctrl + Shift + P`를 눌러 명령 팔레트를 엽니다.
// 2. `Developer: Reload Window`를 입력하고 선택하여 개발자 창을 다시 로드합니다.
