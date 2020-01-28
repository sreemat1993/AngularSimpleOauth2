import { NGXLoggerMonitor, NGXLogInterface } from 'ngx-logger';


export class Logger implements NGXLoggerMonitor {
    onLog(log: NGXLogInterface) {
        console.log('myCustomLoggerMonitor', log);
    }
}
