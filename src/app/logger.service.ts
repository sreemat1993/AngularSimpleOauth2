import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private logger: NGXLogger) {
    this.logger.registerMonitor(new Logger())
  
    this.logger.error('BLAHBLAHBLAH');
  }
}
