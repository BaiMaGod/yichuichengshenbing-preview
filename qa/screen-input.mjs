// The unified gameplay suite covers scene mouse/touch input, audio and boundaries.
// This alias keeps existing workflow commands compatible without duplicating runs.
import {access} from 'node:fs/promises';
try {await access((process.env.QA_OUT||'qa-evidence')+'/continuous-forging-report.json');}
catch {await import('./browser-playtest.mjs');}
