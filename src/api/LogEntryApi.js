import { get } from './api';

export function fetchLogEntries (logId, offset = 0) {
  return get(`log_entries?id=${logId}&offset=${offset}`);
}
