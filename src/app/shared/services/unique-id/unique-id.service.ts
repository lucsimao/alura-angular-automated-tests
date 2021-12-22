import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UniqueIDService {
  private numberOfGeneratedIds = 0;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throw Error('Prefix can not be empty');
    }
    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;
    const result = this.formatUniqueIdWithPrefix(prefix, uniqueId);

    return result;
  }

  private generateUniqueId(): string {
    return uuid();
  }

  private formatUniqueIdWithPrefix(prefix: string, uniqueId: string) {
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }
}
