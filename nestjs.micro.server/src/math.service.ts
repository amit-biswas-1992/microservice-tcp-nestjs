import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
    public square(data: number[]): number[] {
        return (data || []).map(x => x * x);
    }
}
