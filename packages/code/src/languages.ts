import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import csharp from 'highlight.js/lib/languages/csharp';
import go from 'highlight.js/lib/languages/go';
import http from 'highlight.js/lib/languages/http';
import ini from 'highlight.js/lib/languages/ini';
import java from 'highlight.js/lib/languages/java';
import perl from 'highlight.js/lib/languages/perl';
import php from 'highlight.js/lib/languages/php';
import properties from 'highlight.js/lib/languages/properties';
import python from 'highlight.js/lib/languages/python';
import ruby from 'highlight.js/lib/languages/ruby';
import rust from 'highlight.js/lib/languages/rust';
import scala from 'highlight.js/lib/languages/scala';
import swift from 'highlight.js/lib/languages/swift';
import kotlin from 'highlight.js/lib/languages/kotlin';
import objectivec from 'highlight.js/lib/languages/objectivec';
import dart from 'highlight.js/lib/languages/dart';
import bash from 'highlight.js/lib/languages/bash';
import shell from 'highlight.js/lib/languages/shell';
import sql from 'highlight.js/lib/languages/sql';
import yaml from 'highlight.js/lib/languages/yaml';
import json from 'highlight.js/lib/languages/json';
import diff from 'highlight.js/lib/languages/diff';
import xml from 'highlight.js/lib/languages/xml';

export const languageParsers = {
  javascript,
  typescript,
  csharp,
  go,
  http,
  ini,
  java,
  perl,
  php,
  properties,
  python,
  ruby,
  rust,
  scala,
  swift,
  kotlin,
  objectivec,
  dart,
  bash,
  shell,
  sql,
  yaml,
  json,
  diff,
  xml,
} as const;

export const SupportedLanguages = {
  JavaScript: 'javascript',
  JS: 'js', // Javascript alias
  TypeScript: 'typescript',
  TS: 'ts', // Typescript alias
  Csharp: 'csharp',
  Cs: 'cs', // C# alias
  Go: 'go',
  Http: 'http',
  Ini: 'ini',
  Java: 'java',
  Perl: 'perl',
  Php: 'php',
  Properties: 'properties',
  Python: 'python',
  Ruby: 'ruby',
  Rust: 'rust',
  Scala: 'scala',
  Swift: 'swift',
  Kotlin: 'kotlin',
  ObjectiveC: 'objectivec',
  Dart: 'dart',
  Bash: 'bash',
  Shell: 'shell',
  Sql: 'sql',
  Yaml: 'yaml',
  Json: 'json',
  Graphql: 'graphql',
  Diff: 'diff',
  Xml: 'xml',
} as const;

export type SupportedLanguages = typeof SupportedLanguages[keyof typeof SupportedLanguages];
