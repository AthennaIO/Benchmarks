import { BaseCommand } from '@adonisjs/ace';
/**
 * A command to display a list of routes
 */
export default class DumpRcFile extends BaseCommand {
    static commandName: string;
    static description: string;
    /**
     * Log message
     */
    private log;
    run(): Promise<void>;
}
