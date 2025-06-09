import * as fs from 'fs';
import * as path from 'path';

const REQUIRED_SECTIONS = [
  "ELD File Header Segment:",
  "User List:",
  "CMV List:",
  "ELD Event List:",
  "ELD Event Annotations or Comments:",
  "Driver's Certification/Recertification Actions:",
  "Malfunctions and Data Diagnostic Events:",
  "ELD Login/Logout Report:",
  "CMV Engine Power-Up and Shut Down Activity:",
  "Unidentified Driver Profile Records:",
  "End of File:"
];

export interface SectionValidationResult {
  section: string;
  found: boolean;
}

export function validateEldFileStructure(filePath: string): { results: SectionValidationResult[], valid: boolean } {
  const content = fs.readFileSync(path.resolve(filePath), 'utf-8');
  const lines = content.split('\n').map(line => line.trim());

  const results = REQUIRED_SECTIONS.map(section => ({
    section,
    found: lines.includes(section)
  }));

  const valid = results.every(r => r.found);

  return { results, valid };
}
