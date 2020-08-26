import { get } from './api';

export function fetchProjects () {
  return get('app_logs');
}
