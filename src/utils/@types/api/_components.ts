import { MouseEvent } from 'react';
import { ApiForm } from '.';
import { Thead } from '..';

export interface ApiFormC {
    setApis(prev: any): void;
    data?: {
        api: ApiForm;
        idx: number;
    };
}

export interface ApiTableC {
    thead: Thead[];
    apis: ApiForm[];
    setApis(e: MouseEvent, obj: any, idx: number): void;
    setApi(e: MouseEvent, obj: any, idx: number): void;
}
