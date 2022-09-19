import { HealthCheckContract } from '@ioc:Adonis/Core/HealthCheck';
/**
 * Check for the APP_KEY to ensure it is present and has
 * desired length.
 */
export default function addAppKeyChecker(healthCheck: HealthCheckContract): void;
