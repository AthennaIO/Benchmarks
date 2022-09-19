import { HealthCheckContract } from '@ioc:Adonis/Core/HealthCheck';
/**
 * Register the `env` checker to ensure that `NODE_ENV` environment
 * variable is defined.
 */
export default function addEnvChecker(healthCheck: HealthCheckContract): void;
