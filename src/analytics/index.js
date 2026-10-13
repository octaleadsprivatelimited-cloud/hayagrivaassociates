import { createTracker } from './tracker.js';
import { productionTracking } from '../config/tracking.js';

export const tracker = createTracker({ ...productionTracking, ...(import.meta.env || {}) }, typeof window === 'undefined' ? undefined : window);
